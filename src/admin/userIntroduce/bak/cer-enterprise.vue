<template>
  <div class="page page-certification">
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/admin/certification' }">< 返回</el-breadcrumb-item>
        <el-breadcrumb-item>实名认证</el-breadcrumb-item>
        <el-breadcrumb-item>企业政府实名认证</el-breadcrumb-item>
    </el-breadcrumb>
    
    <div class="main container">
      <div class="content">
        <div class="certification-list">
          <h6>企业支付宝授权认证<span>（即时开通，无需等待）</span></h6>
          <ul>
            <li>请使用企业支付宝进行认证</li>
          </ul>
          <div class="bottom">
            <router-link to="/admin/ali-company">如何完成企业支付宝授权认证 ></router-link>
          </div>
        </div>

        <div class="certification-list">
          <h6>企业法人支付宝授权认证<span>（0-2个工作日）</span></h6>
          <ul>
            <li>请提前准备好营业执照</li>
            <li>确保支付宝登录企业法人账号信息，以免与个人账号混淆</li>
            <li>提交信息后，需等待审核通过</li>
          </ul>
          <div class="bottom">
            <router-link to="/admin/ali-corporation-ocr">如何完成企业法人支付宝授权认证 ></router-link>
          </div>
        </div>

        <div class="certification-list">
          <h6>企业法人扫脸认证<span>（0-2个工作日）</span></h6>
          <ul>
            <li>请提前准备好营业执照，法人身份证</li>
            <li>确保支付宝/微信，以便进行实人认证</li>
            <li>提交信息后，需等待审核通过</li>
          </ul>
          <div class="bottom">
            <router-link to="/admin/ali-corporation-face">如何完成企业法人扫脸认证 ></router-link>
          </div>
        </div>

        <div class="certification-list">
          <h6>企业银行卡信息认证<span>（2-3个工作日）</span></h6>
          <ul>
            <li>请提前准备好营业执照，企业对公账号资料</li>
            <li>确保账号可用以及您能直接或间接获得该账号转账信息，CNFS存储平台将向此账户打款</li>
            <li>由于银行返回打款成功信息有延迟，若认证页面未出现更新状态，请耐心等待一个工作日左右</li>
          </ul>
          <div class="bottom">
            <router-link to="">如何完成企业银行卡信息认证 ></router-link>
          </div>
        </div>
      </div>

      <div class="help">
        <h6>相关帮助</h6>
        <p>
          <router-link to="">事业单位、学校、机关、政府、社会团体如何完成实名认证 ></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.page-certification {
  .main {
    .content {
      padding-top: 20px;
    }
    .help {
      text-align: left;
      padding-top: 30px;
      h6 {
        font-size: 20px;
        font-weight: bold;
      }
      p {
        padding-top: 40px;
        a {
          color: #5E9CD5;
        }
      }
    }
  }
}
</style>