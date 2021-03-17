<template>
  <el-dialog
    title="转豆"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="account">
          <el-input
            v-model="rulesForm.account"
            placeholder="请输入收豆人帐户"
            clearable
          />
        </el-form-item>
        <el-form-item prop="quantity">
          <el-input
            v-model="rulesForm.quantity"
            placeholder="请输入转豆数量"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="rulesForm.password"
            placeholder="请输入支付密码"
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
        account: '',
        password: '',
        quantity: null,
      },
      rules: {
        quantity: [{ 
          validator: this.checkQuantity, trigger: "blur"
        }],
        account: [{ 
          required: true, trigger: "blur", message: "请输入收豆人账户",
         }],
        password: [{
          validator: this.checkPassword, trigger: "blur"
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
    // 验证密码
    checkPassword(rule, value, callback) {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        // 密码为6-20个字符, 不包含空格必须包含数字, 字母或字符至少两种
        const reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的密码"));
        }
      }
    },
    checkQuantity(rule, value, callback) {
      if (!value) {
        return callback(new Error("转豆数量不能为空"));
      } else {
        const reg = /^\d+$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的数量"));
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
</style>