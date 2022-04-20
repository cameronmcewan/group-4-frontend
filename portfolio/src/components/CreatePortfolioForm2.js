import React, { useState, useContext,Component } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";
import './CreatePortfolioForm2.css';
import { Card } from 'antd'
//导入饼图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
class CreatePortfolioForm2 extends Component
{
  constructor(props) {
    super(props);
  }
  getOption(){   //饼图的方法，
    let data_title = ['分类一','分类二','分类三','分类四','分类五','其它'];  //饼图标题，可请求后端获取
    let data = [  //饼图数据，可请求后端获取
    {value:27, name:'分类一'},
    {value:25, name:'分类二'},
    {value:18, name:'分类三'},
    {value:15, name:'分类四'},
    {value:10, name:'分类五'},
    {value:5, name:'其它'}
    ];
    let count = 6;
    let option = {
      title: {
        text: 'FolioCoin1 balance:  '+count,
        x: '100px',
        y:'85%'
      },
      color:['#4271D6','#59C173','#2E374B','#BA8F03','#3E2EB9','#579DB0'],
      tooltip : {
        trigger: 'item',
        //提示框浮层内容格式器，支持字符串模板和回调函数形式。
        formatter: "{a} <br/>{b} : {c} ({d}%)" ,
        borderWidth:'1px',
        borderColor:'#fff',
        // padding:10
      },
      legend: {
        orient: 'vertical',
        top: 50,
        right: -5,
        data: data_title
      },
      series : [
        {
          name:'',
          type:'pie',
          radius:'70%',
          x:'5%',
          y:'-50px',
          label:{
            formatter:'{d}%',
            position:"inside"
          },
          data:data,
        }
      ]
    }
    return option;
  }
  render(){
      return (
          <div>
            <div className="bgin">
                <span className="del">-</span>
                <span className="title">Bitcoin (BTC)</span>
            </div>
            <div className="bgin">
                <span className="del">-</span>
                <span className="title">Bitcoin (BTC)</span>
            </div>
            <div className="bgin">
                <span className="del">-</span>
                <span className="title">Bitcoin (BTC)</span>
            </div>
            <div className="bgin">
                <span className="del">-</span>
                <span className="title">Bitcoin (BTC)</span>
            </div>
            <Card.Grid className="pie_a">
                <ReactEcharts option={this.getOption()}/>
            </Card.Grid>
          </div>
      )
  }
}

export default CreatePortfolioForm2;