
// Here are the components of the pie chart
import logo from '../../assets/a.png';
import logo2 from '../../assets/Rectangle3.png';
import React, { Component, Fragment } from 'react';
// Import the ECharts main module
import echarts from 'echarts/lib/echarts';
import { Card } from 'antd'
//Import pie charts
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'


import './pie.css';

class Pie extends Component{
  constructor(props) {
    super(props);
    this.state = {
        hover: false,
        hover2: false,
    }
    this.count = 0;
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  render(){
    return (
      <div className="box">
        <div className="logo-pie">
          <img className="imglogo" src={logo} alt=""/>
          <img className="imglogo2" src={logo2} alt=""/>
          <p className="title1">Your PortFolio</p>
          <p className="title2">You hold 1 FolioCoin in your PortFolio</p>
        </div>
        <div className="continer">
            <p className="title">FolioCoin1</p>
            <div className="echart">
              <Card.Grid className="pie_a">
                <ReactEcharts option={this.getOption()}/>
              </Card.Grid>
            </div>
            {/* active-pie is the style of the button when the mouse passes over it, found in pie.css */}
            <div className={this.state.hover?"active-pie button1":"button1"} rel="btn1"  onMouseEnter={this.handleMouseEnter.bind(this,'btn1')} onMouseLeave={this.handleMouseLeave.bind(this,'btn1')}>
                <p className='t1'>Buy</p>
                <p className='t2'>FolioCoin</p>
            </div>
            <div className={this.state.hover2?"active-pie button2":"button2"} onMouseEnter={this.handleMouseEnter.bind(this,'btn2')} onMouseLeave={this.handleMouseLeave.bind(this,'btn2')}>
                <p className='t1'>Sell</p>
                <p className='t2'>FolioCoin</p>
            </div>
        </div>
      </div>
    );
  }
  
  handleMouseEnter(e,f){  //Mouseover events
    if(e === "btn1"){
      this.setState({
        hover:true
      })
    }else{
      this.setState({
        hover2:true
      })
    }
  }
  handleMouseLeave(e){    //Mouseover event
    if(e === "btn1"){
      this.setState({
        hover:false
      })
    }else{
      this.setState({
        hover2:false
      })
    }
  }

  getOption(){   //The pie chart approach
    let data_title = ['ETH','BTC','LUNA','ADA','BNB','others'];  //Pie chart title, available on request from the back end
    let data = [  //Pie chart data, which can be requested from the back end
      {value:27, name:'ETH'},
      {value:25, name:'BTC'},
      {value:18, name:'LUNA'},
      {value:15, name:'ADA'},
      {value:10, name:'BNB'},
      {value:5, name:'others'}
    ];
    let option = {
      title: {
        text: 'FolioCoin1 balance:  '+this.count,
        x: '100px',
        y:'85%'
      },
      color:['#4271D6','#59C173','#2E374B','#BA8F03','#3E2EB9','#579DB0'],
      tooltip : {
        trigger: 'item',
        //Prompt box floating content formatter with support for string templates and callback function forms.
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
            formatter:'{c}%',
            position:"inside"
          },
          data:data,
        }
      ]
    }
    return option;
  }
}


export default Pie;
