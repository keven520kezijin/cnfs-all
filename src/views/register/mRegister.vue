<template>
  <div class="logon">
    <div class="top">你好，<br />欢迎注册CNFS存储平台</div>
    <register-form />
    <p class="bottom">
      登陆即代表已阅读并同意
      <span class="ligth">《软件服务协议》</span>
    </p>
  </div>
</template>

<script>
import registerForm from './components/form';
export default {
  components: {
    registerForm,
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