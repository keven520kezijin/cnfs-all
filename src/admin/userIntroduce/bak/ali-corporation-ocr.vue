<template>
  <div class="page page-corporation">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin/cer-enterprise' }">< 返回</el-breadcrumb-item>
      <el-breadcrumb-item>企业法人支付宝授权认证</el-breadcrumb-item>
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
              <span @click="showDialog('https://img.alicdn.com/tfs/TB1koM5XqmWBuNjy1XaXXXCbXXa-625-456.png')">老版营业执照示例图片</span>
              <span @click="showDialog('https://img.alicdn.com/tfs/TB12VI6XqmWBuNjy1XaXXXCbXXa-625-907.png')">新版营业执照示例图片</span>
              <span @click="showDialog('https://img.alicdn.com/tfs/TB1iuc8XuuSBuNjy1XcXXcYjFXa-625-458.png')">律师事务所示例图片</span>
              <span @click="showDialog('https://img.alicdn.com/tfs/TB1HQs2XrGYBuNjy0FoXXciBFXa-625-428.png')">社会团体示例图片</span>
            </div>
          </div>
        </el-form-item>

        <dialog-img :dialogVisible.sync="visible" :url="dialogUrl" />

        <el-form-item
          class="bizLicenseNo"
          label="统一社会信用代码/注册号/组织机构代码:"
          prop="bizLicenseNo"
        >
          <el-input
            v-model="atteForm.bizLicenseNo"
            placeholder="请输入身份证件上的统一社会信用代码或注册号或组织机构代码"
          ></el-input>
        </el-form-item>

        <el-form-item class="bizLicenseNo" label="企业名称:" prop="entName">
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

        <el-form-item label="所在地区:" class="are-box" prop="operatingPeriod">
          <el-select class="mr-10" v-model="atteForm.province" placeholder="请选择">
            <el-option
              v-for="item in provinceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select class="mr-10" v-model="atteForm.city" placeholder="请选择">
            <el-option
              v-for="item in provinceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select class="mr-10" v-model="atteForm.area" placeholder="请选择">
            <el-option
              v-for="item in provinceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="详细地址:" class="are-box" prop="operatingPeriod">
          <el-input
            type="textarea"
            v-model="atteForm.address"
            placeholder="请填写您的详细地址，以便在有需要时给您寄送书面文件"
          ></el-input>
        </el-form-item>
        <div class="agree">
          <el-checkbox v-model="checked">同意CNFS存储平台读取您在支付宝的认证信息（姓名、身份证号）用于身份认证。</el-checkbox>
        </div>
        <div class="submit"><el-button type="primary">提交</el-button></div>
      </el-form>
    </div>
  </div>
</template>

<script>
import dialogImg from '@/components/admin/dialog-img'
import upload from '@/components/admin/upload'
export default {
  components: {
    dialogImg,
    upload,
  },
  data() {
    return {
      isAgree: false,
      isForever: false,
      atteForm: {
        bizLicenseNo: "",
        entName: "",
        province: "",
        city: "",
        area: "",
        address: "",
      },
      rules: {
        license: [
          { required: true, message: "请上传营业执照", trigger: "blur" },
        ],
        bizLicenseNo: [
          {
            required: true,
            message: "请输入身份证件上的统一社会信用代码或注册号或组织机构代码",
            trigger: "blur",
          },
        ],
        entName: [
          {
            required: true,
            message: "请填写营业执照或其他身份证件上的企业名称",
            trigger: "blur",
            operatingPeriod: "",
          },
        ],
        operatingPeriod: [
          {
            required: true,
            message: "请选择经营期限",
            trigger: "blur",
            operatingPeriod: "",
          },
        ],
      },
      provinceOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],

      dialogUrl: '',
      visible: false,
      checked: false,
    };
  },
  methods: {
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