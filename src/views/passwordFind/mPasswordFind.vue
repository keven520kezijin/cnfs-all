<template>
  <div class="logon">
    <div class="top">忘记登陆密码？<br />输入手机号进行密码找回</div>

    <password-find-form />
    
    <p class="bottom">
      登陆即代表已阅读并同意
      <span class="ligth">《软件服务协议》</span>
    </p>
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

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.logon {
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
    margin-top: 50px;
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