<template>
  <el-dialog
    title="买豆"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="quantity">
          <el-input
            v-model="rulesForm.quantity"
            placeholder="请输入买豆数量"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <p class="price-tip">当前豆价：<span>1元/豆</span></p>
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
        quantity: null,
      },
      rules: {
        quantity: [{ 
          validator: this.checkQuantity, trigger: "blur"
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
    checkQuantity(rule, value, callback) {
      if (!value) {console.log(value, callback)
        return callback(new Error("买豆数量不能为空"));
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