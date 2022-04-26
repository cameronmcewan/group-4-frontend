import React, { useState, useRef } from "react";
import "./Create.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import YingtongPie from "../components/YingtongPie";
import YingtongPie2 from "../components/YingtongPie2";
import Tokens from "../helpers/Tokens";
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
  const stepThreeText = "Set a fee for using your PortFolio";
  const StepFour = useRef(null);
  const stepFourText = "Deploy your PortFolio";
  const StepFive = useRef(null);
  const stepFiveText = "Initialise your PortFolio";

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [ownerFee, setOwnerFee] = useState(0);
  const [initialisationAmount, setInitialisationAmount] = useState("");
  const [list, setList] = useState([
    {
      name: "BTS",
      qname: "BTS",
      rate: 0,
      scrollval: 0,
      state: true,
    },
  ]);

  const [infoOpen, setInfoOpen] = useState(false);
  const [searchList, setsearchList] = useState(Tokens);
  const [tokenSearchText, setTokenSearchText] = useState("");

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

  function valuetext(value) {
    return `${value}%`;
  }
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
              {list.map((ele, i) => {
                return (
                  <div className="mainbox" key={i}>
                    <p className="line btn-group">
                      <span className="tit">
                        {ele.name}&nbsp;<small>({ele.qname}&nbsp;)</small>
                      </span>
                      <input
                        value={ele.rate}
                        readOnly
                        className="percentage"
                        placeholder="percentage"
                        type="text"
                      ></input>
                      %
                      {ele.state === true ? (
                        <IconButton
                          type="button"
                          onClick={() => {
                            let datalist = list;
                            datalist[i].state = false;
                            setsearchList([...datalist]);
                          }}
                        >
                          <LockIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          type="button"
                          onClick={() => {
                            let datalist = list;
                            datalist[i].state = true;
                            setsearchList([...datalist]);
                          }}
                        >
                          <LockOpenIcon />
                        </IconButton>
                      )}
                      <IconButton
                        type="button"
                        onClick={() => {
                          let datalist = list;
                          datalist.splice(i, 1);
                          setsearchList([...datalist]);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </p>
                    <Slider
                      disabled={ele.state}
                      defaultValue={ele.scrollval}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider-custom"
                      step={1}
                      min={0}
                      max={100}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        if (ele.state === false) {
                          let mainlist = list;
                          mainlist[i].rate = newValue;
                          setList([...mainlist]);
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <YingtongPie List={list} />
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
              <IconButton
                type="button"
                className={classes.iconButton}
                aria-label="search"
                onClick={() => {
                  let result = Tokens().filter((ele) => {
                    return (
                      ele.name
                        .toLowerCase()
                        .indexOf(tokenSearchText.toLowerCase()) !== -1
                    );
                  });
                  setsearchList([...result]);
                }}
              >
                <SearchIcon />
              </IconButton>
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
                        let listdata = list;
                        let result = ele;
                        result.rate = "0";
                        result.scrollval = "0";
                        result.state = false;
                        setList([...listdata, result]);
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
            <InputLabel htmlFor="outlined-adornment-amount">
              Create a name for your ETF token
            </InputLabel>
            <OutlinedInput
              defaultValue={tokenName}
              placeholder="Top 10 Index"
              onChange={(e) => {
                setTokenName(e.target.value);
              }}
              id="tokenName"
              labelWidth={240}
            />
          </FormControl>
          <FormControl fullWidth className="formline" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">
              Create a Symbol for your token
            </InputLabel>
            <OutlinedInput
              defaultValue={tokenSymbol}
              placeholder=" CT 10"
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
            max={100}
            min={0}
            type="number"
            value={ownerFee}
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value > 100) {
                setOwnerFee(100);
              } else if (e.target.value < 0) {
                setOwnerFee(0);
              } else {
                setOwnerFee(e.target.value.replace(/^(0+)|[^\d]+/g, ""));
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
              tip txt value content
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
            <p>token name: {tokenName}</p>
            <p>user token: {tokenSymbol}</p>
            <div>
              <YingtongPie2 List={list} />
            </div>
            <p>Token fee {ownerFee}%</p>
            <button className="btn btn-cta" onClick={goToStep3}>
              edit token
            </button>
          </div>
          <div className="btn rightbox">
            <p>Deplay your ETF token</p>
            <div className="fn-clear">
              <div className="fl">
                Price to deplay token
                <br /> in USD
              </div>
              <div className="fr">
                0.0123ETH
                <br />
                <div className="price">
                  $
                  <FormControl
                    fullWidth
                    className="formline"
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      price
                    </InputLabel>
                    <OutlinedInput
                      defaultValue={initialisationAmount}
                      placeholder="input price"
                      onChange={(e) => {
                        setInitialisationAmount(e.target.value);
                      }}
                      labelWidth={30}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep3}>
            Back
          </button>
          <button className="btn btn-cta" onClick={goToStep4}>
            Deploy Token
          </button>
        </div>
      </section>
    </>
  );
};

export default Create;
