import React, { useState, useContext, Component, useRef } from "react";
import CreatePortfolioForm from '../components/CreatePortfolioForm';
/* ========== */
import './create.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Pie from './Detail2'
import Pie3 from './Detail3'
import name from './name'
import Slider from '@material-ui/core/Slider';
/* echart start */
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
/* echart end */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
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
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const Create = () => {

  const Begin = useRef(null);
  const Step1 = useRef(null);
  const Step2 = useRef(null);
  const Step3 = useRef(null);
  const FinalStep = useRef(null);
  /* add */
  const [sum, setsum] = useState(0);
  /* 提示 */
  const [tip, settip] = useState(false);
  /* 价格 */
  const [price, setprice] = useState('');
  /* 左侧初始列表 */
  const [list, setlist] = useState([{
    'name': 'BTS',
    'qname': 'BTS',
    'rate': 0,
    'scrollval': 0,
    'state': true
  }]);
  /* 右侧的搜索列表 */
  const [searchList, setsearchList] = useState(
    name
  );
  /* 搜索文字 */
  const [searchtxt, setsearchtxt] = useState('')
  /* token */
  const [tokenName, settokenName] = useState('');
  const [usertoken, setusertoken] = useState('');
  /* your token */
  const goToBegin = () =>
    window.scrollTo({
      top: Begin.current.offsetTop,
      behavior: "smooth"
    });

  const goToStep1 = () =>
    window.scrollTo({
      top: Step1.current.offsetTop,
      behavior: "smooth"
    });

  const goToStep2 = () =>
    window.scrollTo({
      top: Step2.current.offsetTop,
      behavior: "smooth"
    });

  const goToStep3 = () =>
    window.scrollTo({
      top: Step3.current.offsetTop,
      behavior: "smooth"
    });

  const goToFinalStep = () =>
    window.scrollTo({
      top: FinalStep.current.offsetTop,
      behavior: "smooth"
    });
  function valuetext(value) {
    return `${value}%`;
  }
  const classes = useStyles();
  return (
    <>
      <section ref={Begin}>
        <h1>Create Your Own ETF Token</h1>
        <li className="block">
          <ul><h2>1. Choose Crypto Tokens To Add To Your ETF Token</h2></ul>
          <ul><h2>2. Name Your ETF Token</h2></ul>
          <ul><h2>3. Set A Fee For Your ETF Token</h2></ul>
          <ul><h2>4. Review Your Token And Deploy To The Kovan Testnet</h2></ul>
        </li>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>Begin</button>
        </div>
      </section>

      <section ref={Step1}>
        {/* <div className={this.state.show == 1 ? 'alertW' : 'creatW not'}><Form></Form></div> */}
        <h2>Step 1</h2>
        <h1>Add Crypto Tokens To Your ETF Token</h1>
        <div className="row" id="step1">
          <div className="col-12 box">
            <div className="topbox">
              {list.map((ele, i) => {
                return (
                  <div className="mainbox" key={i}>
                    <p className="line btn-group">
                      <span className="tit">{ele.name}&nbsp;<small>({ele.qname}&nbsp;)</small></span>
                      <input value={ele.rate}
                        readOnly
                        className="percentage" placeholder="percentage" type='text'></input>%
                      {ele.state === true ? (
                        <IconButton type="button" onClick={() => {
                          let datalist = list;
                          datalist[i].state = false;
                          setsearchList([...datalist]);
                        }}>
                          <LockIcon />
                        </IconButton>
                      ) : (
                        <IconButton type="button" onClick={() => {
                          let datalist = list;
                          datalist[i].state = true;
                          setsearchList([...datalist]);
                        }}>
                          <LockOpenIcon />
                        </IconButton>
                      )}

                      <IconButton type="button" onClick={() => {
                        let datalist = list;
                        datalist.splice(i, 1);
                        setsearchList([...datalist]);
                      }}>
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
                          setlist([...mainlist]);
                        }
                      }}
                    />
                  </div>
                )
              })}
            </div>
            <Pie List={list} />
          </div>
          <div className="col-12 box rightbox">
            <Paper component="form" className={classes.root}>
              <InputBase
                defaultValue={searchtxt}
                onChange={(e) => { setsearchtxt(e.target.value) }}
                className={classes.input}
                placeholder="Search token"
                inputProps={{ 'aria-label': 'search token' }}
              />
              <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => {

                let result = name().filter((ele) => {
                  return ele.name.toLowerCase().indexOf(searchtxt.toLowerCase()) !== -1
                })
                setsearchList([...result]);
              }}>
                <SearchIcon />
              </IconButton>
            </Paper>

            <List component="nav" aria-label="secondary mailbox folders" className="listscroll">
              {
                searchList.map((ele, i) => {
                  return (
                    <div key={i}>
                      <ListItem button onClick={() => {
                        let listdata = list;
                        let result = ele;
                        result.rate = '0';
                        result.scrollval = '0';
                        result.state = false;
                        setlist([...listdata, result]);
                      }}>
                        <ListItemText primary={ele.name} />
                      </ListItem>

                    </div>

                  )
                })
              }
            </List>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>Back</button>
          <button className="btn btn-cta" onClick={goToStep2}>Continue</button>
        </div>
      </section>

      <section ref={Step2}>
        <h2>Step 2</h2>
        <h1>Add Basic Details</h1>
        <div id="Step2">
          <FormControl fullWidth className="formline" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Create a name for your ETF token</InputLabel>
            <OutlinedInput
              defaultValue={tokenName}
              placeholder="Top 10 Index"
              onChange={(e) => {
                // console.log(e.target.value)
                settokenName(e.target.value);
              }}
              id="tokenName"
              labelWidth={240}
            />
          </FormControl>
          <FormControl fullWidth className="formline" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Create a Symbol for your token</InputLabel>
            <OutlinedInput
              defaultValue={usertoken}
              placeholder=" CT 10"
              id="userToken"
              labelWidth={240}
              onChange={(e) => {
                // console.log(e.target.value)
                setusertoken(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep1}>Back</button>
          <button className="btn btn-cta" onClick={goToStep3}>Continue</button>
        </div>
      </section>

      <section ref={Step3}>
        <h2>Step 3</h2>
        <h1>Set A Fee For Your ETF Token</h1>
        <div className="tokenline">
          <input max={100} min={0} type='number' value={sum} onChange={(e) => {
            console.log(e.target.value)
            if (e.target.value > 100) {
              setsum(100)
            } else if (e.target.value < 0) {
              setsum(0)
            } else {
              setsum(e.target.value.replace(/^(0+)|[^\d]+/g, ''))
            }
          }}></input>%
          {/* <Button aria-describedby='openbtn' onClick={() => { }}>right-start</Button> */}
          <div id="tipbox">
            <IconButton type="button" onClick={() => {
              let tipstate = tip;
              settip(!tipstate)
            }}>
              <InfoOutlinedIcon />
            </IconButton>
            <div className={tip === true ? 'tipmessage show' : 'tipmessage'}>
              tip txt value content
            </div>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep2}>Back</button>
          <button className="btn btn-cta" onClick={goToFinalStep}>Continue</button>
        </div>
      </section>

      <section ref={FinalStep} id='last'>
        <h2>Final Step</h2>
        <h1>Review And Deploy Your New ETF Token</h1>
        <div className="btn-group">
          <div className="btn leftbox">
            <p>token name: {tokenName}</p>
            <p>user token: {usertoken}</p>
            <div><Pie3 List={list} /></div>
            <p>Token fee {sum}%</p>
            <button className="btn btn-cta" onClick={goToStep3}>edit token</button>
          </div>
          <div className="btn rightbox">
            <p>Deplay your ETF token</p>
            <div className="fn-clear">
              <div className="fl">
                Price to deplay token<br /> in USD
              </div>
              <div className="fr">
                0.0123ETH<br />
                <div className="price">$
                  <FormControl fullWidth className="formline" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">price</InputLabel>
                    <OutlinedInput
                      defaultValue={price}
                      placeholder="input price"
                      onChange={(e) => {
                        // console.log(e.target.value)
                        setprice(e.target.value);
                      }}
                      labelWidth={30}
                    />
                  </FormControl>
                </div>
              </div>
              {/* <button className="btn btn-cta" onClick={() => { }}>Display</button> */}
            </div>
          </div>
        </div>
        <div className="btn-scroll">
          <button className="btn btn-cta" onClick={goToStep3}>Back</button>
          <button className="btn btn-cta" onClick={goToFinalStep}>Deploy Token</button>
        </div>
      </section>
    </>
  )
}

export default Create
