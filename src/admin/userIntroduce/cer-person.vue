<template>
  <div class="page page-certification">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin/certification' }">< 返回</el-breadcrumb-item>
      <el-breadcrumb-item>个人实名认证</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content t-80">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="170px"
        class="admin-ruleForm"
      >
        <el-form-item label="上传身份证：" prop="IDcard">
          <el-upload
            class="id-card-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleFrontSuccess"
            :on-error="handleError"
            :before-upload="beforeUpload">
            <img v-if="form.IDcardFront" :src="form.IDcardFront" class="id-card">
            <div v-else class="upload-text">
              <i class="el-icon-plus id-card-uploader-icon"></i>
              <p>上传身份证正面照片</p>
            </div>
          </el-upload>

          <el-upload
            class="id-card-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleBackSuccess"
            :on-error="handleError"
            :before-upload="beforeUpload">
            <img v-if="form.IDcardBack" :src="form.IDcardBack" class="id-card">
            <div v-else class="upload-text">
              <i class="el-icon-plus id-card-uploader-icon"></i>
              <p>上传身份证背面照片</p>
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item
          label="姓名:"
          prop="username"
        >
          <el-input
            v-model="form.username"
            placeholder="请输入您的姓名"
          ></el-input>
        </el-form-item>

        <el-form-item label="身份证号:" prop="IDnumber">
          <el-input
            v-model="form.entName"
            placeholder="请填写您的身份证号"
          ></el-input>
        </el-form-item>

        <el-form-item label="所在地区:" class="are-box" prop="location">
          <el-select class="mr-10" v-model="form.province" @change="getCity" placeholder="请选择">
            <el-option
              v-for="item in provinceData"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            >
            </el-option>
          </el-select>
          <el-select class="mr-10" v-model="form.city" @change="getArea" placeholder="请选择">
            <el-option
              v-for="item in cityData"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            >
            </el-option>
          </el-select>
          <el-select class="mr-10" v-model="form.area" placeholder="请选择">
            <el-option
              v-for="item in areaData"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </el-form-item>
        
        <div class="submit"><el-button type="primary" @click="submitForm('atteForm')">提交</el-button></div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getProvince, getAllCity, getAllArea } from '@/api/admin'

export default {
  data() {
    return {
      form: {
        IDcardFront: '',
        IDcardBack: '',
        username: '',
        IDnumber: '',
        province: '',
        city: '',
        area: '',
      },

      rules: {
        IDcard: [{
          required: true, trigger: "blur", message: "请上传身份证正面照片",
        }],
        username: [{
          required: true, trigger: "blur", message: "请输入您的姓名",
        }],
        IDnumber: [{
          validator: this.checkID, trigger: "blur"
        }],
        location: [{ 
          required: true, trigger: "blur", message: "请选择您所在地区",
        }],
      },

      provinceData: [],
      cityData: [],
      areaData: [],
    };
  },
  created() {
    this.getProvince();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // const data = {
          //   phone: this.rulesForm.mobile,
          //   password: this.rulesForm.password
          // };

          // login(data).then(res => {
          //   console.log('res: ', res)
          //   if (res.data) {
          //     this.$store.commit('SET_USER', res.data)
          //     console.log(this.$store.state)
          //     this.$router.push('/')
          //   }
          // })
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    getProvince() {
      getProvince().then(res => {
        if(res.code == 200 && res.data) this.provinceData = res.data
      })
    },
    getCity(val) {
      getAllCity({
        code: val
      }).then(res => {
        if(res.code == 200 && res.data) this.cityData = res.data
      })
    },
    getArea(val) {
      getAllArea({
        code: val
      }).then(res => {
        if(res.code == 200 && res.data) this.areaData = res.data
      })
    },
    handleFrontSuccess(res, file) {
      this.form.IDcardFront = file.raw
    },
    handleBackSuccess(res, file) {
      this.form.IDcardBack = file.raw
    },
    handleError() {
      this.$message.error('图片上传失败！');
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    checkID(rule, value, callback) {
      if (!value) {
        return callback(new Error("身份证号不能为空"));
      } else {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        // console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的身份证号"));
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.content {
  width: 960px;
  margin: 0 auto;
  .id-card-uploader {
    display: inline-block;
    &:first-child {
      margin-right: 20px;
    }
    ::v-deep .el-upload {
      width: 178px;
      height: 178px;
      background-color: #f4f4f5;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409EFF;
      }
      .upload-text {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        i {
          font-size: 28px;
        }
        p {
          font-size: 16px;
        }
        i,p {
          color: #8c939d;
        }
      }
      .id-card {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }

  .file-extra {
    padding-top: 10px;
    font-size: 16px;
    color: #999;
    line-height: 30px;
    .img {
      span {
        color: #4a90e2;
        display: block;
        cursor: pointer;
      }
    }
  }
  .agree {
    ::v-deep .el-checkbox {
      display: inline;
    }
  }
}
</style>
