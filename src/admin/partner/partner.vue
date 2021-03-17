<template>
  <div class="page partner-page">
    <div class="main" v-if="isShow">
      <div class="msg">您是上海市闵行区城市合伙人</div>
      <div class="img-level">
        <div class="img-item">
          <img src="@/assets/admin/partner/banner@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img1@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img3@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/banner@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img1@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img3@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/banner@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img1@2x.png" alt="" />
        </div>
        <div class="img-item">
          <img src="@/assets/admin/partner/img3@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="main no-main" v-else>
      <img class="m-img" src="@/assets/admin/partner/img_qs@2x.png" />
      <div class="txt">您现在还不是城市合伙人，请赶快申请吧～</div>
      <el-button type="primary">立即申请</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.partner-page {
  .msg {
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    text-align: left;
    margin-bottom: 20px;
  }
  .img-level {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .img-item {
      width: 334px;
      height: 195px;
      margin-bottom: 22px;
      img {
        width: 100%;
      }
      &:not(:nth-child(4n)) {
        margin-right: 22px;
      }
    }
  }
  .no-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .m-img {
      width: 276px;
      height: 136px;
      margin-bottom: 36px;
    }
    .txt {
      color: #999;
      margin-bottom: 49px;
    }
  }
}
</style>