<template>
  <div>
    <div>
      <header-tab></header-tab>
    </div>
    <div class="login-bg"></div>
    <div class="login-content">
      <el-form :model="userForm" status-icon :rules="userRule" ref="userForm" label-width="100px">
        <!--<el-form-item label="用户名" prop="name">-->
        <el-input v-model="userForm.name" placeholder="用户名"></el-input>
        <!--</el-form-item>-->
        <!--<el-form-item label="密码" prop="pass">-->
        <el-input type="password" v-model="userForm.pass" autocomplete="off" placeholder="密码"></el-input>
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <div class="login-button">
          <button @click="submitForm('userForm')" class="login-button-left">登录</button>
        </div>
        <div class="login-more-sign">
          <router-link :to="{path:'/register'}"><h6>没有账号? 注册</h6></router-link>
        </div>
        <!--<el-button @click="resetForm('userForm')">重置</el-button>-->
        <!--</el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import HeaderTab from '@/components/home/HeaderTab'
  import { mapMutations } from 'vuex';

  export default {
    components: {
      HeaderTab,
    },
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if ("" === value || null === value) {
            callback(new Error('请输入数字值'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.userForm.checkPass !== '') {
            this.$refs.userForm.validateField('checkPass');
          }
          callback();
        }
      };

      return {
        userForm: {
          pass: '',
          name: ''
        },
        userRule: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          name: [
            {validator: checkName, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      ...mapMutations(['changeUser']),
      submitForm(formName) {
        var _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            //校验过程...
          } else {
            console.log('error submit!!');
            return false;
          }
        });

        var name = _this.userForm.name
        var pass = _this.userForm.pass

        var userInfo = {
          username: name,
          password: pass
        }

        axios({
          method: 'post',
          url: '/user/login',
          withCredentials: true,
          params: {}
        }).then(function (response) {
            var code = response.data.code
            if (code === '200') {
              console.log(_this.$store)

              //store user info
              _this.saveUserInfo(response.data.data)

              _this.$router.push("/")
            }

          }.bind(this)
        ).catch(
          error => console.log(error)
        )

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      saveUserInfo(userInfo) {
        var _this = this
        console.log(userInfo)

        sessionStorage.setItem("userToken", userInfo.token)
        sessionStorage.setItem("username", userInfo.username)
        _this.$store.dispatch("changeUser", userInfo)
      }
    }
  }
</script>

<style>
  .login-content {
    position: absolute;
    top: 250px;
    left: 50%;
    margin-left: 20px;
    width: 200px;
    height: 200px;
    line-height: 50px;
    text-align: center;
    color: white;
  }

  .login-bg {
    opacity: 0.2;
    z-index: -1;
    background: url("../../assets/img/login_bg.jpg") no-repeat;
    background-size: cover;
    filter: alpha(opacity=30);
    position: absolute;
    left: 50%;
    top: 200px;
    width: 500px;
    height: 300px;
    margin-left: -250px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #888;
    border: 1px solid #666;
    text-align: center;
  }

  /*.login-content .login-button-left {
    float: left;
    padding: 10px 85px;
    margin: 10px 0;
  }*/
  .login-content .login-button-left {
    width: 200px; /* 宽度 */
    height: 40px; /* 高度 */
    border-width: 0; /* 边框宽度 */
    border-radius: 7px; /* 边框半径 */
    background: #1E90FF; /* 背景颜色 */
    cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
    outline: none; /* 不显示轮廓线 */
    font-family: Microsoft YaHei; /* 设置字体 */
    color: white; /* 字体颜色 */
    font-size: 17px; /* 字体大小 */
    margin: 10px 0;
  }

  .login-content .login-button-left:hover { /* 鼠标移入按钮范围时改变颜色 */
    background: #5599FF;
  }

  .login-more-sign {
    color: #556B2F;
  }

</style>
