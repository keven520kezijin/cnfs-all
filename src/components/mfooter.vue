<template>
  <div class="footer">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#2e3033"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>存储服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">多种存储</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-2">CNFS产品优势</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">产品功能</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-4">行业实战场景</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <span slot="title">计算</span>
      </el-menu-item> -->
      <el-submenu index="3">
        <template slot="title">
          <span>城市合伙人</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">合作理念</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-2">合伙人权益</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-3">合作条件</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-4">合伙人设置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-5">平台支持</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <div class="code-box">
      <div class="icon-box">
        <img src="../assets/home/wechart.png" alt="" />
        <img src="../assets/home/sina.png" alt="" />
        <img src="../assets/home/qq.png" alt="" />
      </div>
      <img class="code-img" src="../assets/home/2dcode.png" alt="" />
      <div class="txt">长按识别或截图保存<br />关注公众号，移动存储</div>
    </div>
    <div class="btn">咨询电话：40088996332 转 1</div>
    <div class="btn-2">城市合伙人</div>
    <div class="btn-2">中国站</div>

    <div class="copyright">
      Copyright@2019-2020 Epochain.org CNFS
      <br />存储平台版权归开发者所有，并保留所有权利
    </div>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .el-menu {
  border: none;
}
.footer {
  background-color: #2e3033;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::v-deep .el-submenu__title {
    text-align: left;
  }
  .el-menu-vertical-demo {
    width: 100%;
    .el-menu-item {
      text-align: left;
    }
  }
  .code-box {
    width: 164px;
    display: flex;
    flex-direction: column;
    .icon-box {
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .code-img {
      width: 164px;
      height: 164px;
      margin-bottom: 10px;
    }
    .txt {
      line-height: 20px;
      color: #999;
      text-align: center;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
  .btn {
    width: 90%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: #0d8bff;
  }

  .btn-2 {
    width: 90%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    border: 1px #ddd solid;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .copyright {
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
    color: #999;
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
