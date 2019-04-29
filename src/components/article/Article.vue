<template>
  <div>
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
  </div>
</template>

<script>
  import axios from 'axios'
  import HeaderTab from '@/components/home/HeaderTab'
  import MenuTab from '@/components/home/MenuTab'
  import article_mysql_info_1 from '../../md/mysql/一、基本操作与数据类型.md'
  import article_mysql_info_2 from '../../md/mysql/二、Linux环境安装Mysql.md'
  import article_java_info_1 from '../../md/java/一、概念、安装与配置.md'
  import article_java_info_2 from '../../md/java/二、基础语法与规范.md'
  import article_java_info_3 from '../../md/java/三、进制、数据类型与内存分析.md'
  import article_java_info_4 from '../../md/java/四、操作符与流程控制.md'
  import article_golang_info_1 from '../../md/golang/一、安装与配置.md'
  import article_golang_info_2 from '../../md/java/二、基础语法与规范.md'

  export default {
    components: {
      HeaderTab,
      MenuTab,
    },
    data() {
      return {
        value: '',
        defaultData: 'preview',
        id: '',
        title: ''
      };
    },
    watch: {
      '$route'(to, from) {
        console.log(to.params)// 在此调用函数
      }
    },
    mounted() {
      this.getArticleById()
    },
    methods: {
      getArticleById() {

        var _this = this;

        axios({
          method: 'get',
          url: '/article/' + _this.$route.params.id,
          withCredentials: true,
          params: {}
        }).then(function (res) {
          console.log(res.data.data)
          _this.value = res.data.data.info
          _this.title = res.data.data.title;

          if (_this.$route.params.id === '1') {
            _this.value = article_mysql_info_1
            _this.title = '一、Mysql的基本操作与数据类型'
          }else if (_this.$route.params.id === '2') {
            _this.value = article_mysql_info_2
            _this.title = '二、Linux环境安装Mysql'
          }else if (_this.$route.params.id === '3') {
            _this.value = article_java_info_1
            _this.title = '一、Java的概念、安装与配置'
          }else if (_this.$route.params.id === '4') {
            _this.value = article_java_info_2
            _this.title = '二、Java的基础语法与规范'
          }else if (_this.$route.params.id === '5') {
            _this.value = article_java_info_3
            _this.title = '三、Java的进制、数据类型与内存分析'
          }else if (_this.$route.params.id === '6') {
            _this.value = article_java_info_4
            _this.title = '四、Java的操作符与流程控制'
          }else if (_this.$route.params.id === '7') {
            _this.value = article_golang_info_1
            _this.title = '一、Go的安装与配置.md'
          }else if (_this.$route.params.id === '8') {
            _this.value = article_golang_info_2
            _this.title = '二、Go的基础语法与规范'
          }

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

  .md-shodow .article-title-box {
    padding: 10px 10px;
  }

</style>
