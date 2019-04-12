<template>
  <div>
    <div class="article-list-box">
      <el-card class="article-list-card" v-for="(item,index) in articleList" :key="index" :index="item.id">
        <div slot="header" class="clearfix">
          <span><router-link :to="{path:'/article/'+item.id,params:{'id':item.id}}">{{item.title}}</router-link></span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div>
          {{item.introduction}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        articleList: []
      };
    },
    mounted() {
      this.getArticleList()
    },
    methods: {
      getArticleList() {

        var _this = this;

        axios({
          method: 'get',
          url: '/article/1ist',
          withCredentials: true,
          params: {}
        }).then(function (res) {
          console.log(res.data.data)
          _this.articleList = res.data.data
        }).catch(function (rej) {
          console.log(rej)
        })
      },
      toArticle(id) {

      }
    }

  }
</script>

<style scoped>

  .article-list-box {
    min-height: 60%;
    margin: 10px 30px;
  }

  .article-list-box .article-list-card {
    width: 90%;
    height: 200px;
    margin: 10px 0;
  }

</style>
