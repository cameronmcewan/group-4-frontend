import { useState, useContext, useEffect } from "react";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";
import PortfolioABI from "../contracts/PortfolioABI.json";

const PortfolioDetail = (props) => {
  const userContext = useContext(UserContext);
  const [portfolio, setPortfolio] = useState();
  const [tokensToSell, setTokensToSell] = useState(0);
  const [ethAmountInWei, setEthAmountInWei] = useState(0);
  const [totalSupply, setTotalSupply] = useState("");
  const [userBalance, setUserBalance] = useState("");

  // Runs when component renders or userContext.address changes
  useEffect(() => {
    const signerOrProvider = userContext.signer
      ? userContext.signer
      : ethers.providers.getDefaultProvider("kovan");
    const portfolioContract = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      signerOrProvider
    );
    portfolioContract.totalSupply().then((res) => {
      setTotalSupply(res.toString());
    });
    if (userContext.address) {
      portfolioContract.balanceOf(userContext.address).then((res) => {
        setUserBalance(res.toString());
      });
    }
    setPortfolio(portfolioContract);
  }, [userContext.address]);

  const buy = async () => {
    const tx = {
      from: userContext.address,
      value: ethAmountInWei,
    };
    await portfolio.buy(tx);
  };

  const sellAssets = async () => {
    await portfolio.sellAssets(tokensToSell);
  };

  const redeemAssets = async () => {
    await portfolio.redeemAssets(tokensToSell);
  };

  return (
    <div className="block center">
      {userContext.address ? (
        <div>
          <h2>
            {props.token.name} ({props.token.symbol})
          </h2>
          <p>Circulating Supply:</p>
          <p>{totalSupply}</p>
          <p>Your Balance :</p>
          <p>{userBalance}</p>
          <table>
            <tr>
              <td>Amount (WEI) :</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={ethAmountInWei}
                  onChange={(e) => setEthAmountInWei(e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-cta" onClick={buy}>
                  Buy
                </button>
              </td>
            </tr>
            <tr>
              <td>Portfolio Tokens :</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={tokensToSell}
                  onChange={(e) => setTokensToSell(e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-cta" onClick={sellAssets}>
                  Sell Assets
                </button>
              </td>
            </tr>
            <tr>
              <td>Portfolio Tokens :</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={tokensToSell}
                  onChange={(e) => setTokensToSell(e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-cta" onClick={redeemAssets}>
                  Redeem Assets
                </button>
              </td>
            </tr>
          </table>
        </div>
      ) : (
        <p>Please connect to Metamask</p>
      )}
    </div>
  );
};

export default PortfolioDetail;
