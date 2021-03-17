<template>
  <div class="home">
    <!--头部-->
    <div class="nynav"></div>

    <!--内页内容-->
    <div class="nywrap">
      <h3>找回密码</h3>
      <div class="nycontent" style="padding-bottom: 20px">
        <div class="find-box">
          <password-find-form />
        </div>

        <div class="clause-box">
          登陆即代表已阅读并同意<span>《软件服务协议》</span>
        </div>
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
import passwordFindForm from './components/form';
export default {
  components: {
    passwordFindForm,
  }
}
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
    background: #03173c;
    height: 84px;
    width: 100%;
  }
  .nywrap {
    width: 100%;
    background: #fff;
    h3 {
      width: 100%;
      background: #f5f5f6;
      padding-top: 55px;
      padding-bottom: 40px;
      font-size: 42px;
      color: #333333;
      line-height: 55px;
    }
    .nycontent {
      width: 1200px;
      margin: 0 auto;
      padding: 80px 0 20px;
      overflow: hidden;
      zoom: 1;
      .find-box {
        width: 640px;
        margin: 0 auto;
      }
      .clause-box {
        padding-top: 25px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: #a7a7a7;
        line-height: 25px;
        span {
          color: #5e9cd5;
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
    position: absolute;
    bottom: 0;
  }
}
</style>
