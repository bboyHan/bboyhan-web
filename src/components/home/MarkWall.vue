<template>
  <div>
    <!--<el-card class="markwall-box">
      <div id="mark_wall" class="markwall-card"></div>
    </el-card>-->
    <el-card class="dashboard-box">
      <div id="meter" class="meter-card"></div>
    </el-card>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import option from '../../js/option.js'

  // require('echarts-wordcloud');
  require('echarts/theme/macarons');
  const markwall_id = 'mark_wall';
  const meter_id = 'meter';

  export default {
    data() {
      return {}
    },
    mounted() {
      // this.drawMarkWall(markwall_id)
      this.drawMeter(meter_id)
    },

    methods: {
      createRandomItemStyle() {
        return {
          normal: {
            color: 'rgb(' + [
              Math.round(Math.random() * 50),
              Math.round(Math.random() * 30),
              Math.round(Math.random() * 20)
            ].join(',') + ')'
          }
        }
      },
      drawMeter(meter_id) {
        var _this = this
        _this.chart = echarts.init(document.getElementById(meter_id),'macarons')
        clearInterval(_this.startInterval)
        _this.startInterval = setInterval(() => {
          option.meter.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          option.meter.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
          option.meter.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
          option.meter.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
          _this.chart.setOption(option.meter, true);
        }, 5000)

      },
      drawMarkWall(markwall_id) {
        var _this = this
        _this.chart = echarts.init(document.getElementById(markwall_id))
        // _this.chart = echarts.init(document.getElementById(id))
        // 把配置和数据放这里
        _this.chart.setOption(option.markwall);
      }
    }
  }
</script>

<style>
  .markwall-box {
    height: 100px;
    width: 90%;
    margin: 10px 10px;
  }

  .markwall-box .markwall-card {
    height: 100px;
  }

  .dashboard-box {
    height: 100%;
    width: 100%;
    margin: 10px 10px;
  }

  .dashboard-box .meter-card {
    height: 300px;
    width: 50%;
    float: left;
  }
  .dashboard-box .meter-card {
    height: 300px;
    width: 50%;
    float: right;
  }
</style>
