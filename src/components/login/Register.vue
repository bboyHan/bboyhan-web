<template>
  <div>
    <div>
      <header-tab></header-tab>
    </div>
    <div class="register-bg"></div>
    <div class="register-content">
      <el-form :model="userForm" status-icon :rules="userRule" ref="userForm" label-width="100px">
        <!--<el-form-item label="用户名" prop="name">-->
        <el-input v-model="userForm.name" placeholder="用户名"></el-input>
        <!--</el-form-item>-->
        <!--<el-form-item label="密码" prop="pass">-->
        <el-input type="password" v-model="userForm.pass" autocomplete="off" placeholder="密码"></el-input>
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <div class="register-button">
          <el-button type="info" round @click="submitForm('userForm')" class="register-button-left">注册</el-button>
        </div>
        <div class="register-more-sign">
          <router-link :to="{path:'/login'}"><h6>已有账号? 登录</h6></router-link>
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
      submitForm(formName) {
        var _this = this
        debugger
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
          url: '/user/register',
          withCredentials: true,
          params: {}
        }).then(function (response) {
            debugger
            var code = response.data.code
            if (code === '200') {
              alert('success login')

              console.log(_this.$store.state.isLogin)
              _this.$router.push("/")
            }

            //store user info
            this.saveUserInfo(response.data.data)

          }.bind(this)
        ).catch(
          error => console.log(error)
        )

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      saveUserInfo(userInfo) {
        sessionStorage.setItem("userToken", userInfo.token)
        sessionStorage.setItem("username", userInfo.username)
        this.$store.dispatch("setUser", userInfo.username)
        this.$store.dispatch("setToken", userInfo.token)
      }
    }
  }
</script>

<style>
  .register-content {
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

  .register-bg {
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

  .register-content .register-button-left {
    float: left;
    padding: 10px 85px;
    margin: 10px 0;
  }

  .register-more-sign {
    color: #556B2F;
  }

</style>
