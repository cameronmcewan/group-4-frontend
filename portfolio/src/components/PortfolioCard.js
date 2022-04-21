import { useState, useContext, useEffect} from "react";
import { UserContext } from "../helpers/UserContext";
// import portfolio from "../contracts/Portfolio";
import { ethers, BigNumber } from "ethers";
import PortfolioABI from "../contracts/PortfolioABI.json";
import Web3 from "web3";

const PortfolioCard = (props) => {
  const tokenAddresses = {
    "0xd0A1E359811322d97991E03f863a0C30C2cF029C": "WETH",
    "0xA0A5aD2296b38Bd3e3Eb59AAEAF1589E8d9a29A9": "WBTC",
    "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa": "DAI",
    "0xa36085F69e2889c224210F603D836748e7dC0088": "LINK",
  };
  const { address } = useContext(UserContext);
  const [tokensToSell, setTokensToSell] = useState(100000000);
  const [ethAmountInWei, setEthAmountInWei] = useState(100000000);
  const [totalSupply, setTotalSupply] = useState('');
  const [userBalance, setUserBalance] = useState('');
  const [assetQuantities, setAssetQuantities] = useState([]);



  // // Only runs once on component mount
  // useEffect(() => {
  //   getTotalSupply().then((fetchedTotalSupply) => setTotalSupply(fetchedTotalSupply));
  // }, []);

  useEffect(() => {
    const getTotalSupply = async () => {
      const totalSupply = await portfolioContractExternalProvider.totalSupply();
      setTotalSupply(totalSupply.toString());
    };

    const getUserBalance = async () => {
      const userBalance = await portfolioContractExternalProvider.balanceOf(address);
      setUserBalance(userBalance.toString());
    };

    const getAssetHoldings = async () => {
      const holdings = []
      for (let i = 0; i < props.token.tokenAddresses.length; i++) {
        const assetQuantity = await portfolioContractExternalProvider.assetQuantities(props.token.tokenAddresses[i])
        holdings.push(parseInt(assetQuantity))
      }
      setAssetQuantities(holdings)
    }

    const portfolioContractExternalProvider = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      ethers.providers.getDefaultProvider("kovan")
    );
  
    getTotalSupply(); // run it, run it
    getUserBalance();
    getAssetHoldings();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, [address]);  // If address changes then re-run useEffect

  // Method for buying with Web3
  const buyWeb3 = async () => {
    window.ethereum.enable();
    const web3 = new Web3(window.web3.currentProvider);
    const portfolio = new web3.eth.Contract(PortfolioABI, props.token.address);
    portfolio.methods
      .buy()
      .send({
        from: address,
        value: ethAmountInWei,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

  // Method for buying with Ethers
  const buyEthers = async () => {
    console.log("BUY: Buying into contract...");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("BUY: Got provider and signer...");
    const portfolio = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      signer
    );
    console.log("BUY: established connection to contract...");
    const tx = {
      from: address,
      value: ethAmountInWei,
    };
    console.log(`BUY: sending tx: {from=${tx.from}, value=${tx.value}}`);
    const receipt = await portfolio.buy(tx);
    console.log(`BUY: got receipt: ${receipt}`);
  };

  // Method for buying with Ethers
  const sellAssetsEthers = async () => {
    console.log("SELL: Selling holding in contract...");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("SELL: Got provider and signer...");
    const portfolio = new ethers.Contract(
      props.token.address,
      PortfolioABI,
      signer
    );
    console.log("SELL: established connection to contract...");
    const receipt = await portfolio.sellAssets(tokensToSell);
    console.log(`SELL: got receipt: ${receipt}`);
  };

    // Method for buying with Ethers
  const redeemAssetsEthers = async () => {
      console.log("SELL: Selling holding in contract...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log("SELL: Got provider and signer...");
      const portfolio = new ethers.Contract(
        props.token.address,
        PortfolioABI,
        signer
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
      {address}
      {/* Include a pie chart or some other graphic of the contents of the portfolio */}
      <p>Contract address: {props.token.address}</p>
      <p>
        {tokenAddresses[props.token.tokenAddresses[0]]},{" "}
        {assetQuantities}
      </p>
      {address && (
        <div>
          <table>
          <tr>
            <td>
              Circulating Supply:
            </td>
            <td>
              {totalSupply} Tokens
            </td>
          </tr>
          <tr>
            <td>
              Your Balance :
            </td>
            <td>
              {userBalance} Tokens
            </td>
          </tr>
          <tr>
            <td>
              Amount (WEI) :
            </td>
            <td>
              <input type="number" min = "0" value={ethAmountInWei} onChange={(e) => setEthAmountInWei(e.target.value)}/>
            </td>
            <td>
              <button className="btn btn-cta" onClick={buyEthers}>
              Buy
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Portfolio Tokens :
            </td>
            <td>
            <input type="number" min = "0" value={tokensToSell} onChange={(e) => setTokensToSell(e.target.value)}/>
            </td>
            <td>
            <button className="btn btn-cta" onClick={sellAssetsEthers}>
              Sell Assets
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Portfolio Tokens :
            </td>
            <td>
            <input type="number" min = "0" value={tokensToSell} onChange={(e) => setTokensToSell(e.target.value)}/>
            </td>
            <td>
            <button className="btn btn-cta" onClick={redeemAssetsEthers}>
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
