<template>
  <el-dialog
    title="登录密码"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="rulesForm.password"
            placeholder="请输入支付密码"
            clearable
          />
        </el-form-item>
        <el-form-item prop="checkPassword">
            <el-input
            type="password"
            v-model="rulesForm.checkPassword"
            placeholder="再次输入支付密码"
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
        password: '',
        checkPassword: '',
      },
      rules: {
        password: [{ required: true, validator: this.checkPassword, trigger: "blur" }],
        checkPassword: [{ required: true, validator: this.checkPassword2, trigger: "blur" }],
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

      // 验证二次密码是否一致
    checkPassword2(rule, value, callback) {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.rulesForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
</style>