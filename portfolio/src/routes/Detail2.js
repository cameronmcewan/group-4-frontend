
import React, { useEffect, useState, useContext, Component, useRef } from "react";
// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts.js'
// 引入饼状图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// 引入图例组件
import 'echarts/lib/component/legend';
function Pie(props) {
  const [state, setState] = useState({
    data1: 8,
    data2: 12
  });
  useEffect(() => {
    console.log(props);
    let list = props;
    let namelist = props.List.map((ele) => {
      return ele.name;
    })
    let datas = props.List.map((ele) => {
      return {
        name: ele.name,
        value: ele.rate
      };
    })
    console.log(namelist)
    console.log(namelist)
    let myChart = echarts.init(document.getElementById('pie'));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // // x: 'center',
        // top: '0',
        data: namelist
      },
      series: [
        {
          // name: '',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: datas
        }
      ]
    });
    window.onresize = function () {
      myChart.resize();
    }
  }, [props])
  return (
    <div>
      <div id="pie" style={{ width: '100%', height: '400px' }}></div>
    </div>
  )
}
// class Pie extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data1: 8,
//       data2: 12
//     }
//   }

//   render() {

//   }
// }
export default Pie;