<template>
  <div class="header-tab">

    <img src="../../assets/img/logo.jpg" class="tab-left"/>
    <div class="tab-right">
      <el-menu router :default-active="tabIndex" mode="horizontal" @select="handleSelect" v-show="!isLogin">
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
      <el-menu router :default-active="tabIndex" mode="horizontal" @select="handleSelect" v-show="isLogin">
        <el-menu-item index="/user"><img src="../../assets/img/avatar.png" class="avatar"/><span class="nickname">bboyHan</span>
        </el-menu-item>
        <el-menu-item v-on:click="logout">退出</el-menu-item>
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
    inject: ['reload'],
    computed: {
      isLogin() {
        if (sessionStorage.getItem("username") && sessionStorage.getItem("userToken")) {
          this.$store.commit("userToken", sessionStorage.getItem("userToken"))
        } else {
          this.$store.commit("userToken", null)
        }
        return this.$store.getters.isLogin
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        this.$store.commit("lougout")
        // this.$router.go(0)
        this.reload()
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
    margin-left: 4%;
  }

  .header-tab .tab-right {
    float: right;
    line-height: 60px;
    margin-right: 1%;
  }

  .header-tab .tab-right .nickname {
    font-size: 15px;
  }

  .header-tab .tab-right .avatar {
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
</style>
