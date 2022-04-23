import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../helpers/UserContext";
import { ethers } from "ethers";
import Portfolio from "../../contracts/Portfolio.json";
import CustomPieChart from "./CustomPieChart";

const PortfolioDetail = (props) => {
  const userContext = useContext(UserContext);
  const [portfolioContract, setPortfolioContract] = useState();
  const [tokensToSell, setTokensToSell] = useState(0);
  const [weiToSpend, setEthAmountInWei] = useState(0);
  const [totalSupply, setTotalSupply] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const [percentageHoldings, setPercentageHoldings] = useState([]);

  // Runs when component renders or userContext.address changes
  useEffect(() => {
    const signerOrProvider = userContext.signer
      ? userContext.signer
      : ethers.providers.getDefaultProvider("kovan");
    const portfolioContract = new ethers.Contract(
      props.token.address,
      Portfolio.abi,
      signerOrProvider
    );
    portfolioContract.totalSupply().then((totalSupply) => {
      setTotalSupply(totalSupply.toString());
    });
    portfolioContract.getTokenAddresses().then((tokenAddresses) => {
      setTokenAddresses(tokenAddresses);
    });
    portfolioContract.getPercentageHoldings().then((percentageHoldings) => {
      setPercentageHoldings(
        percentageHoldings.map((holding) => holding.toNumber())
      );
    });
    if (userContext.address) {
      portfolioContract.balanceOf(userContext.address).then((res) => {
        setUserBalance(res.toString());
      });
    }
    setPortfolioContract(portfolioContract);
  }, [userContext.address]);

  const buy = async () => {
    const tx = {
      from: userContext.address,
      value: weiToSpend,
    };
    await portfolioContract.buy(tx);
  };

  const sellAssets = async () => {
    await portfolioContract.sellAssets(tokensToSell);
  };

  const redeemAssets = async () => {
    await portfolioContract.redeemAssets(tokensToSell);
  };

  return (
    <div>
      <div style={{ float: "left", height: "500px", width: "500px" }}>
        <CustomPieChart
          tokenAddresses={tokenAddresses}
          percentageHoldings={percentageHoldings}
        />
      </div>
      <div style={{ float: "right" }}>
        <p>Circulating Supply:</p>
        <p>{totalSupply}</p>
        <p>Your Balance:</p>
        <p>{userBalance}</p>
        <table>
          <tr>
            <td>Amount (WEI) :</td>
            <td>
              <input
                type="number"
                min="0"
                value={weiToSpend}
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
    </div>
  );
};

export default PortfolioDetail;
