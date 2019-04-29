<template>
  <div>
    <div id="form2" class="form2"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'

  const form2 = 'form2';

  export default {
    data() {
      return {}
    },
    mounted() {
      this.drawForm(form2)
    },

    methods: {

      drawForm(form2) {
        var _this = this
        _this.chart = echarts.init(document.getElementById(form2))

        var option = {
          backgroundColor: '',
          title: {
            text: "",
            textStyle: {
              color: '#00FFFF',
              fontSize: 24
            }
          },
          legend: {
            bottom: 20,
            textStyle: {
              color: '#fff',
            },
            data: ['Male', 'Female']
          },
          grid: {
            left: '9%',
            right: '4%',
            bottom: '25%',
            containLabel: false
          },

          tooltip: {
            show: "true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#aaa',
              }
            },
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              }
            },
            data: ['Yes', 'No', 'Other']
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ['Yes', 'No', 'Other']
          },

          ],
          series: [{
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius: 0,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            barWidth: '20%',
            data: [33, 33, 33]
          }, {
            name: '总人数',
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius: 0,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            barWidth: '20%',
            barGap: '100%',
            data: [51, 51, 51]
          }, {
            name: 'Male',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00FFE6'
                }, {
                  offset: 1,
                  color: '#2a99c6'
                }]),
                barBorderRadius: 0,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            },
            barWidth: '20%',
            data: [8, 15, 10]
          }, {
            name: 'Female',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#3023AE'
                }, {
                  offset: 1,
                  color: '#34d88b'
                }]),
                barBorderRadius: 0,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            },
            barGap: '100%',
            data: [8, 17, 26]
          }

          ]
        };

        _this.chart.setOption(option)

      }
    }
  }
</script>

<style>
  .form2 {
    width: 500px;
    height: 300px;
    top: 0;
  }
</style>
