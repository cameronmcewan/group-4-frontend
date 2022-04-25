# PortFolio

This repository contains the frontend code for the PortFolio project, written in JavaScript using the React framework. 

## Motivation

A PortFolio is an [ERC20 token](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) representing a pre-defined 'basket of goods' (a portfolio) of crypto assets. These assets are themselves other ERC20 tokens on the Ethereum blockchain. 

What are the benefits of PortFolio?

1. Easily buy and hold a diversified set of crypto assets.
2. Redeem for the underlying assets at any time.
3. Sell the underlying assets for the open-market Eth value at any time.
4. Create custom PortFolios according to your risk preferences.

## Development

### Running the app

Prerequisite: make sure you have npm installed. 

1. Change directory to /portfolio 
2. Run 'npm install'
3. Run 'npm start'

### Smart contracts

The smart contracts that this app connects to are:

1. Portfolio.sol - an ERC20 token representing a portfolio of crypto assets/
    + Allows users to buy into the portfolio
    + Stores all assets held by the portfolio (e.g., 50 LINK, 1000 DAI)
    + Allows users to redeem their share of assets directly 
    + Allows users to sell their assets and receieve ETH

2. PortfolioFactory.sol - a contract used to create new Portfolios and track existing Portfolios\
    + Address (Kovan): *0x46783Fc2f92AdC132F5DE2f4BDE4138e3Ed8673a*

## Contributors

[Cameron McEwan](https://github.com/cameronmcewan)

[Yingtong Qi](https://github.com/xuexikuaile2)

[Prajwal Kulkarni](https://github.com/Prajwayne)

[Luke Kirwan](https://github.com/thelk22)

[Alex Straw](https://github.com/alex-straw)

