<template>
  <el-dialog
    title="收豆"
    v-if="visible"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <div class="body">
      <dl>
        <dt>收款帐户</dt>
        <dd>
          <div class="qr-code" ref="qrCodeDiv" />
        </dd>
      </dl>
      <dl>
        <dt>手机号码</dt>
        <dd>
          <span>{{ $store.state.loginUser.phone }}</span>
          <el-button class="copy" type="info" plain @click="handleCopy($store.state.loginUser.phone)">复制</el-button>
        </dd>
      </dl>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import QRCode from 'qrcodejs2'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    dialogVisible(val) {
      this.visible = val;
    },
  },
  updated() {
    if(this.visible){
      this.qrcode();
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:dialogVisible", false);
    },
    qrcode() {
      new QRCode(this.$refs.qrCodeDiv, {
        text: this.$store.state.loginUser.phone,
        width: 230,
        height: 230,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
      })
    },
    handleCopy(data){
      let url = data;
      let oInput = document.createElement('input');
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象;
      console.log(oInput.value)
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      });
      oInput.remove()
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.admin-dialog {
  .body {
    dl {
      text-align: left;
      padding: 25px;
      margin-bottom: 20px;
      background: #FFFFFF;
      display: flex;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      dt {
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
      dd {
        font-size: 20px;
        padding-left: 10px;
        .copy {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
        }
      }
    }
  }
}
</style>