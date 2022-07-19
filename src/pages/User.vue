<template>
  <div class="container">
    <div class="nby-box" v-show="!isLogin">
      <div class="img1">
        <img src="../img/logo.png" alt="" /><br />
        <label>账号密码登录 | 手机验证码登录</label>
      </div>
      <div class="input-group row" style="width: 400px; margin-left: 28%">
        <div class="input-group-prepend col-md-12">
          <span class="input-group-text" style="width: 86px">账号</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="邮箱/手机号码/用户名"
            v-model="userName"
          />
        </div>
        <div class="input-group-prepend col-md-12">
          <span class="input-group-text">验证码</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="请输入验证码"
            v-model="code"
          />
          <button class="input-group-text" @click="getCode">获取验证码</button>
        </div>
        <div class="input-group-prepend col-md-12">
          <span class="input-group-text" style="width: 86px">密码</span>
          <input
            type="password"
            aria-label="First name"
            class="form-control"
            placeholder="密码为8-16个字符"
            v-model="userPwd"
          />
        </div>
        <div>
          <button
            type="button"
            class="btn btn-danger"
            style="margin: 20px 140px"
            @click="getRegister"
          >
            立即注册
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style="margin: 20px 140px"
            @click="getLogin"
          >
            立即登录
          </button>
        </div>
      </div>
    </div>
    <div class="nby-box" v-show="isLogin">
      <div class="img1"><img src="../img/logo.png" alt="" /><br /></div>
      <div style="margin: 50px 35%; width: 500px">
        <h1>用户登录成功！</h1>
      </div>
    </div>
    <div>
      <!-- 路由跳转传值测试 -->
      <!-- params:{{ $route.params }}<br /> -->
      <!-- query:{{ $route.query }} -->
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "User",
  data() {
    return {
      studentData: [],
      userName: "",
      userPwd: "",
      code: "",
      num: false,
      isLogin: "",
      token: "",
    };
  },
  methods: {
    //用户名密码基本逻辑判断
    userLogin() {
      //判断输入是否为空
      if (this.userName !== "" && this.userPwd !== "") {
        //遍历服务器用户数据
        this.studentData.forEach((stu) => {
          if (stu.name === this.userName && stu.pwd === this.userPwd) {
            this.num = true;
          }
        });
        if (this.num) {
          alert("登录成功");
          this.isLogin = !this.isLogin;

          pubsub.publish("sentLogin", this.isLogin);
          this.userName = "";
          this.userPwd = "";
        } else {
          alert("账号或密码错误");
          this.userName = "";
          this.userPwd = "";
        }
      } else {
        alert("输入不能为空！");
      }
    },
    sentuser(students) {
      this.studentData = students;
    },

    //获取验证码
    async getCode() {
      const { userName } = this;
      try {
        await this.$store.dispatch("user/getUserCode", userName);
        this.code = this.$store.state.user.code;
      } catch (error) {}
    },

    //传递用户名，密码，验证码，进行账号注册
    async getRegister() {
      const { userName, code, userPwd } = this;
      if (userName && code && userPwd) {
        await this.$store.dispatch("user/getUserRegister", {
          userName,
          userPwd,
          code,
        });
      }
    },
    //登录验证
    async getLogin() {
      const { userName, userPwd } = this;
      await this.$store.dispatch("user/getUserLogin", { userName, userPwd });
      this.$router.push("/MyIndex");
    },
  },

  watch: {
    isLogin: {
      deep: true,
      handler(value) {
        console.log("更新的数据是:", value);
      },
    },
  },
  mounted() {
    this.$bus.$on("sentuser", this.sentuser);
  },
};
</script>

<style scope>
body {
  background-color: white;
  margin-top: 0;
  padding: 0;
}

.footer img {
  width: 540px;
  height: 200xp;
  margin-left: 0;
  margin-top: 12px;
}

.font-color a {
  color: black;
}

.nby-box {
  width: 850px;
  height: 473px;
  background-color: white;
  margin: 60px 130px 40px;
  box-shadow: darkgray 1px 5px 10px 1px;
}

.nby-box .img1 img {
  margin: 40px 320px 20px;
  width: 200px;
}

.nby-box label {
  margin: 0px 300px 20px;
  width: 300px;
  font-size: 20px;
}

.acc-or-pwd {
  margin-left: 58%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.acc-or-pwd a {
  font-size: 15px;
  color: #666666;
}

.acc-or-pwd a:hover {
  color: red !important;
}

.other-register {
  float: left;
  width: 100%;
  margin-top: 30px;
}

.other-register span {
  font-size: 15px;
  color: #666666;
  margin-top: 0px;
  margin-left: 30%;
  width: 100px;
}

.other-register img {
  width: 30px;
  height: 30px;
}
</style>