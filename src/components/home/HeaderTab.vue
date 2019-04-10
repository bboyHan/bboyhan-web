<template>
  <div class="header-tab">

    <img src="../../assets/img/logo.jpg" class="tab-left"/>
    <div class="tab-right">
      <el-menu router :default-active="tabIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/login">个人中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: this.$route.path
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .header-tab {
    height: 60px;
    width: 100%;
    line-height: 60px;
    position: relative;
    border-bottom: #b4b4b4 1px solid;
    /*background-color: lightskyblue;*/
  }

  .header-tab .tab-left {
    width: 60px;
    height: 60px;
    margin-left: 10%;
  }

  .header-tab .tab-right {
    float: right;
    line-height: 60px;
  }

</style>
