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

  .md-shodow .article-title-box {
    padding: 10px 10px;
  }

</style>
