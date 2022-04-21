import * as React from 'react';
import './detail.css';
import { Card } from 'antd'
//导入饼图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
const getOption = ()=>{
    let option = {
      title: {
        text: '',
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
        data: ['分类一','分类二','分类三','分类四','分类五','其它']
      },
      series : [
        {
          name:'',
          type:'pie',
          radius:'100%',
          label:{
            formatter:'{c}%',
            position:"inside"
          },
          data:[
            {value:27, name:'分类一'},
            {value:25, name:'分类二'},
            {value:18, name:'分类三'},
            {value:15, name:'分类四'},
            {value:10, name:'分类五'},
            {value:5, name:'其它'}
          ],
        }
      ]
    }
    return option;
  }
const Detail = props => {
    
    return (
        <div className='main-container'>
            <p className='title'>Asset1</p>
            <div className="echart2">
                <Card.Grid className="pie_a_detail">
                    <ReactEcharts option={getOption()}/>
                </Card.Grid>
            </div>
            <ul className='asset-line'>
                <li>Detail</li>
                <li>Asset1</li>
                <li>Asset2</li>
                <li>Asset3</li>
            </ul>
        </div>
    );
}

export default Detail