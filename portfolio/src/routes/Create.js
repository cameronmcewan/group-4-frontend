import React, { useState, useRef, useEffect } from "react";
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

const Create = () => {
  const Begin = useRef(null);
  const StepOne = useRef(null);
  const stepOneText = "Add tokens to your PortFolio";
  const StepTwo = useRef(null);
  const stepTwoText = "Name your PortFolio";
  const StepThree = useRef(null);
  const stepThreeText = "Set a fee for your PortFolio";
  const StepFour = useRef(null);
  const stepFourText = "Deploy your PortFolio";
  const StepFive = useRef(null);
  const stepFiveText = "Initialise your PortFolio";

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [ownerFee, setOwnerFee] = useState(0);
  const [initialisationAmount, setInitialisationAmount] = useState("");

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

  const goToStep4 = () =>
    window.scrollTo({
      top: StepFour.current.offsetTop,
      behavior: "smooth",
    });

  const goToStep5 = () =>
    window.scrollTo({
      top: StepFive.current.offsetTop,
      behavior: "smooth",
    });

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

  const deployToken = () => {};

  const classes = useStyles();
  return (
    <>
      <section ref={Begin}>
        <h1>Create a PortFolio</h1>
        <li className="createblock">
          <ul>
            <h2>1. {stepOneText}</h2>
          </ul>
          <ul>
            <h2>2. {stepTwoText}</h2>
          </ul>
          <ul>
            <h2>3. {stepThreeText}</h2>
          </ul>
          <ul>
            <h2>4. {stepFourText}</h2>
          </ul>
          <ul>
            <h2>5. {stepFiveText}</h2>
          </ul>
        </li>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>
            Begin
          </button>
        </div>
      </section>

      <section ref={StepOne}>
        <h2>Step 1</h2>
        <h1>{stepOneText}</h1>
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
                        let mainlist = selectedTokenList;
                        mainlist[i].weightVal = newValue;
                        setSelectedTokenList([...mainlist]);
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
            Continue
          </button>
        </div>
      </section>

      <section ref={StepTwo}>
        <h2>Step 2</h2>
        <h1>{stepTwoText}</h1>
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
            Continue
          </button>
        </div>
      </section>

      <section ref={StepThree}>
        <h2>Step 3</h2>
        <h1>{stepThreeText}</h1>
        <div className="tokenline">
          <input
            type="number"
            max="100"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={ownerFee}
            onChange={(e) => {
              if (e.target.value > 100) {
                setOwnerFee(100);
              } else if (e.target.value < 0) {
                setOwnerFee(0);
              } else {
                if (e.target.value.includes(".")) {
                  setOwnerFee(parseFloat(e.target.value).toFixed(2));
                } else {
                  setOwnerFee(parseFloat(e.target.value));
                }
              }
            }}
          ></input>
          %
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
              someone buys into the portfolio. For example, if the fee is 1%,
              the owner will receive 1% of the assets bought when someone buys
              into the portfolio. Rounded to 2 d.p.
            </div>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep2}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep4}>
            Continue
          </button>
        </div>
      </section>

      <section ref={StepFour} id="last">
        <h2>Step 4</h2>
        <h1>{stepFourText}</h1>
        <div className="btn-group">
          <div className="btn leftbox">
            <div>
              <YingtongPie2 List={selectedTokenList} />
            </div>
          </div>
          <div className="btn rightbox">
            <p>Name: {tokenName}</p>
            <p>Symbol: {tokenSymbol}</p>
            <p>Fee {ownerFee}%</p>
            <button className="btn btn-cta" onClick={goToStep1}>
              Edit
            </button>
            <button className="btn btn-cta" onClick={deployToken}>
              Deploy
            </button>
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
    </>
  );
};

export default Create;
