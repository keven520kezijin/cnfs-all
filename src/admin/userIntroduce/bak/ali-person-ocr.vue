<template>
  <div class="page page-simple-cer">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin/cer-person' }">< 返回</el-breadcrumb-item>
      <el-breadcrumb-item>个人支付宝实名认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content t-80">
      <dl>
        <dt>
          <el-checkbox v-model="checked">同意CNFS存储平台读取您在支付宝的认证信息</el-checkbox>
        </dt>
        <dd>
          <el-button type="primary" @click="onSubmit">确认</el-button>
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
  methods: {
    onSubmit() {
      //
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.page-simple-cer {
  .content {
    dd {
      ::v-deep .el-button {
        width: 160px;
        height: 50px;
        font-size: 22px;
      }
    }
  }
}
</style>
