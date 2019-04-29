<template>
  <div>
    <div class="user-info-box">
     <!-- <el-card class="user-info-card" v-show="isUserLogin">
        <div slot="header" class="user-title-box">
          <div class="user-title-id">ID：{{userInfo.id}}</div>
          <span class="user-title-name">昵称：{{userInfo.username}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">修改资料</el-button>
        </div>



      </el-card>-->

      <el-card class="user-info-card" v-show="!isUserLogin">
        <div slot="header" class="user-title-box">
          <div class="user-title-id">ID：{{userInfo.id}}</div>
          <span class="user-title-name">昵称：{{userInfo.username}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            <router-link to="/login">去登陆</router-link>
          </el-button>
        </div>
        <div>您还没有登录！</div>
      </el-card>

    </div>
    <div v-show="isUserLogin">
      <el-timeline>
        <h4>基本情况：</h4>
        <el-timeline-item type="primary">
          <el-card>
            <div slot="header" class="user-title-box">
              <div class="user-title-id">ID：{{userInfo.id}}</div>
              <span class="user-title-name">昵称：{{userInfo.username}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">修改资料</el-button>
            </div>
            <div>
              <strong>职位：</strong>{{userInfo.job}}
              <strong style="padding-left: 50px">工作地：</strong>{{userInfo.workplace}}
              <strong style="padding-left: 50px">电话：</strong>{{userInfo.phone}}
              <strong style="padding-left: 50px">邮箱：</strong>{{userInfo.email}}
            </div>
            <span></span>
            <p>简介 ：{{userInfo.description}}</p>
          </el-card>
        </el-timeline-item>
        <h4>工作履历：</h4>
        <el-timeline-item timestamp="2018.11 - 至今" placement="top" type="success">
          <el-card>
            <h4>Xx 互联网公司</h4>
            <p>在公司负责Xxx...</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018.3 - 2018.10" placement="top" type="info">
          <el-card>
            <h4>Xx 区块链公司</h4>
            <p>在公司负责Xxx...</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2015.7 - 2018.3" placement="top" type="warning">
          <el-card>
            <h4>Xx 国企</h4>
            <div>职位： </div>
            <p>在公司负责Xxx...</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
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
    computed: {},
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

  .user-info-box {
    min-height: 90%;
    width: 100%;
    margin: 10px 10px 30px 30px;
  }

  .user-info-box .user-info-card {
    width: 90%;
    height: 80%;
    margin: 10px 0;
  }

  .user-title-id {
    font-size: 15px;
    color: #8c939d;
    margin: 10px 0;
  }

  .user-title-name {
    font-size: 15px;
    margin: 10px 0;
  }
</style>
