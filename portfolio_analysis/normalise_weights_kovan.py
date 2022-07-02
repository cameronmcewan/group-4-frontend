import numpy as np
from random import randrange


def adjust_weights(_liquid_pairs, _original_weighting_dict):
    left_to_allocate = 100  # Percentage

    token_addresses = []
    percentage_holdings = []

    for currency in _original_weighting_dict:
        if currency in _liquid_pairs:
            allocation = int(_original_weighting_dict[currency])
            token_addresses.append(_liquid_pairs[currency])
            percentage_holdings.append(allocation)

            left_to_allocate -= allocation

    n_liquid_leftover = [currency for currency in _original_weighting_dict]

    for currency_index in range(0, len(n_liquid_leftover) - 1):
        rand_allocation = randrange(int(left_to_allocate / 2))

        token_addresses.append(_liquid_pairs[n_liquid_leftover[currency_index]])
        percentage_holdings.append(rand_allocation)

        left_to_allocate -= rand_allocation

    token_addresses.append(_liquid_pairs[n_liquid_leftover[-1]])
    percentage_holdings.append(left_to_allocate)

    if sum(percentage_holdings) == 100:
        return token_addresses, percentage_holdings
    else:
        return False


def main():
    """
    Mathematics in Solidity is entirely performed using fixed-point.  Furthermore, it cannot store fractional values.
    To adapt the complex portfolios found using analytical methods, these weights must be tidied (and rounded).
    In addition, some pairs on Uniswap have no liquidity on Kovan, so these must be removed and the weights
    re-normalised.  In a proper main-net launch this step would not be necessary.
    """

    # Virtually no liquidity for most pairs, except:

    liquid_pairs = {
        'WBTC': "0xA0A5aD2296b38Bd3e3Eb59AAEAF1589E8d9a29A9",
        'WETH': "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        'LINK': "0xa36085F69e2889c224210F603D836748e7dC0088",
        'ZRX': "0x09B9dfa83d424Ab67B959BD17d46F7b30B277387",
        'BAT': "0xB8e28359AF893785708e4f40886dAf586326e2BC",
        'DAI': "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa"
    }

    # Of those with liquidity, these were their respective weights:

    original_weighting_dict = {
        'WBTC': 14.39,
        'WETH': 16.51,
        'LINK': 12.60,
    }

    # Attempts to allocate to a portfolio as similar as possible to Praj's best portfolio.
    # Where allocations of illiquid currencies were present, this function selected a random
    # number for a token that is liquid on Uniswap (Kovan).
    # Output is in the foramt necessary for portfolioFactory
    token_addresses, percentage_holdings = adjust_weights(liquid_pairs, original_weighting_dict)

    print(token_addresses)
    print(percentage_holdings)


if __name__ == "__main__":
    main()
