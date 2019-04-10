<template>
  <div>
    <div class="container-menu">

      <el-row>
        <el-col :span="12">
          <el-menu :default-active="onRoutes" class="menu-detail" @open="handleOpen" @close="handleClose"
                   router active-text-color="#808080" background-color="#ffffff" mode="vertical" menu-trigger="click">
            <!--<el-menu :default-active="onRoutes" class="menu-detail" router>-->
            <el-submenu v-for="(item,index) in menu" :key="index" :index="item.index">
              <template slot="title">
                <i :class="item.icon"></i>{{item.name}}
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(temp,index) in item.children" :key="index" :index="temp.router" :disabled="redirectMenu(temp.router)">{{temp.name}}
                <!--<el-menu-item v-for="(temp,index) in item.children" :key="index" :index="temp.router" :disabled="true">{{temp.name}}-->
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import menuList from '../../js/menuList.js'

  export default {
    data() {
      return {
        menu: menuList.menu,
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace(/\s\S/, '');
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      redirectMenu(url){
        console.log(url)
        if (url === '/article') {
          return false
        }
        return true
      }
    }
  }
</script>

<style>
  .el-menu-item.is-active {
    background-color: #fff !important;
  }

  .container-menu {
    left: 50px;
    width: 250px;
    height: 100%;
    position: absolute;
  }

  .container-menu .avatar {
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /*display: inline-block;*/
  }

  .container-menu .menu-detail {
    width: 250px;
    min-height: 90%;
  }
</style>
