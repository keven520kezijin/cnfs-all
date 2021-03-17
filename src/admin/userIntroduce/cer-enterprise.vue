<template>
  <div class="page page-corporation">
    <!--已审核-->
    <div class="auditing" v-if="!isAuditing">
        <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/admin/certification' }">< 返回</el-breadcrumb-item>
        <el-breadcrumb-item>企业政府实名认证</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="content t-80">
        <el-form
          :model="atteForm"
          :rules="rules"
          ref="atteForm"
          label-width="170px"
          class="admin-ruleForm"
        >
          <el-form-item label="营业执照：" prop="license">
            <upload class="upload" />
            <div class="file-extra" data-spm-anchor-id="0.0.0.i11.76d41549v1IHWQ">
              <p>上传营业执照图片；</p>
              <p>清晰的图片可以让您更快通过审核；</p>
              <p>推荐上传扫描文件，拍照请尽量降低反光；</p>
              <p>请确保营业执照图片所有信息清晰可见，内容真实有效，无任何修改；</p>
              <p>文件大小不超过5M，格式支持 .jpg .jpeg .gif .bmp .png</p>
              <div class="img">
                <p><span @click="showDialog('https://img.alicdn.com/tfs/TB1koM5XqmWBuNjy1XaXXXCbXXa-625-456.png')">老版营业执照示例图片</span></p>
                <p><span @click="showDialog('https://img.alicdn.com/tfs/TB12VI6XqmWBuNjy1XaXXXCbXXa-625-907.png')">新版营业执照示例图片</span></p>
                <p><span @click="showDialog('https://img.alicdn.com/tfs/TB1iuc8XuuSBuNjy1XcXXcYjFXa-625-458.png')">律师事务所示例图片</span></p>
                <p><span @click="showDialog('https://img.alicdn.com/tfs/TB1HQs2XrGYBuNjy0FoXXciBFXa-625-428.png')">社会团体示例图片</span></p>
              </div>
            </div>
          </el-form-item>

          <dialog-img :dialogVisible.sync="visible" :url="dialogUrl" @getUploadImg="uploadImg" />

          <el-form-item
            label="统一社会信用代码/注册号/组织机构代码:"
            prop="bizLicenseNo"
          >
            <el-input
              v-model="atteForm.bizLicenseNo"
              placeholder="请输入身份证件上的统一社会信用代码或注册号或组织机构代码"
            ></el-input>
          </el-form-item>

          <el-form-item label="企业名称:" prop="entName">
            <el-input
              v-model="atteForm.entName"
              placeholder="请填写营业执照或其他身份证件上的企业名称"
            ></el-input>
          </el-form-item>

          <el-form-item label="经营期限至:" prop="operatingPeriod">
            <el-date-picker
              class="date-picker"
              :disabled="isForever"
              type="date"
              placeholder="选择经营期限"
              v-model="atteForm.operatingPeriod"
              style="width: 100%"
            ></el-date-picker>
            <el-checkbox class="checkbox" v-model="isForever">长期</el-checkbox>
          </el-form-item>

          <el-form-item label="所在地区:" class="are-box" prop="location">
            <el-select class="mr-10" v-model="atteForm.province" @change="getCity" placeholder="请选择">
              <el-option
                v-for="item in provinceData"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select>
            <el-select class="mr-10" v-model="atteForm.city" @change="getArea" placeholder="请选择">
              <el-option
                v-for="item in cityData"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select>
            <el-select class="mr-10" v-model="atteForm.area" placeholder="请选择">
              <el-option
                v-for="item in areaData"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="详细地址:" class="are-box" prop="address">
            <el-input
              type="textarea"
              v-model="atteForm.address"
              placeholder="请填写您的详细地址，以便在有需要时给您寄送书面文件"
            ></el-input>
          </el-form-item>
          <div class="submit"><el-button type="primary" @click="submitForm('atteForm')">提交</el-button></div>
        </el-form>
      </div>
    </div>
    <!--审核中-->
    <div class="no-auditing" v-else>
      <div class="tip">
        <p>
          <i class="el-icon el-icon-document" />
          <span>您提交的材料正在审核中，请耐心等待，小二会在工作日48小时审核完成</span>
        </p>
        <el-button type="primary">重新查询审核结果</el-button>
      </div>

      <div class="submit-information">
        <h6>您提交的公司信息：</h6>
        <div class="list-content">
          <dl>
            <dt>企业名称</dt>
            <dd>山西制药科技有限公司</dd>
          </dl>
          <dl>
            <dt>注册号/统一社会信用代码</dt>
            <dd>9466568888888888888</dd>
          </dl>
          <dl>
            <dt>企业营业执照图片</dt>
            <dd>
              <img width="138px" src="https://img.alicdn.com/tfs/TB1koM5XqmWBuNjy1XaXXXCbXXa-625-456.png" alt="" />
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dialogImg from '@/components/admin/dialog-img'
import upload from '@/components/admin/upload'
import { getProvince, getAllCity, getAllArea } from '@/api/admin'

export default {
  components: {
    dialogImg,
    upload,
  },
  data() {
    return {
      isAuditing: false,
      atteForm: {
        bizLicenseNo: '',
        entName: '',
        province: '',
        city: '',
        area: '',
        address: '',
      },

      rules: {
        license: [{
          required: true, trigger: "blur", message: "请上传营业执照",
        }],
        bizLicenseNo: [{
          required: true, trigger: "blur", message: "请输入身份证件上的统一社会信用代码或注册号或组织机构代码",
        }],
        entName: [{
          required: true, trigger: "blur", message: "请填写营业执照或其他身份证件上的企业名称",
        }],
        operatingPeriod: [{
          required: true, trigger: "blur", message: "请选择经营期限",
        }],
        location: [{ 
          required: true, trigger: "blur", message: "请填写您所在地区",
        }],
        address: [{ 
          required: true, trigger: "blur", message: "请填写您的详细地址",
        }]
      },

      isForever: false,
      dialogUrl: '',
      visible: false,
      checked: false,
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
          const data = {
            phone: this.rulesForm.mobile,
            password: this.rulesForm.password
          };

          login(data).then(res => {
            console.log('res: ', res)
            if (res.data) {
              this.$store.commit('SET_USER', res.data)
              console.log(this.$store.state)
              this.$router.push('/')
            }
          })
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
    uploadImg(data) {
      console.log('upload-img', data)
    },
    showDialog(url) {
      this.dialogUrl = url;
      this.visible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.content {
  width: 960px;
  margin: 0 auto;
  .file-extra {
    padding-top: 10px;
    font-size: 16px;
    color: #999;
    line-height: 30px;
    .img {
      span {
        color: #4a90e2;
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

.no-auditing {
  text-align: left;
  padding: 0 50px;
  .tip {
    padding: 30px;
    background: #FFF7F4;
    p {
      .el-icon {
        font-size: 50px;
        color: #f7ac81;
        vertical-align: middle;
      }
      span {
        font-size: 20px;
        font-weight: 500;
        color: #E88145;
        padding-left: 10px;
        position: relative;
        top: 3px;
      }
    }
    .el-button {
      width: 210px;
      height: 50px;
      font-size: 20px;
      margin-top: 20px;
      margin-left: 60px;
    }
  }
  .submit-information {
    padding: 50px 35px;
    margin-top: 30px;
    background: #F9F9F9;
    h6 {
      font-size: 24px;
      font-weight: 500;
      color: #666;
    }
    .list-content {
      padding-top: 30px;
      dl {
        padding: 25px 0;
        display: flex;
        dt {
          width: 250px;
          text-align: right;
          font-weight: 600;
        }
        dd {
          padding-left: 20px;
        }
      }
    }
  }
}
</style>