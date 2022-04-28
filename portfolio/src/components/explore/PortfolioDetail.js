import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../helpers/UserContext";
import { ethers } from "ethers";
import Portfolio from "../../contracts/Portfolio.json";
import CustomPieChart from "./CustomPieChart";
import { FormControl, OutlinedInput } from "@mui/material";
import { LinearProgress } from "@mui/material";

const PortfolioDetail = (props) => {
  const userContext = useContext(UserContext);
  const [portfolioContract, setPortfolioContract] = useState();
  const [tokensToSell, setTokensToSell] = useState(0);
  const [weiToSpend, setEthAmountInWei] = useState(0);
  const [totalSupply, setTotalSupply] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const [percentageHoldings, setPercentageHoldings] = useState([]);
  const [userBalanceLoading, setUserBalanceLoading] = useState(false);

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
    setUserBalanceLoading(true);
    const opts = {
      from: userContext.address,
      value: weiToSpend,
    };
    let tx = await portfolioContract.buy(opts);
    await tx.wait();
    portfolioContract.balanceOf(userContext.address).then((res) => {
      setUserBalance(res.toString());
    });
    setUserBalanceLoading(false);
  };

  const sellAssets = async () => {
    setUserBalanceLoading(true);
    let tx = await portfolioContract.sellAssets(tokensToSell);
    await tx.wait();
    portfolioContract.balanceOf(userContext.address).then((res) => {
      setUserBalance(res.toString());
    });
    setUserBalanceLoading(false);
  };

  const redeemAssets = async () => {
    setUserBalanceLoading(true);
    let tx = await portfolioContract.redeemAssets(tokensToSell);
    await tx.wait();
    portfolioContract.balanceOf(userContext.address).then((res) => {
      setUserBalance(res.toString());
    });
    setUserBalanceLoading(false);
  };

  return (
    <div className="row">
      <div className="col-2" style={{ height: "500px", width: "400px" }}>
        <CustomPieChart
          tokenAddresses={tokenAddresses}
          percentageHoldings={percentageHoldings}
        />
      </div>
      <div className="block col-1">
        <h2>Circulating Supply:</h2>
        <p>{totalSupply} tokens</p>
        <h2>Your Balance:</h2>
        {userBalanceLoading ? <LinearProgress /> : <p>{userBalance} tokens</p>}
        <br></br>
        <FormControl fullWidth className="formline" variant="outlined">
          <OutlinedInput
            defaultValue={setEthAmountInWei}
            placeholder="Buy amount (Wei)"
            onChange={(e) => {
              setEthAmountInWei(e.target.value);
            }}
            labelWidth={240}
          />
          <button className="btn btn-primary" onClick={buy}>
            Buy
          </button>
        </FormControl>
        <FormControl fullWidth className="formline" variant="outlined">
          <OutlinedInput
            placeholder="Tokens to sell"
            labelWidth={240}
            onChange={(e) => {
              setTokensToSell(e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={sellAssets}>
            Sell Assets
          </button>
        </FormControl>
        <FormControl fullWidth className="formline" variant="outlined">
          <OutlinedInput
            placeholder="Tokens to redeem"
            labelWidth={240}
            onChange={(e) => {
              setTokensToSell(e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={redeemAssets}>
            Redeem Assets
          </button>
        </FormControl>
      </div>
    </div>
  );
};

export default PortfolioDetail;
