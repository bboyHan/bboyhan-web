<template>
  <div>
    <div class="join-info-box">
      <el-card class="join-info-card">
        <div slot="header" class="user-title-box">
          <span class="join-title-name">个人微信号：bboyHan</span>
        </div>
        <div><img src="../../assets/img/qrmine.png" class="qr-img"/></div>
      </el-card>

      <el-card class="join-info-card">
        <div slot="header" class="user-title-box">
          <span class="join-title-name">微信公众号：sharontang0323</span>
        </div>
        <div><img src="../../assets/img/qrcompany.png" class="qr-img"/></div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {

      return {
        labelPosition: 'right',
        userInfo: {
          id: null,
          username: null,
          job: null,
          workplace: null,
          description: null
        },
        isUserLogin: false
      };
    },
    computed:{

    },
    mounted() {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        var _this = this;
        var token = sessionStorage.getItem('userToken');
        console.log(token)
        if (token === null) {
          _this.isUserLogin = false
          return
        }

        axios({
          method: 'post',
          url: '/user/info',
          withCredentials: true,
          params: {
            // 'token': String(token)
          }
        }).then(function (res) {
          console.log(res.data.data)
          _this.userInfo = res.data.data
          _this.isUserLogin = true
        }).catch(function (rej) {
          console.log(rej)
        })
      }
    }

  }
</script>

<style scoped>

  .join-info-box {
    min-height: 60%;
    margin: 10px 30px;
  }

  .join-info-box .join-info-card {
    width: 90%;
    height: 500px;
    margin: 10px 0;
  }

  .join-title-name {
    font-size: 15px;
  }

  .qr-img {
    position: center;
    width: 600px;
    height: 400px;
  }
  
</style>

