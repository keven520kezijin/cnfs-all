<template>
  <div class="top-page">
    <div class="top-left">
      <div class="top-log" @click="go('/home')"><img src="@/assets/logo_write.svg" /></div>
      <div class="top-adressbox">上海站</div>
    </div>
    <div class="top-nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        active-text-color="#1890FF"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/store">存储</el-menu-item>
        <!-- <el-menu-item index="" @click="comingSoon">计算</el-menu-item> -->
        <el-menu-item index="" @click="comingSoon">生态</el-menu-item>
        <el-menu-item index="" @click="comingSoon">区块浏览器</el-menu-item>
        <el-menu-item index="/partner">城市合伙人</el-menu-item>
      </el-menu>
      <div class="login-tx">
        <div class="login" v-if="!loginUser" @click="go('/login')">登录</div>
        <div class="user-avatar" v-else @click="go('/admin')" :style="`background-image:url('${loginUser.headPhoto}')`" />
      </div>
      <div
        class="top-reg"
        :class="loginUser ? 'out' : ''"
        v-if="$route.path !== '/register'"
        @click="regLogout"
      >
        {{ loginUser ? '退出登录':'免费注册'}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { loginout } from '@/api/login'

export default {
  computed: {
    ...mapState({
      loginUser: state => state.loginUser,
    }),
  },
  methods: {
    comingSoon() {
      this.$message({
        message: "敬请期待",
        type: "warning",
      });
    },
    regLogout() {
      if(this.loginUser) {
        loginout().then(res => {
          if(res.code == 200) {
            this.$store.commit('SET_USER', null)
            localStorage.removeItem('loginUser')
          }
        })
      } else {
        this.go('/register')
      }
    },
    go(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.top-page {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: $pageWidth;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .top-left {
    width: 300px;
    .top-log {
      height: 38px;
      width: 180px;
      float: left;
    }
    .top-adressbox {
      width: 78px;
      height: 28px;
      border: 1px solid #ffffff;
      color: #ffffff;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      float: left;
      margin-left: 20px;
    }
  }
  .top-nav {
    width: 800px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    .el-menu.el-menu--horizontal {
      border: none;
      background: none;
      width: 600px;
      .el-menu-item.is-active {
        border: none;
      }
      .el-menu-item {
        color: #fff;
        font-size: 18px !important;
        height: 30px;
        line-height: 30px;
        border: none;
      }
    }
    .el-menu-item:not(.is-disabled):hover,
    .el-menu-item:not(.is-disabled):focus {
      background: none;
    }
    .login-tx {
      .login {
        height: 30px;
        line-height: 30px;
        width: 60px;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center 3px;
        background-size: contain;
        cursor: pointer;
      }
    }
    .top-reg {
      background: #0d8bff;
      float: left;
      font-size: 18px;
      color: #fff;
      width: 94px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
      &.out {
        background: none;
      }
    }
  }
}
</style>