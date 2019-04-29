<template>
  <div>
    <div>
      <header-tab></header-tab>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import HeaderTab from '@/components/home/HeaderTab'

  export default {
    components: {
      HeaderTab,
    },
    data() {

      return {

      };
    },
    mounted() {
      this.getShareById()
    },
    methods: {
      getShareById() {

        var _this = this;

        axios({
          method: 'get',
          url: '/share/' + _this.$route.params.id,
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

<style>


</style>
