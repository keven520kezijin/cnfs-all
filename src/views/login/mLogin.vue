<template>
  <div class="register">
    <div class="top">你好，<br />欢迎登录CNFS存储平台</div>

    <login-form />
    
    <div class="forget-box">
      <span class="forget">
        <router-link to="/password_find">忘记密码</router-link>
      </span>
      <span class="login">
        <router-link to="/register">注册账号</router-link>
      </span>
    </div>

    <!-- <div class="login-other">
      <p><span>其它登录方式</span></p>
      <ol>
        <li>
          <a href="sinaweibo://"><img src="@/assets/login/icon_weibo.png" /></a>
        </li>
        <li>
          <a href="mqq://"><img src="@/assets/login/icon_qq.png" /></a>
        </li>
        <li>
          <a href="weixin://"><img src="@/assets/login/icon_weixin.png" /></a>
        </li>
      </ol>
    </div> -->

    <p class="bottom">
      登陆即代表已阅读并同意
      <span class="ligth">《软件服务协议》</span>
    </p>
  </div>
</template>

<script>
import loginForm from './components/form';
export default {
  components: {
    loginForm,
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.register {
  @include page;
  height: 100%;
  position: relative;
  .top {
    margin-top: 50px;
    width: 100%;
    box-sizing: border-box;
    font-size: 24px;
    text-align: left;
    line-height: 34px;
    color: #353535;
    display: block;
    padding: 47px 20px 20px 20px;
    font-weight: 700;
  }
  .forget-box {
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    span:hover {
      text-decoration: underline;
    }
    .forget {
      a {
        color: #353535;
        font-weight: bold;
      }
    }
    .login {
      a {
        color: #0D8BFF;
        font-weight: bold;
      }
    }
  }
  .login-other {
    width: 100%;
    position: absolute;
    bottom: 80px;
    p {
      margin: 0 20px;
      border-top: solid 1px #F0F0F0;
      span {
        color: #ccc;
        background: #fff;
        padding: 0 10px;
        display: inline-block;
        position: relative;
        bottom: 7px;
      }
    }
    ol {
      padding-top: 15px;
      display: flex;
      justify-content: space-around;
      li {
        width:36px;
        height: 36px; 
        background: #efefef;
        border: solid 1px #ddd;
        border-radius: 100%;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }
  }
  .bottom {
    position: absolute;
    bottom: 20px;
    height: 30px;
    line-height: 30px;
    color: #ccc;
    font-size: 12px;
    text-align: center;
    .ligth {
      color: #5E9CD5;
    }
  }
}
</style>