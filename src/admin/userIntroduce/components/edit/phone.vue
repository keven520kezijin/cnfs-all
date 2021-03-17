<template>
  <el-dialog
    title="手机绑定"
    :visible.sync="visible"
    class="admin-dialog"
    width="500px"
    @close="handleClose"
  >
    <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="oldPhone">
          <el-input
            v-model="rulesForm.oldPhone"
            placeholder="请输入手机号"
            clearable
          />
        </el-form-item>
        <el-form-item class="code" prop="oldPhoneCode">
            <el-input
            v-model="rulesForm.oldPhoneCode"
            placeholder="请输入验证码"
            />
            <el-button type="button" class="code-txt" @click="oldPhoneSendCode" :disabled="oldDisabled">
              {{!oldDisabled ? '获取验证码' : btntxt}}
            </el-button>
        </el-form-item>
        <el-form-item prop="newPhone">
          <el-input
            v-model="rulesForm.newPhone"
            placeholder="请输入手机号"
            clearable
          />
        </el-form-item>
        <el-form-item class="code" prop="newPhoneCode">
            <el-input
            v-model="rulesForm.newPhoneCode"
            placeholder="请输入验证码"
            />
            <el-button type="button" class="code-txt" @click="newPhoneSendCode" :disabled="newDisabled">
              {{!newDisabled ? '获取验证码' : btntxt}}
            </el-button>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit('rulesForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { sendSMS } from "@/api/login";
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
      oldDisabled: false,
      newDisabled: false,
      btntxt: "重新发送",
       rulesForm: {
        oldPhone: 15317177923,
        oldPhoneCode: '',
        newPhone: null,
        newPhoneCode: '',
      },
      rules: {
        oldPhone: [{ required: true, validator: this.checkOldPhone, trigger: "blur" }],
        oldPhoneCode: [{ required: true, validator: this.checkSmscode, trigger: "blur" }],
        newPhone: [{ required: true, validator: this.checkNewPhone, trigger: "blur" }],
        newPhoneCode: [{ required: true, validator: this.checkSmscode, trigger: "blur" }]
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

    // 验证手机号是否合法
    checkOldPhone(rule, value, callback) {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    },
    checkNewPhone(rule, value, callback) {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    },

    // 发送验证码
    oldPhoneSendCode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.rulesForm.oldPhone == '') {
          this.$message({
              message:'手机号不能为空',
              center: true
          })
          return
      }
      if (!reg.test(this.rulesForm.oldPhone)) {
          this.$message({
              message:'请输入正确的手机号',
              center:true
          })
          return
      } else {
          const data = {
            phone: this.rulesForm.oldPhone
          };
          sendSMS(data).then(res => {
            if(res.code == 200) {
              this.timeA = 60;
              this.oldDisabled = true;
              this.oldPhoneTimer();
            }
          })
      }
    },
    newPhoneSendCode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.rulesForm.newPhone == '') {
          this.$message({
              message:'手机号不能为空',
              center: true
          })
          return
      }
      if (!reg.test(this.rulesForm.newPhone)) {
          this.$message({
              message:'请输入正确的手机号',
              center:true
          })
          return
      } else {
          const data = {
            phone: this.rulesForm.newPhone
          };
          sendSMS(data).then(res => {
            if(res.code == 200) {
              this.timeB = 60;
              this.newDisabled = true;
              this.newPhoneTimer();
            }
          })
      }
    },

    // 验证码是否为空
    checkSmscode(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    },

    
    // 60S倒计时
    oldPhoneTimer() {
        if (this.timeA > 0) {
            this.timeA--;
            this.btntxt = this.timeA + "s后重新获取";
            setTimeout(this.oldPhoneTimer, 1000);
        } else {
            this.timeA = 0;
            this.btntxt = "获取验证码";
            this.disabled = false;
        }
    },
    newPhoneTimer() {
        if (this.timeB > 0) {
            this.timeB--;
            this.btntxt = this.timeB + "s后重新获取";
            setTimeout(this.newPhoneTimer, 1000);
        } else {
            this.timeB = 0;
            this.btntxt = "获取验证码";
            this.disabled = false;
        }
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
</style>