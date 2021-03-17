<template>
  <div class="search-box">
    <div
      class="search-main"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-once="true"
    >
      <div class="searchcon" :class="focus ? 'blue' : ''">
        <input type="text" class="text" placeholder="存储设备品牌查询" @focus="handleFocus" @blur="handleBlue" />
        <div class="button">
          <i class="iconfont iconGlyphsSearch2" @click="notify"></i>
        </div>
      </div>
      <div class="searchcon-list">
        <span class="hot">热门搜索：</span>
        <span>搜索 xx存储设备</span>
        <span>搜索 xx存储设备</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    handleFocus() {
      this.focus = true;
    },
    handleBlue() {
      this.focus = false;
    },
    notify() {
      this.$message({
        message: "敬请期待",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.search-box {
  width: 100%;
  background-image: url("../../../assets/home/img_search.png");
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .search-main {
    width: 1200px;
    padding: 110px 0;
    margin: 0 auto;
    .searchcon {
      background: #fff;
      height: 54px;
      border-radius: 6px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      &.blue {
        border: solid 2px #0D8BFF;
      }
      .text {
        flex: 1;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        outline: none;
        padding: 0 10px;
        border: none;
      }
      .button {
        width: 34px;
        height: 34px;
        text-align: center;
        line-height: 34px;
      }
    }

    .searchcon-list {
      margin-top: 20px;
      width: 1200px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      span {
        height: 30px;
        line-height: 30px;
        color: #fff;
        margin-right: 10px;
        font-size: 14px;
        &.hot {
          background-image: url("../../../assets/home/huorebaokuan.png");
          background-size: 28px 30px;
          background-repeat: no-repeat;
          padding-left: 40px;
        }
      }
    }
  }
}

  @media screen and (max-width: 900px) {
    .search-box {
      .search-main {
        width: 100%;
        padding: 40px 20px;
      }
    }
  }
</style>
