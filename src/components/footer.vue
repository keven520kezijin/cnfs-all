<template>
  <div class="footer">
    <div class="main">
      <div class="footer-logo">
        <router-link to="/"><img src="../assets/logo_write.svg" alt="" /></router-link>
      </div>
      <div class="txt-list">
        <h2>关于我们</h2>
        <a href="#">联系我们</a>
      </div>
      <div class="txt-list">
        <h2>存储</h2>
        <a href="#">多种存储类型</a>
        <a href="#">CNFS产品优势</a>
        <a href="#">产品服务</a>
        <a href="#">行业实战场景</a>
      </div>
      <div class="txt-list">
        <h2>相关资源</h2>
        <a href="#">CNFS白皮书</a>
      </div>
      <div class="footer-box">
        <h2>关注</h2>
        <img src="../assets/0.png" />
      </div>
    </div>
    <div class="right">Copyright © 2019-2020 CNFS分布式存储平台 All rights reserved. 沪ICP备2020029560号-2</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
  .footer {
    padding-top: 40px;
    width: 100%;
    background: #2E3033;
    display: flex;
    justify-content: center;
    color: #fff;
    padding-bottom: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main {
      width: 1330px;
      display: flex;
      justify-content: space-between;
      .footer-logo {
        width: 180px;
        height: 46px;
        img {
          width: 100%;
        }
      }
      .txt-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        a {
          font-size: 14px;
          margin: 10px 0;
          color: #fff;
          text-decoration: none;
        }
      }
      .footer-box{
        width: 128px;
        height: 128px;
        h2 {
          display: block;
          text-align: left;
          margin-bottom: 20px;
        }
        img {
          width: 100%;
        }
      }
    }
    .right {      
      width: 1330px;
      border-top: 1px #666 solid;
      padding: 20px;
      font-size: 12px;
      color: #5D5D5E;
      margin-top: 30px;
    }
  }
</style>
