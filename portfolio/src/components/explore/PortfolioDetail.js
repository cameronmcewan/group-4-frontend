import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../helpers/UserContext";
import { ethers } from "ethers";
import Portfolio from "../../contracts/Portfolio.json";
import CustomPieChart from "./CustomPieChart";
import { FormControl, Input } from "@mui/material";
import { LinearProgress } from "@mui/material";
import Icon from "react-crypto-icons";
import InputAdornment from '@mui/material/InputAdornment';


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
    portfolioContract.totalSupply().then((totalSupply) => {
      setTotalSupply(totalSupply.toString());
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
    portfolioContract.totalSupply().then((totalSupply) => {
      setTotalSupply(totalSupply.toString());
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
    portfolioContract.totalSupply().then((totalSupply) => {
      setTotalSupply(totalSupply.toString());
    });
    setUserBalanceLoading(false);
  };

  return (
    <div className="row">
      <div className="col-1" style={{ height: "15rem"}}>
        <CustomPieChart
          tokenAddresses={tokenAddresses}
          percentageHoldings={percentageHoldings}
        />
        <h3>Circulating Supply:</h3>
        {userBalanceLoading ? <LinearProgress /> : <p>{totalSupply} tokens</p>}
        <h3>Your Balance:</h3>
        {userBalanceLoading ? <LinearProgress /> : <p>{userBalance} tokens</p>}
      </div>

      <div className="col-1">

      <h4>All amounts are input in Wei</h4>

        <FormControl fullWidth>
          <div className="row">
            <input
              type="text"
              className="col-2"
              placeholder="Amount to Buy"
              onChange={(e) => {
                setEthAmountInWei(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Icon name="wei" size={25} />
                </InputAdornment>
              }
            />
            <button className="btn btn-primary col-1" onClick={buy}>
              Buy
            </button>
          </div>
        </FormControl>

        <FormControl fullWidth>
          <div className="row">
            <input
              type="text"
              className="col-2"
              placeholder="Amount to Sell"
              labelWidth={240}
              onChange={(e) => {
                setTokensToSell(e.target.value);
              }}
            />
            <button className="btn btn-primary col-1" onClick={sellAssets}>
              Sell
            </button>
          </div>
        </FormControl>

        <FormControl fullWidth>
          <div className="row">
          <input
            type="text"
            className="col-2"
            placeholder="Amount to Redeem"
            labelWidth={240}
            onChange={(e) => {
              setTokensToSell(e.target.value);
            }}
          />
          <button className="btn btn-primary col-1" onClick={redeemAssets}>
            Redeem
          </button>
          </div>
        </FormControl>

      </div>
    </div>
  );
};

export default PortfolioDetail;
