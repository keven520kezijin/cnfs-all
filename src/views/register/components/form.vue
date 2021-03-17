<template>
    <el-form :class="$store.state.device === 'desktop' ? 'pForm' : 'mForm'" ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="mobile">
            <el-input
            v-model="rulesForm.mobile"
            placeholder="请输入手机号"
            />
        </el-form-item>
        <el-form-item class="code" prop="code">
            <el-input
            v-model="rulesForm.code"
            placeholder="请输入验证码"
            />
            <el-button type="button" class="code-txt" @click="sendCode" :disabled="disabled">
              {{!disabled ? '获取验证码' : btntxt}}
            </el-button>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
            type="password"
            v-model="rulesForm.password"
            placeholder="请设置登录密码"
            />
        </el-form-item>
        <el-button type="primary" round class="submit"
            @click="submitForm('rulesForm')">注册</el-button
        >
    </el-form>
</template>

<script>
import { userRegister, sendSMS } from "@/api/login";

export default {
  data() {
    return {
      rulesForm: {
        mobile: '',
        password: '',
        code: '',
      },
      disabled: false,
      btntxt: "重新发送",
      rules: {
        mobile: [{ validator: this.checkPhone, trigger: "blur" }],
        code: [{ validator: this.checkSmscode, trigger: "blur" }],
        password: [{ validator: this.checkPassword, trigger: "blur" }],
      },
    }
  },

  methods: {
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = {
            phone: this.rulesForm.mobile,
            password: this.rulesForm.password,
            verifyCode: this.rulesForm.code
          };

          userRegister(data).then(res => {
            if (res.code == 200) {
              this.$message({
                message: "恭喜你，注册成功",
                type: "success",
              });
              this.$router.push('/');
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },

    // 发送验证码
    sendCode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.rulesForm.mobile == '') {
          this.$message({
              message:'手机号不能为空',
              center: true
          })
          return
      }
      if (!reg.test(this.rulesForm.mobile)) {
          this.$message({
              message:'请输入正确的手机号',
              center:true
          })
          return
      } else {
        const data = {
          phone: this.rulesForm.mobile
        };
        sendSMS(data).then(res => {
          if(res.code == 200) {
            this.time = 60;
            this.disabled = true;
            this.timer();
          }
        })
      }
    },

    // 60S倒计时
    timer() {
        if (this.time > 0) {
            this.time--;
            this.btntxt = this.time + "s后重新获取";
            setTimeout(this.timer, 1000);
        } else {
            this.time = 0;
            this.btntxt = "获取验证码";
            this.disabled = false;
        }
    },

    // 验证手机号是否合法
    checkPhone(rule, value, callback) {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        // console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
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
          return callback(new Error("密码为6-20个字符, 不包含空格必须包含数字, 字母或字符至少两种"));
        }
      }
    },
  }
}
</script>
