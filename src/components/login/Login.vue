<template>
  <div>
    <div>
      <header-tab></header-tab>
    </div>
    <div class="login-bg"></div>
    <div class="login-content" id="user-form">
      <el-form :model="userForm" status-icon :rules="userRule" ref="userForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.number="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="userForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
          <el-button @click="resetForm('userForm')">重置</el-button>
        </el-form-item>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.userForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        userForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        userRule: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
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

        // _this.http.post('/sys/login', userInfo)
        axios({
          method: 'post',
          url: '/sys/login',
          withCredentials: true,
          params: userInfo
        }).then(function (response) {
            var code = response.code
            if (code === 0) {
              alert('success login')
            }
            console.log(code);
            this.$router.push("/");
          }.bind(this)
        ).catch(error => console.log(error))

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .login-content {
    position: absolute;
    top: 250px;
    left: 40%;
    width: 300px;
    height: 200px;
    line-height: 50px;
    text-align: center;
    color: white;
  }

  .login-bg {
    opacity: 0.1;
    z-index: -1;
    background: url("../../assets/img/login_bg.jpg") no-repeat;
    background-size: cover;
    filter: alpha(opacity=50);
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

</style>
