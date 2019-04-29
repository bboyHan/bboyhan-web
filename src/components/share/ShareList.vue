<template>
  <div>
    <div class="share-list-box">
      <!--<div class=""></div>-->
      <div class="share-list-card" v-for="(item,index) in shareList" :key="index" :index="item.id">
        <div class="share-list-card-top">
          <img src="../../assets/img/logo.jpg" class="share-card-img"/>
        </div>
        <div class="share-list-card-bottom">
          <span><router-link :to="{path:'/share/'+item.id,params:{'id':item.id}}">{{item.title}}</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        shareList: []
      };
    },
    mounted() {
      this.getShareList()
    },
    methods: {
      getShareList() {

        var _this = this;

        axios({
          method: 'get',
          url: '/share/1ist',
          withCredentials: true,
          params: {}
        }).then(function (res) {
          console.log(res.data.data)
          _this.shareList = res.data.data
        }).catch(function (rej) {
          console.log(rej)
        })
      }
    }

  }
</script>

<style scoped>

  .share-list-box {
    min-height: 60%;
    margin: 10px 30px;
    width: 90%;
  }

  .share-list-box .share-list-card {
    width: 200px;
    height: 230px;
    margin: 10px 10px;
    float: left;
    box-shadow: 1px 1px 2px #b4b4b4;
  }

  .share-list-box .share-list-card .share-list-card-top {
    width: 200px;
    height: 180px;
  }

  .share-list-box .share-list-card .share-list-card-bottom {
    width: 190px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding-left: 10px;
  }

  .share-card-img {
    width: 200px;
    height: 180px;
  }
</style>
