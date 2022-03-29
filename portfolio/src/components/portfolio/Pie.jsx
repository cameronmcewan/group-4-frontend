import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

class Pie extends Component{
  // props types

  // state declaration
  constructor(props) {
    super(props);
    this.state = {
        hover: false,
        hover2: false,
    }
    this.count = 5 //amount of balance
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  
  // lifecycle methods


  // render
  render(){
    return (
      <>
        <div className="echart pie__chart">
            <ReactEcharts option={this.getOption()}/>
        </div>
      </>
    );
  }


  // event handlers
  handleMouseEnter(e,f){  //mouse enter event
    if(e == "btn1"){
      this.setState({
        hover:true
      })
    }else{
      this.setState({
        hover2:true
      })
    }
  }
  handleMouseLeave(e){    //mouse leave event
    if(e == "btn1"){
      this.setState({
        hover:false
      })
    }else{
      this.setState({
        hover2:false
      })
    }
  }
  getOption(){
    let option = {
      title: {
        text: 'FolioCoin1 balance: '+this.count,
        x:'50%',
        y:'90%'
      },
      color:['#4271D6','#59C173','#2E374B','#BA8F03','#3E2EB9','#579DB0'],
      tooltip : {
        trigger: 'item',
        //Prompt box floating content formatter, supporting string templates and callback functions
        formatter: "{a} <br/>{b} : {c} ({d}%)" ,
        borderColor:'#fff',
      },
      legend: {
        orient: 'vertical',
        top: 50,
        right: -10,
        data: ['BTC','ETH','BNB','LUNA','LINK','ETC']
      },
      series : [
        {
          name:'',
          type:'pie',
          radius:'90%',
          x:'0%',
          y:'0%',
          label:{
            formatter:'{c}%',
            position:"inside"
          },
          data:[
            {value:27, name:'BTC'},
            {value:25, name:'ETH'},
            {value:18, name:'BNB'},
            {value:15, name:'LUNA'},
            {value:10, name:'LINK'},
            {value:5, name:'ETC'}
          ],
        }
      ]
    }
    return option;
  }
}

export default Pie;