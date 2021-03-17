<template>
  <el-dialog
    title="编辑"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="sign">
          <el-input
            v-model="rulesForm.sign"
            placeholder="请输入签名"
            clearable
          />
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit('rulesForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
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
       rulesForm: {
        sign: '技术创造价值',
      },
      rules: {
        sign: [{ 
          required: true, trigger: "blur", message: "请输入签名",
         }],
      },
    };
  },
  watch: {
    dialogVisible(val) {
      this.visible = val;
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:dialogVisible", false);
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
      //     const data = {
      //       phone: this.rulesForm.mobile,
      //       password: this.rulesForm.password
      //     };

      //     login(data).then(res => {
      //       if (res.code == 200 && res.data) {
                  this.$emit("update:dialogVisible", false);
      //       } else {
      //         this.$message.error('支付密码不正确')
      //       }
      //     })
      //   } else {
      //     console.log("error submit!!");
      //     return false;
        }
      })
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
</style>