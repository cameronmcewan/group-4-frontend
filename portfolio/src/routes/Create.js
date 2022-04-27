import React, { useState, useRef, useEffect, useContext } from "react";
import "./Create.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import YingtongPie from "../components/YingtongPie";
import YingtongPie2 from "../components/YingtongPie2";
import KovanTokens from "../helpers/KovanTokens";
import Slider from "@material-ui/core/Slider";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";
import PortfolioFactory from "../contracts/PortfolioFactory.json";
import Portfolio from "../contracts/Portfolio.json";
import MetaMask from "../components/MetaMask";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import { LinearProgress } from "@mui/material";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const portfolioFactoryAddress = "0x46783Fc2f92AdC132F5DE2f4BDE4138e3Ed8673a";

const Create = () => {
  const userContext = useContext(UserContext);

  const Begin = useRef(null);
  const StepOne = useRef(null);
  const StepTwo = useRef(null);
  const StepThree = useRef(null);
  const StepFour = useRef(null);
  const StepFive = useRef(null);
  const StepSix = useRef(null);
  const stages = [
    {
      number: 1,
      name: "Add tokens to your PortFolio",
    },
    {
      number: 2,
      name: "Name your PortFolio",
    },
    {
      number: 3,
      name: "Set a fee for your PortFolio",
    },
    {
      number: 4,
      name: "Deploy your PortFolio",
    },
    {
      number: 5,
      name: "Initialise your PortFolio",
    },
  ];
  const [showStepSix, setShowStepSix] = useState(false);

  // Each selected token looks like:
  // {
  //   name: "BTS",
  //   qname: "BTS",
  //   weightVal: 0,
  //   scrollVal: 0
  // }
  const [selectedTokenList, setSelectedTokenList] = useState([]);
  const [searchList, setSearchList] = useState(KovanTokens);
  const [tokenSearchText, setTokenSearchText] = useState("");
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoTwoOpen, setInfoTwoOpen] = useState(false);

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const [percentageHoldings, setPercentageHoldings] = useState([]);
  const [ownerFee, setOwnerFee] = useState(0);

  const [initialisationAmountInWei, setInitialisationAmountInWei] =
    useState("");
  const [deployedContractAddress, setDeployedContractAddress] = useState("");
  const [initialisedToken, setInitialisedToken] = useState();

  const goToBegin = () =>
    window.scrollTo({
      top: Begin.current.offsetTop,
      behavior: "smooth",
    });

  const goToStep1 = () =>
    window.scrollTo({
      top: StepOne.current.offsetTop,
      behavior: "smooth",
    });

  const goToStep2 = () =>
    window.scrollTo({
      top: StepTwo.current.offsetTop,
      behavior: "smooth",
    });

  const goToStep3 = () =>
    window.scrollTo({
      top: StepThree.current.offsetTop,
      behavior: "smooth",
    });

  const goToStep4 = () => {
    window.scrollTo({
      top: StepFour.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToStep5 = () => {
    setShowStepSix(true);
    window.scrollTo({
      top: StepFive.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToStep6 = () => {
    window.scrollTo({
      top: StepSix.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let nameResults = KovanTokens().filter((ele) => {
      return (
        ele.name.toLowerCase().indexOf(tokenSearchText.toLowerCase()) !== -1
      );
    });
    let qnameResults = KovanTokens().filter((ele) => {
      return (
        ele.qname.toLowerCase().indexOf(tokenSearchText.toLowerCase()) !== -1
      );
    });
    if (nameResults.length !== 0) {
      setSearchList([...nameResults]);
    } else {
      setSearchList([...qnameResults]);
    }
  }, [tokenSearchText]);

  const deployPortfolio = async () => {
    const portfolioFactory = new ethers.Contract(
      portfolioFactoryAddress,
      PortfolioFactory.abi,
      userContext.signer
    );
    let tokenAddresses = selectedTokenList.map((token) => token.address);
    setTokenAddresses(tokenAddresses);
    let percentageHoldings = standardiseHoldings(
      selectedTokenList.map((token) => token.weightVal)
    );
    setPercentageHoldings(percentageHoldings);

    let filter = portfolioFactory.filters.CreatePortfolio(
      null,
      tokenName,
      tokenSymbol,
      null,
      null,
      userContext.address,
      null
    );
    await portfolioFactory.create(
      tokenName,
      tokenSymbol,
      tokenAddresses,
      percentageHoldings,
      ownerFee
    );
    portfolioFactory.once(filter, (address_, name_) => {
      setDeployedContractAddress(address_);
    });
  };

  const standardiseHoldings = (tokenWeights) => {
    let weightSum = tokenWeights.reduce(
      (accumulator, current) => accumulator + current
    );
    let percentageHoldings = tokenWeights.map((weight) =>
      Math.round((weight * 100) / weightSum)
    );
    let percentageSum = percentageHoldings.reduce(
      (accumulator, current) => accumulator + current
    );
    if (percentageSum >= 100) {
      percentageHoldings[0] -= percentageSum - 100;
    } else if (percentageSum <= 100) {
      percentageHoldings[0] += 100 - percentageSum;
    }
    return percentageHoldings;
  };

  const initialisePortfolio = async () => {
    const portfolio = new ethers.Contract(
      deployedContractAddress,
      Portfolio.abi,
      userContext.signer
    );
    const opts = {
      from: userContext.address,
      value: initialisationAmountInWei,
    };
    // Ethers docs on how to wait for a transaction to be mined:
    // https://docs.ethers.io/v5/single-page/#/v5/api/contract/contract/-%23-contract-functionsSend
    let tx = await portfolio.initialisePortfolio(opts);
    goToStep6();
    await tx.wait();
    const token = {
      address: deployedContractAddress,
      name: tokenName,
      symbol: tokenSymbol,
      tokenAddresses: tokenAddresses,
      percentageHoldings: percentageHoldings,
      ownerFee: ownerFee,
    };
    setInitialisedToken(token);
  };

  const classes = useStyles();
  return (
    <>
      <section ref={Begin}>
        <h1>Create a PortFolio</h1>
        <li className="createblock">
          {stages.map((stage) => {
            return (
              <ul>
                <h2>
                  {stage.number}. {stage.name}
                </h2>
              </ul>
            );
          })}
        </li>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>
            Begin
          </button>
        </div>
      </section>

      <section ref={StepOne}>
        <h2>Step 1</h2>
        <h1>{stages[0].name}</h1>
        <div className="row" id="step1">
          <div className="col-12 box">
            <div className="topbox">
              {selectedTokenList.map((ele, i) => {
                return (
                  <div className="mainbox" key={i}>
                    <p className="line btn-group">
                      <span>
                        {ele.name}&nbsp;<small>({ele.qname})</small>
                      </span>
                      <IconButton
                        type="button"
                        onClick={() => {
                          let selectedTokens = selectedTokenList;
                          selectedTokens.splice(i, 1);
                          setSearchList([...selectedTokens]);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </p>
                    <Slider
                      defaultValue={ele.scrollVal}
                      aria-labelledby="discrete-slider-custom"
                      step={1}
                      min={0}
                      max={100}
                      onChange={(event, newValue) => {
                        let tokenList = selectedTokenList;
                        tokenList[i].weightVal = newValue;
                        setSelectedTokenList([...tokenList]);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <YingtongPie List={selectedTokenList} />
          </div>
          <div className="col-12 box rightbox">
            <Paper component="form" className={classes.root}>
              <InputBase
                defaultValue={tokenSearchText}
                onChange={(e) => {
                  setTokenSearchText(e.target.value);
                }}
                className={classes.input}
                placeholder="Search token"
                inputProps={{ "aria-label": "search token" }}
              />
            </Paper>

            <List
              component="nav"
              aria-label="secondary mailbox folders"
              className="listscroll"
            >
              {searchList.map((ele, i) => {
                return (
                  <div key={i}>
                    <ListItem
                      button
                      onClick={() => {
                        let listdata = selectedTokenList;
                        let result = ele;
                        result.weightVal = "0";
                        result.scrollVal = "0";
                        setSelectedTokenList([...listdata, result]);
                      }}
                    >
                      <ListItemText primary={ele.name} />
                    </ListItem>
                  </div>
                );
              })}
            </List>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep2}>
            Confirm
          </button>
        </div>
      </section>

      <section ref={StepTwo}>
        <h2>Step 2</h2>
        <h1>{stages[1].name}</h1>
        <div id="Step2">
          <FormControl fullWidth className="formline" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
            <OutlinedInput
              defaultValue={tokenName}
              placeholder="DeFi Index"
              onChange={(e) => {
                setTokenName(e.target.value);
              }}
              id="tokenName"
              labelWidth={240}
            />
          </FormControl>
          <FormControl fullWidth className="formline" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Symbol</InputLabel>
            <OutlinedInput
              defaultValue={tokenSymbol}
              placeholder="DFIX"
              id="userToken"
              labelWidth={240}
              onChange={(e) => {
                setTokenSymbol(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep3}>
            Confirm
          </button>
        </div>
      </section>

      <section ref={StepThree}>
        <h2>Step 3</h2>
        <h1>{stages[2].name}</h1>
        <div className="tokenline">
          <input
            type="number"
            max="10000"
            min="0"
            step="1"
            placeholder="0"
            value={ownerFee}
            onChange={(e) => {
              if (e.target.value > 10000) {
                setOwnerFee(10000);
              } else if (e.target.value < 0) {
                setOwnerFee(0);
              } else {
                  setOwnerFee(Math.round(e.target.value));
                // if (e.target.value.includes(".")) {
                //   setOwnerFee(parseInt(e.target.value).toFixed(2));
                // } else {
                //   setOwnerFee(parseInt(e.target.value));
                // }
              }
            }}
          ></input>
          0 - 10,000
          <div id="tipbox">
            <IconButton
              type="button"
              onClick={() => {
                let tipstate = infoOpen;
                setInfoOpen(!tipstate);
              }}
            >
              <InfoOutlinedIcon />
            </IconButton>
            <div
              className={infoOpen === true ? "tipmessage show" : "tipmessage"}
            >
              This fee will be paid to the owner of the portfolio every time
              someone buys into the portfolio. 
              {/* For example, if the fee is 1%,
              the owner will receive 1% of the assets bought when someone buys
              into the portfolio. Rounded to 2 d.p. */}
            </div>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep2}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep4}>
            Confirm
          </button>
        </div>
      </section>

      <section ref={StepFour} id="step4">
        <h2>Step 4</h2>
        <h1>{stages[3].name}</h1>
        <div className="btn-group">
          <h2>HELLO</h2>
          <div className="btn leftbox">
            <div>
              <YingtongPie2 List={selectedTokenList} />
            </div>
          </div>
          <div className="btn rightbox">
            <h2>Name: {tokenName}</h2>
            <h2>Symbol: {tokenSymbol}</h2>
            <h2>Fee: {ownerFee/100}%</h2>
            <button className="btn btn-cta" onClick={goToStep1}>
              Edit
            </button>
            {userContext.address ? (
              <button className="btn btn-cta" onClick={deployPortfolio}>
                Deploy
              </button>
            ) : (
              <MetaMask></MetaMask>
            )}
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep3}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep5}>
            Continue
          </button>
        </div>
      </section>

      <section ref={StepFive}>
        <h2>Step 5</h2>
        <h1>{stages[4].name}</h1>
        <h2>{tokenName}</h2>
        <h2>{tokenSymbol}</h2>
        {deployedContractAddress ? (
          <>
            <h2>Address: {deployedContractAddress}</h2>
            <div className="tokenline">
              <span>Eth </span>
              <input
                type="number"
                min="0.0001" // about £2 worth
                max="10"
                placeholder="0.0001"
                value={initialisationAmountInWei / 1000000000000000000}
                onChange={(e) => {
                  setInitialisationAmountInWei(
                    parseFloat(e.target.value) * 1000000000000000000
                  );
                }}
              ></input>
              <p>=</p>
              <span>Wei </span>
              <input
                type="number"
                min="100000000000000"
                max="10000000000000000000"
                placeholder="100000000000000"
                value={initialisationAmountInWei}
                onChange={(e) => {
                  setInitialisationAmountInWei(parseFloat(e.target.value));
                }}
              ></input>
              <div id="tipbox">
                <IconButton
                  type="button"
                  onClick={() => {
                    setInfoTwoOpen(!infoTwoOpen);
                  }}
                >
                  <InfoOutlinedIcon />
                </IconButton>
                <div
                  className={
                    infoTwoOpen === true ? "tipmessage show" : "tipmessage"
                  }
                >
                  The initial investment amount, in Wei. The Eth will be spent
                  on the tokens specified in Step 1, which will be added to the
                  portfolio. <br /> 1 Eth = 1000000000000000000 Wei
                </div>
              </div>
            </div>
            <div className="btn-scroll">
              <button className="btn btn-cta" onClick={goToStep4}>
                Back
              </button>
              <button className="btn btn-cta" onClick={initialisePortfolio}>
                Initialise
              </button>
            </div>
          </>
        ) : (
          <div className="tokenline">
            <h2>Deploying PortFolio...</h2>
            <LinearProgress />
          </div>
        )}
      </section>

      {showStepSix && (
        <section ref={StepSix}>
          <h1>Your PortFolio</h1>
          {initialisedToken ? (
            <PortfolioAccordion token={initialisedToken} />
          ) : (
            <div className="tokenline">
              <h2>Initialising PortFolio...</h2>
              <LinearProgress />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Create;
