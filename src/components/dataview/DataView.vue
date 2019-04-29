<template>
  <div>

    <div class="dataview-bg">
      <div class="dataview-header">
        <router-link :to="{path:'/article'}" class="back-home">Back</router-link>
      </div>

      <div class="dataview-container">
        <div class="dataview-left-1">
          <form2></form2>
        </div>
        <div class="dataview-left-2">
          <form1></form1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTab from '@/components/home/HeaderTab'
  import Form1 from '@/components/dataview/Form1'
  import Form2 from '@/components/dataview/Form2'

  export default {
    components: {
      HeaderTab,
      Form1,
      Form2,
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style>

  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }

  .dataview-bg {
    background: url("../../assets/img/data_view_bg.jpg") no-repeat;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0 0;
  }

  .back-home {
    float: right;
    padding: 20px 50px;
    color: #e0e0c7;
    font-size: 20px;
  }

  .dataview-header {
    height: 60px;
  }

  .dataview-container {
    top: 60px;
    position: absolute;
  }

  .dataview-left-1 {
    top: 60px;
    position: absolute;
    margin-bottom: 40px;
  }

  .dataview-left-2 {
    top: 400px;
    margin-top: 10px;
    position: absolute;
  }

  .dataview-left-3 {
    bottom: 0;
  }
</style>
