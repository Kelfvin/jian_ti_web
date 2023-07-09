<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="chartLine" class="line-wrap">
    <!-- <p>这里是图表下方的文字,输出不了</p> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/shine"); //引入主题
import axios from "axios";

export default {
  data() {
    return {
      chartLine: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLineChart();
    });
  },
  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(this.$el, "shine"); // 基于准备好的dom，初始化echarts实例

      // 从后端获取数据
      axios
        .get("http://8.142.36.198:3000/backapi/historyData")
        .then((response) => {
          // 将从后端获取的数据赋值给backendData对象
          var backendData = response.data;
          console.log(backendData);
          console.log(1111);
          // // 将字符串类型的数据转换为数值类型
          // backendData.seriesData.forEach((item) => {
          //   item.data = item.data.map((value) => Number(value));
          // });

          //         if (backendData.seriesData) {
          //   backendData.seriesData.forEach((item) => {
          //     item.data = item.data.map((value) => {
          //       const parsedValue = parseFloat(value);
          //       return isNaN(parsedValue) ? value : parsedValue;
          //     });
          //   });
          // } else {
          //   console.error('Series data is undefined.'); // 打印错误消息到控制台
          // }

          let option = {
            title: {
              text: "个人历史数据分析",
              textStyle: {
                color: "#3425", // 标题颜色
                fontSize: 18, // 标题字体大小
                fontWeight: "bold", // 标题字体粗细
                fontFamily: "Arial, sans-serif", // 标题字体
              },
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 指示器样式设置
                type: "line",
                lineStyle: {
                  color: "#999",
                  width: 2,
                },
              },
              textStyle: {
                color: "#333",
                fontSize: 12,
              },
            },
            legend: {
              data: ["做题总数", "正确题数", "错误题数", "拥有题库数"],
              textStyle: {
                color: "#666",
                fontSize: 14,
              },
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                axisLine: {
                  // 轴线样式设置
                  lineStyle: {
                    color: "#999",
                    width: 1,
                  },
                },
                axisLabel: {
                  // 刻度标签样式设置
                  color: "#666",
                  fontSize: 12,
                },

                axisTick: {
                  show: false,
                },
                name: "Time",
                data: backendData.xAxisData,
              },
            ],
            yAxis: [
              {
                type: "value",
                axisTick: {
                  show: false,
                },
                axisLine: {
                  // 轴线样式设置
                  lineStyle: {
                    color: "#999",
                    width: 1,
                  },
                },
                axisLabel: {
                  // 刻度标签样式设置
                  color: "#666",
                  fontSize: 12,
                },
                name: "（数量）",
              },
            ],
            series: backendData.seriesData.map((item) => ({
              name: item.name,
              type: "line",
              //stack: '总量',
              stack: "", // 空字符串或不设置 stack 属性
              data: item.data,
              emphasis: {
                label: {
                  show: true,
                  position: "bottom",
                },
              },
            })),
          };

          // 使用刚指定的配置项和数据显示图表
          this.chartLine.setOption(option);
        })
        .catch((error) => {
          console.error("Error fetching data from backend:", error);
        });
    },
  },
};
</script>

<style lang='less' scoped>
.line-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
}
</style>
