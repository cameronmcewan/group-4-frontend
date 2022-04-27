import React, { useEffect } from "react";
import * as echarts from "echarts/lib/echarts.js";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
function YingtongPie(props) {
  useEffect(() => {
    console.log(props);
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
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%",
      },
      legend: {
        data: namelist,
      },
      series: [
        {
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

export default YingtongPie;
