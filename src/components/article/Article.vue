<template>
  <div>
    <div class="md-shodow">
      <div class="article-title-box">
        <h2>{{title}}</h2>
      </div>
      <mavon-editor class="article-info-box"
                    v-model="value"
                    :subfield="false"
                    :defaultOpen="defaultData"
                    :toolbarsFlag="false"
                    :boxShadow="true"
                    :editable="false"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  const articleId = 1

  export default {
    data() {
      return {
        value: '',
        defaultData: 'preview',
        articleId: '1',
        title: ''
      };
    },
    mounted() {
      this.getArticleById(articleId)
    },
    methods: {
      getArticleById(articleId) {

        var _this = this;

        axios({
          method: 'get',
          url: '/article/1',
          withCredentials: true,
          params: {}
        }).then(function (res) {
          console.log(res.data.data)
          _this.value = res.data.data.info
          _this.title = res.data.data.title
        }).catch(function (rej) {
          console.log(rej)
        })
      },
    }

  }
</script>

<style scoped>

  .md-shodow {
  margin: 10px 30px;
  }

  .md-shodow .article-title-box{
    padding: 10px 10px;
  }

</style>
