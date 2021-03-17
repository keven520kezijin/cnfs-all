<template>
    <el-form :class="$store.state.device === 'desktop' ? 'pForm' : 'mForm'" ref="rulesForm" :rules="rules" :model="rulesForm">
        <el-form-item prop="mobile">
          <el-input
            v-model="rulesForm.mobile"
            placeholder="请输入手机号码"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="rulesForm.password"
            placeholder="请输入登录密码"
          />
        </el-form-item>
        <el-button type="primary" round class="submit"
            @click="submitForm('rulesForm')">登录</el-button
        >
    </el-form>
</template>

<script>
import { login } from '@/api/login'

export default {
  data() {
    return {
      rulesForm: {
        mobile: '',
        password: '',
      },
      disabled: false,
      btntxt: "重新发送",
      rules: {
        mobile: [{ validator: this.checkPhone, trigger: "blur" }],
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
            password: this.rulesForm.password
          };

          login(data).then(res => {
            if (res.code == 200 && res.data) {
              this.$store.commit('SET_USER', res.data)
              console.log(this.$store.state)
              this.$router.push('/')
            } else {
              this.$message.error('登录名或登录密码不正确')
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      })
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
  }
}
</script>