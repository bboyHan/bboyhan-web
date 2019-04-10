const menu = [{
  index:"1",
  icon:'el-icon-news',//图标
  name:'技术典当',//一级菜单
  children:[
    {
      id:"1",
      router:'/article',//路由
      name:'技术杂文',//二级菜单
      children:[]
    },{
      id:"2",
      router:'/resources',
      name:'资源分享',
      children:[]
    }
  ]
},{
  index:"2",
  icon:'el-icon-service',//图标
  name:'倾听生活',//一级菜单
  children:[
    {
      id:"3",
      router:'/markwall',//路由
      name:'过往印记',//二级菜单
      children:[]
    },{
      id:"4",
      router:'/a',
      name:'美妙声乐',
      children:[]
    }
  ]
},{
  index:"3",
  icon:'el-icon-menu',//图标
  name:'配置管理',//一级菜单
  children:[
    {
      id:"5",
      router:'/b',//路由
      name:'角色管理',//二级菜单
      children:[]
    },{
      id:"6",
      router:'/c',
      name:'账户管理',
      children:[]
    }
  ]
}];

export default {
  menu:menu,
}