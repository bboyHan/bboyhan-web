<template>
  <div>
    <el-card class="box-card">
      <div id="mark_wall" style="height: 500px;"></div>
    </el-card>
  </div>
</template>

<script>
  import echarts from 'echarts'

  require('echarts-wordcloud');
  // require('echarts/theme/macarons');
  const ad = 'mark_wall'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.testt(ad)
    },
    // created() {
    //   this.getPowerTrend()
    // },
    methods: {
      createRandomItemStyle() {
        return {
          normal: {
            color: 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')'
          }
        }
      },
      testt(id) {
        var _this = this
        // _this.chart = echarts.init(document.getElementById(id), 'macarons')
        _this.chart = echarts.init(document.getElementById(id))
        // 把配置和数据放这里
        _this.chart.setOption({
          title: {
            text: 'Google Trends',
            link: 'http://www.google.com/trends/hottrends'
          },
          tooltip: {
            show: true
          },
          series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: [
              {
                name: "Sam S Club",
                value: 10000,
                itemStyle: {
                  normal: {
                    color: 'black'
                  }
                }
              },
              {
                name: "Macys",
                value: 6181,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Amy Schumer",
                value: 4386,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Jurassic World",
                value: 4055,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Charter Communications",
                value: 2467,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Chick Fil A",
                value: 2244,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Planet Fitness",
                value: 1898,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Pitch Perfect",
                value: 1484,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Express",
                value: 1112,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Home",
                value: 965,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Johnny Depp",
                value: 847,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Lena Dunham",
                value: 582,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Lewis Hamilton",
                value: 555,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "KXAN",
                value: 550,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Mary Ellen Mark",
                value: 462,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Farrah Abraham",
                value: 366,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Rita Ora",
                value: 360,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Serena Williams",
                value: 282,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "NCAA baseball tournament",
                value: 273,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              },
              {
                name: "Point Break",
                value: 265,
                itemStyle: {
                  normal: {
                    color: 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                }
              }
            ]
          }]
        });
      }
    }
  }
</script>
