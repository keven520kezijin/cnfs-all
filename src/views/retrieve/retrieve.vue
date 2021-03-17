<template>
  <div class="home">
    <!--头部-->
    <div class="nynav">
      <div class="nynavcon">
        <h1><img src="@/assets/logo_write.svg" /></h1>
      </div>
    </div>

    <!--内页内容-->
    <div class="nywrap" >
      <h3>忘记密码并找回密码</h3>
      <div class="nycontent" style="padding-bottom:40px">
        <!--找回密码-->
        <div class="find-box">
          <ul>
            <li><input tpye="text" placeholder="请输入手机号码" /></li>
            <li><input tpye="text" placeholder="请输入验证码" /></li>
            <li><input tpye="text" placeholder="请输入新的登录密码" /></li>
            <li><input tpye="text" placeholder="再次确认新的登录密码" /></li>
            <li><button>注册并登陆</button></li>
          </ul>
        </div>
        <!--服务条款-->
        <div class="clause-box">登陆即代表已阅读并同意<span>《软件服务协议》</span></div>
      </div>
    </div>

    <!--内页尾部-->
    <div class="ny-footer">
      Copyright@2019-2020 Epochain.org
      CNFS存储平台版权归开发者所有，并保留所有权利
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    notify() {
      console.log("notify");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

@mixin h3 {
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 30px;
  padding-left: 40px;
  margin-bottom: 20px;
  background-image: url("~@/assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .nynav {
    background: #292c2f;
    height: 84px;
    width: 100%;
    .nynavcon {
      width: 1200px;
      margin: 0 auto;
      h1 {
        height: 38px;
        width: 180px;
        margin-top: 20px;
      }
    }
  }
  .nywrap {
    width: 100%;
    background: #fff;
    h3 {
      width: 100%;
      background: #f5f5f6;
      padding-top: 115px;
      padding-bottom: 40px;
      font-size: 42px;
      color: #333333;
      line-height: 55px;
    }
    .nycontent {
      width: 1200px;
      margin: 0 auto;
      padding: 150px 0;
      overflow: hidden;
      zoom: 1;
      .find-box {
        width: 640px;

        margin: 0 auto;
        ul {
          li {
            padding-bottom: 30px;
            input {
              width: 556px;
              border: 1px solid #d8d8d8;
              font-size: 22px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #cccccc;
              padding: 15px 20px;
              line-height: 30px;
            }
              button {
              width: 596px;
              height: 54px;
              background: #0d8bff;
              font-size: 24px;
              color: #ffffff;
              line-height: 54px;
              cursor: pointer;
              border: none;
            }
          }
        }
      }
      .clause-box{
        padding-top: 225px;
        text-align: center;
font-size: 18px;
font-weight: 400;
color: #A7A7A7;
line-height: 25px;
span{
  color: #5E9CD5;
  cursor: pointer;

}

      }
    }
  }
  .ny-footer {
    height: 84px;
    width: 100%;
    background: #f7f8fa;
    border: 1px solid #efefef;
    text-align: center;
    line-height: 84px;
    font-size: 16px;
    color: #999999;
  }
}
</style>
