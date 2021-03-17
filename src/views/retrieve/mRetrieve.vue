<template>
  <div class="retrieve">
    <div class="top">忘记登陆密码？ <br />输入手机号进行密码找回</div>
    <div class="level">
      <input type="text" placeholder="请输入手机号码" />
      <!-- <van-field v-model="text" /> -->
    </div>
    <div class="level">
      <input class="inp-code" type="text" placeholder="请输入验证码" />
    </div>
    <div class="code-box">
      <van-button class="code-btn" type="info">发送验证码</van-button>
    </div>
    <div class="level">
      <input type="text" placeholder="请输入新的登陆密码" />
    </div>
    <div class="level">
      <input type="text" placeholder="再次输入新的登陆密码" />
    </div>

    <el-button class="login-btn" type="primary">确认修改并登录</el-button>

    <p class="bottom">
      登陆即代表已阅读并同意
      <span class="ligth">《软件服务协议》</span>
    </p>
  </div>
</template>

<script>
// https://www.17sucai.com/pins/demo-show?id=33789
import Vue from "vue";
import { Field, Button } from "vant";

Vue.use(Field);
Vue.use(Button);
export default {};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
::v-deep .van-button {
  height: 36px;
}

.retrieve {
  @include page;
  height: 100%;
  position: relative;
  .top {
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
  .level {
    width: 90%;
    position: relative;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    input {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      border: none;
      width: 100%;
      box-sizing: content-box;
      padding-bottom: 10px;
      &:focus {
        outline: none;
        background: none;
      }
      &::input-placeholder {
        color: #cccccc;
      }
      &::-webkit-input-placeholder {
        color: #cccccc;
      }
      &::-moz-placeholder {
        color: #cccccc;
      }
    }
    input.inp-code {
      width: 100px;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #e2e2e2;
      background-color: #e2e2e2;
    }
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      left: 51%;
      right: 51%;
      background-color: #409eff;
      bottom: 0;
      transition-duration: 0.3s;
    }
    &:hover:after {
      left: 0;
      right: 0;
    }
  }
  .code-box {
    right: 20px;
    top: 193px;
    position: absolute;
    .code-btn {
      border-radius: 18px;
    }
  }
  .login-btn {
    margin-top: 40px;
    width: 90%;
    height: 48px;
    border: none;
    border-radius: 0;
  }
  .forget-box {
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
      color: #353535;
    }
    .login {
      color: #0d8bff;
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    color: #ccc;
    font-size: 12px;
    text-align: center;
    .ligth {
      color: #5e9cd5;
    }
  }
}
</style>