import React, { useEffect, useState } from "react";
// import ECharts main module
import * as echarts from "echarts/lib/echarts.js";
// import pie chart
import "echarts/lib/chart/pie";
// import prompt box and header components
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
// import legend components
import "echarts/lib/component/legend";


function YingtongPie(props) {
  const [state, setState] = useState({
    data1: 8,
    data2: 12,
  });
  useEffect(() => {
    console.log(props);
    let list = props;
    let namelist = props.List.map((ele) => {
      return ele.name;
    });
    let datas = props.List.map((ele) => {
      return {
        name: ele.name,
        value: ele.weightVal,
      };
    });
    console.log(namelist);
    console.log(namelist);
    let myChart = echarts.init(document.getElementById("pie"));
    // Charting
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        // orient: 'vertical',
        // // x: 'center',
        // top: '0',
        data: namelist,
      },
      series: [
        {
          // name: '',
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: datas,
        },
      ],
    });
    window.onresize = function () {
      myChart.resize();
    };
  }, [props]);
  return (
    <div>
      <div id="pie" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
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
export default YingtongPie;
