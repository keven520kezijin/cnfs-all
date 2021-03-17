<template>
  <div class="page page-simple-cer">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin/cer-person' }">< 返回</el-breadcrumb-item>
      <el-breadcrumb-item>个人扫脸认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content t-80">
      <dl>
        <dt>
          <el-checkbox v-model="checked">打开手机淘宝，扫取下方二维码进行认证</el-checkbox>
        </dt>
        <dd>
          内容.....
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.page-ali-person {
  .content {
    .qr-code {
      padding-top: 40px;
    }
  }
}
</style>
