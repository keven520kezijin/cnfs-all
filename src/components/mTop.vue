<template>
  <div class="page">
    <div class="top">
      <div class="top-l">
        <img src="@/assets/logo_write.svg" />
        <div class="city">上海</div>
      </div>
      <div class="top-r">
        <div class="icon" @click="showTopPopup">
          <i class="iconfont icon101-copy"></i>
        </div>
        <div class="icon" @click="showPopup">
          <i class="iconfont iconfenzu451"></i>
        </div>
      </div>
    </div>
    <van-popup v-model="showTop" position="top" :style="{ height: '80px' }">
      <div class="top-btn-box">
        <div class="btn-l" @click="go('/register')">免费注册</div>
        <div class="btn-r" @click="go('/login')">登录</div>
      </div>
    </van-popup>
    <van-popup
      v-model="show"
      closeable
      position="right"
      :style="{ width: '50%', height: '100%' }"
      class="rigth-popup"
    >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2e3033"
        text-color="#fff"
        router
        active-text-color="#ffd04b"
        @select="handleMenuSelect"
      >
        <el-menu-item index="/home">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/store">
          <span slot="title">存储</span>
        </el-menu-item>
        <!-- <el-menu-item index="/compute">
          <span slot="title">计算</span>
        </el-menu-item> -->
        <el-menu-item index="/ecology">
          <span slot="title">生态</span>
        </el-menu-item>
        <el-menu-item index="/browser">
          <span slot="title">区块浏览器</span>
        </el-menu-item>
        <el-menu-item index="/partner">
          <span slot="title">城市合伙人</span>
        </el-menu-item>
      </el-menu>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      show: false,
      showTop: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showPopup() {
      this.showTop = false;
      this.show = true;
    },
    handleMenuSelect() {      
      this.show = false;
    },
    showTopPopup() {
      this.show = false;
      this.showTop = true;
    },
    go(path) {
      this.showTop = false;
      this.$router.push(path)
    }
  },
};
</script>

<style scoped lang="scss">
::v-deep .van-overlay {
  top: 50px;
}
.rigth-popup {
  background-color: #2e3033;
  .el-menu-vertical-demo {
    margin-top: 50px;
  }
}
.el-menu {
  border-right: none;
}
.van-popup--top {
  top: 50px;
  background-color: #212529;
  display: flex;
  justify-content: center;
  .top-btn-box {
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    div {
      flex: 1;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
    }
    .btn-l {
      margin-right: 20px;
      background: #0d8bff;
      color: #fff;
    }
    .btn-r {
      border: 1px solid #0d8bff;
      box-sizing: border-box;
      color: #0d8bff;
    }
  }
}
.top {
  width: 100%;
  height: 50px;
  background: #22272c;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  .top-l {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 119px;
      height: 25px;
    }
    .city {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
      margin-left: 20px;
    }
  }
  .top-r {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      color: #fff;
      & + .icon {
        margin-left: 20px;
      }
    }
  }
}
</style>
