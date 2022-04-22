import { useState, useContext, useEffect } from "react";
import { UserContext } from "../helpers/UserContext";
// import portfolio from "../contracts/Portfolio";
import { ethers } from "ethers";
import PortfolioABI from "../contracts/PortfolioABI.json";

const PortfolioCard = (props) => {
  const userContext = useContext(UserContext);
  const [tokensToSell, setTokensToSell] = useState(0);
  const [ethAmountInWei, setEthAmountInWei] = useState(0);
  const [totalSupply, setTotalSupply] = useState("");
  const [userBalance, setUserBalance] = useState("");

  useEffect(() => {
    const getTotalSupply = async () => {
      const totalSupply = await portfolioContractExternalProvider.totalSupply();
      setTotalSupply(totalSupply.toString());
    };

    const getUserBalance = async () => {
      const userBalance = await portfolioContractExternalProvider.balanceOf(
        userContext.address
      );
      setUserBalance(userBalance.toString());
    };

    const portfolioContractExternalProvider = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      ethers.providers.getDefaultProvider("kovan")
    );

    getTotalSupply();
    getUserBalance();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [userContext.address]); // If address changes then re-run useEffect

  const buy = async () => {
    console.log("BUY: Buying into contract...");
    const portfolio = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      userContext.signer
    );
    console.log("BUY: established connection to contract...");
    const tx = {
      from: userContext.address,
      value: ethAmountInWei,
    };
    console.log(`BUY: sending tx: {from=${tx.from}, value=${tx.value}}`);
    const receipt = await portfolio.buy(tx);
    console.log(`BUY: got receipt: ${receipt}`);
  };

  const sellAssets = async () => {
    console.log("SELL: Selling holding in contract...");
    const portfolio = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      userContext.signer
    );
    console.log("SELL: established connection to contract...");
    const receipt = await portfolio.sellAssets(tokensToSell);
    console.log(`SELL: got receipt: ${receipt}`);
  };

  const redeemAssets = async () => {
    console.log("SELL: Selling holding in contract...");
    const portfolio = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      userContext.signer
    );
    console.log("SELL: established connection to contract...");
    const receipt = await portfolio.redeemAssets(tokensToSell);
    console.log(`SELL: got receipt: ${receipt}`);
  };

  return (
    <div className="block center">
      <h2>
        {props.token.name} ({props.token.symbol})
      </h2>
      {/* Include a pie chart or some other graphic of the contents of the portfolio */}
      <p>
        {/* {tokenAddresses[props.token.tokenAddresses[0]]},{" "} */}
        <ul></ul>
      </p>
      {userContext.address && (
        <div>
          <table>
            <tr>
              <td>Circulating Supply:</td>
              <td>{totalSupply} Tokens</td>
            </tr>
            <tr>
              <td>Your Balance :</td>
              <td>{userBalance} Tokens</td>
            </tr>
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
      )}
    </div>
  );
};

export default PortfolioCard;
