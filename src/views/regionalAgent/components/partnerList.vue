<template>
  <div class="partner-box mt-42" :class="classname">
    <div class="partner-box_list" v-for="(item, i) in partnerData" :key="i">
      <span class="hot"><img src="@/assets/agents/hot.png" /></span>
      <div class="title">
        <h4>{{ item.cityName }}</h4>
        <span>{{ item.status === 0 ? "未签约" : "已签约" }}</span>
      </div>
      <p>
        <img src="@/assets/agents/icon_guanzhu_red.png" />
        <span>{{ item.applyCount }}人申请中</span>
      </p>
      <div class="btn">
        <button
          class="sub-page_button mb-10"
          @click="consult"
        >
          我要咨询
        </button>
        <button
          class="sub-page_button"
          @click="apply"
        >
          我要申请
        </button>
      </div>
    </div>

    <!--dialog 二维码-->
    <el-dialog :visible.sync="dialogVisible" width="570px">
      <img src="@/assets/partner/ewm@2x.png" alt="" />
    </el-dialog>

    <!--dialog 表单-->
    <el-dialog
      title="申请城市合伙人"
      class="form-dialog"
      :visible.sync="formVisible"
      top="40px"
      width="600px"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="您的姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入您的姓名"></el-input>
        </el-form-item>
        <el-form-item label="您的手机号码" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入您的手机号码"></el-input>
        </el-form-item>
        <el-form-item label="您的公司全称" prop="corporateName">
          <el-input v-model="ruleForm.corporateName" placeholder="请输入您的公司全称"></el-input>
        </el-form-item>
        <el-form-item label="您目前的职务" prop="post">
          <el-input v-model="ruleForm.post" placeholder="请输入您目前的职务"></el-input>
        </el-form-item>
        <el-form-item label="您的常驻城市" prop="residentCity">
          <el-input v-model="ruleForm.residentCity" prop="residentCity" placeholder="请输入您的常驻城市"></el-input>
        </el-form-item>
        <el-form-item label="您申请的城市" prop="applicantCity">
          <el-input v-model="ruleForm.applicantCity" prop="applicantCity" placeholder="请输入您申请的城市"></el-input>
        </el-form-item>
        <el-form-item label="您拥有的资源" prop="resource">
          <el-input type="textarea" v-model="ruleForm.resource" prop="resource" placeholder="请输入您拥有的资源"></el-input>
        </el-form-item>
        <el-form-item label="您具备的优势" prop="goodness">
          <el-input type="textarea" v-model="ruleForm.goodness" prop="goodness" placeholder="请输入您具备的优势"></el-input>
        </el-form-item>
        <el-form-item label="您的运作计划" prop="plan">
          <el-input type="textarea" v-model="ruleForm.plan" prop="plan" placeholder="请输入您的运作计划"></el-input>
        </el-form-item>
        <el-form-item label="您的其它补充" prop="replenish">
          <el-input type="textarea" v-model="ruleForm.replenish" prop="replenish" placeholder="请输入您的其它补充"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交申请</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { submitApply } from '@/api/page'

export default {
  props: {
    classname: {
      type: String,
      default: ''
    },
    partnerData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      dialogVisible: false,
      formVisible: false,
      ruleForm: {
        name: "",
        mobile: "",
        corporateName: "", // 公司全称
        post: "", // 目前职务
        residentCity: "", // 常驻城市
        applicantCity: "", // 申请城市
        resource: "",  //资源
        goodness: "", // 优势
        plan: "", // 计划
        replenish: "", // 其它补充
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        mobile: [
          { required: true, validator: this.checkPhone, trigger: "blur" }
        ],
        corporateName: [
          { required: true, message: "请输入您的公司全称", trigger: "change" },
        ],
        post: [
          { required: true, message: "请输入您目前的职务", trigger: "change" },
        ],
        residentCity: [
          { required: true, message: "请输入您的常驻城市", trigger: "change" },
        ],
        applicantCity: [
          { required: true, message: "请输入您申请的城市", trigger: "change" },
        ],
        resource: [
          { required: true, message: "请输入您拥有的资源", trigger: "change" },
        ],
        goodness: [
          { message: "请输入您具备的优势", trigger: "change" },
        ],
        replenish: [
          { message: "请输入您的其它补充", trigger: "change" },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      const params = {
        coopName: this.ruleForm.name,
        coopPhone: this.ruleForm.mobile,
        coopCompany: this.ruleForm.corporateName,
        coopPosition: this.ruleForm.post,
        localCity: this.ruleForm.residentCity,
        applyCity: this.ruleForm.applicantCity,
        resources: this.ruleForm.resource,
        advantage: this.ruleForm.goodness,
        plan: this.ruleForm.plan,
        otherBak: this.ruleForm.replenish,
      };
      this.$refs[formName].validate((valid) => {
        if (valid) {
          submitApply(params).then(res => {
            if(res) {
              this.$message({
                message: res.message,
                type: "success",
              });
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
    consult() {
      this.dialogVisible = true;
    },
    apply() {
      this.formVisible = true;
    },
  }
};
</script>

<style scoped lang="scss">
.partner-box {
  .partner-box_list {
    position: relative;
    .hot {
      width: 40%;
      display: block;
      img {
        width: 100%;
      }
    }
  }
  &.partner__pc {
    max-width: 1440px;
    margin: 0 auto;
    .partner-box_list {
      width: 278px;
      padding: 0 25px;
      margin: 36px 8px;
      .title {
        padding: 60px 0 20px;
        h4 {
          font-size: 35px;
          line-height: 50px;
        }
        span {
          font-size: 24px;
          color: #999;
          display: block;
        }
      } 
      p {
        padding: 20px 0 50px;
        font-size: 20px;
        line-height: 27px;
      }
      .btn {
        padding-bottom: 30px;
        a {
          font-size: 23px;
          line-height: 50px;
        }
      }
      button {
        height: 50px;
        font-size: 23px;
        line-height: 30px;
      }
      .hot-icon {
        height: 75px;
        width: 75px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  &.partner__mobile {
    .partner-box_list {
      width: 108px;
      padding: 0 10px 15px;
      margin: 8px 5px;
      .title {
        padding-bottom: 10px;
        h4 {
          font-size: 18px;
          line-height: 26px;
          padding: 18px 0 5px;
        }
      }
      p {
        padding: 10px 0 20px;
        font-size: 12px;
        line-height: 15px;
        img {
          display: none;
        }
      }
      button {
        width: 90%;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
      }
    }
  }
  .partner-box_list {
    .btn {
      a {
        width: 90%;
        font-weight: bold;
        display: inline-block;
        color: #0d8bff;
        background: #fff;
        border: solid 2px #0d8bff;
        &.clicked,&:hover {
          color: #fff;
          background: #0d8bff;
          border: none;
        }
      }
    }
  }

  .form-dialog {
  ::v-deep .el-dialog__header {
    border-bottom: 1px #e8e8e8 solid;
  }
}
}
::v-deep .el-dialog__body {
  display: flex;
  justify-content: center;
  .demo-ruleForm {
    width: 400px;
  }
}
::v-deep .el-form-item:last-child .el-form-item__content {
  margin-left: 16px !important;
}


.el-textarea {
  ::v-deep textarea {
    height: 100px;
  }
}
</style>