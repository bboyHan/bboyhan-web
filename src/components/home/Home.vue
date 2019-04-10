<template>
  <div>
    <header-tab></header-tab>
    <div>
      <menu-tab></menu-tab>
    </div>

    <div>
      <div class="container-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTab from '@/components/home/HeaderTab'
  import MenuTab from '@/components/home/MenuTab'

  export default {
    components: {
      HeaderTab,
      MenuTab,
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  a {
    text-decoration: none;
  }

  .div-clear {
    clear: both;
  }

  .div-inline {
    display: inline-block;
  }

  .container-main {
    left: 300px;
    right: 50px;
    position: absolute;
  }

  .box-card {
    width: 600px;
    height: 400px;
    margin: 10px 0 0 20px;
    display: inline-block;
  }

</style>
