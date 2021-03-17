<template>
  <div class="page page-certification">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin/certification' }">< 返回</el-breadcrumb-item>
      <el-breadcrumb-item>实名认证</el-breadcrumb-item>
      <el-breadcrumb-item>个人实名认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="main container">
      <div class="content">
        <div class="certification-list">
          <h6>个人支付宝授权认证<span>（即时开通，无需等待）</span></h6>
          <ul>
            <li>请使用个人支付宝进行认证</li>
          </ul>
          <div class="bottom">
            <router-link to="/admin/ali-person-ocr">如何完成个人支付宝授权认证 ></router-link>
          </div>
        </div>

        <div class="certification-list">
          <h6>个人扫脸认证<span>（0-2个工作日）</span></h6>
          <ul>
            <li>请使用个人支付宝进行认证</li>
            <li>提交信息后，需等待审核通过</li>
          </ul>
          <div class="bottom">
            <router-link to="/admin/ali-person-face">如何完成扫脸认证 ></router-link>
          </div>
        </div>
      </div>

      <help />
    </div>
  </div>
</template>

<script>
import help from './components/help'
export default {
  components: {
    help,
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.page-certification {
  .main {
    .content {
      padding-top: 20px;
    }
  }
}
</style>
