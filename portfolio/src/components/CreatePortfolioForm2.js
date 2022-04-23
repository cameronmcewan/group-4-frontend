import React, { Component } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import "./CreatePortfolioForm2.scss";
import { Card } from "antd";
//import the pie chart
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
import Downarrow from "../assets/img/Downarrow.png";
import Uparrow from "../assets/img/Uparrow.png";

class CreatePortfolioForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinlist: [
        { name: "Bitcoin (BTC)", val: "15" },
        { name: "XRP (XRP)", val: "15" },
        { name: "Cardano (ADA)", val: "30" },
        { name: "Chainlink (LINK)", val: "30" },
      ],
    };
    this.getOption = this.getOption.bind(this);
    this.deccoin = this.deccoin.bind(this);
    this.edit = this.edit.bind(this);
    this.addnum = this.addnum.bind(this);
    this.decnum = this.decnum.bind(this);
  }
  addnum(key, index, e) {
    let coinlist = this.state.coinlist;
    coinlist[index][key] = (parseInt(coinlist[index][key]) + 1).toString();
    console.log(coinlist);
    this.setState({
      coinlist: coinlist,
    });
  }
  decnum(key, index, e) {
    let coinlist = this.state.coinlist;
    coinlist[index][key] = parseInt(coinlist[index][key]) - 1;
    this.setState({
      coinlist: coinlist,
    });
    console.log(coinlist);
  }
  deccoin(index, e) {
    let coinlist = this.state.coinlist;
    coinlist.splice(index, 1);
    this.setState({
      coinlist: coinlist,
    });
  }
  edit(key, index, e) {
    let coinlist = this.state.coinlist;
    coinlist[index][key] = e.target.value;
    this.setState({
      coinlist: coinlist,
    });
  }
  getOption() {
    //way of pie charts
    let coinlist = this.state.coinlist;
    let data_title = [];
    let data = [];
    coinlist.map((item, index) => {
      data_title.push(item.name);
      data.push({
        name: item.name,
        value: item.val,
      });
    });
    let count = coinlist.length;
    let option = {
      title: {
        text: "FolioCoin1 balance:  " + count,
        x: "100px",
        y: "85%",
      },
      color: ["#4271D6", "#59C173", "#2E374B", "#BA8F03", "#3E2EB9", "#579DB0"],
      tooltip: {
        trigger: "item",
        //Prompt box floating content formatter with support for string templates and callback function forms.
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        borderWidth: "1px",
        borderColor: "#fff",
        // padding:10
      },
      legend: {
        orient: "vertical",
        top: 50,
        right: -5,
        data: data_title,
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: "70%",
          x: "5%",
          y: "-50px",
          label: {
            formatter: "{d}%",
            position: "inside",
          },
          data: data,
        },
      ],
    };
    return option;
  }
  renderli() {
    let coinlist = this.state.coinlist;
    return coinlist.map((item, index) => {
      return (
        <div className="bgin" key={index}>
          <span className="del" onClick={this.deccoin.bind(this, index)}>
            -
          </span>
          <span className="title">{item.name}</span>
          <div className="addrow">
            <div className="goods-btn">
              <div
                data-type="add2"
                onClick={this.addnum.bind(this, "val", index)}
              >
                <img className="arrow" src={Uparrow} />
              </div>
              <div
                data-type="dec2"
                onClick={this.decnum.bind(this, "val", index)}
              >
                <img className="arrow" src={Downarrow} />
              </div>
              <input
                type="text"
                className="cart_nums"
                onChange={this.edit.bind(this, "val", index)}
                value={item.val}
              />
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderli()}
        <Card.Grid className="pie pie_a">
          <ReactEcharts option={this.getOption()} />
        </Card.Grid>
      </div>
    );
  }
}

export default CreatePortfolioForm2;
