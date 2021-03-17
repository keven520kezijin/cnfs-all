<template>
  <div class="userIntroduce-page">
    <p-title title="基本资料" />
    
    <div class="user-introduce">
      <div class="user-avatar">
        <div class="avatar" :style="`background-image:url('${newAvatar ? newAvatar : loginUser.headPhoto}')`" />
        <el-upload
          class="edit-avatar"
          action="http://47.104.20.233:8089/cnfs-platform/platform/files/"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
        >
          <el-button type="primary">修改头像</el-button>
        </el-upload>
      </div>
      <div class="user-intro-box">
        <dl>
          <dt>登录账号：</dt>
          <dd>
            <span><router-link class="blue" to="/admin/certification">未认证</router-link>，点击进行实名认证</span>
          </dd>
        </dl>
        <dl>
          <dt>登录ID：</dt>
          <dd>18761157298</dd>
        </dl>
        <dl>
          <dt>注册时间：</dt>
          <dd>2019年9月22日 上午10:10:10</dd>
        </dl>
        <dl>
          <dt>签名：</dt>
          <dd>
            <span>技术创造价值</span>
            <el-button @click="showSignPopup">编辑</el-button>
          </dd>
        </dl>
      </div>
    </div>

    <div class="account-security">
      <dl>
        <dt>您当前的账号安全程度</dt>
        <dd>
          <div class="bar"><span class="percent" style="width: 20px" /></div>
          <div class="text">
            <span>安全程度：<i class="blue">低</i></span>
            <span class="tip">建议开启安全产品</span>
          </div>
        </dd>
      </dl>
    </div>

    <div class="table">
      <dl>
        <dt>手机绑定</dt>
        <dd class="text">您已绑定了手机<span class="green">187****7298</span></dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_1.png" class="icon" alt="" />
          <span class="setting green">已设置</span>
          <span class="line">|</span>
          <el-button @click="showPhonePopup">修改</el-button>
        </dd>
      </dl>
      <dl>
        <dt>登录密码</dt>
        <dd class="text">安全性高的密码可以使帐号更安全，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码</dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_1.png" class="icon" alt="" />
          <span class="setting green">已设置</span>
          <span class="line">|</span>
          <el-button @click="showLoginPasswordPopup">修改</el-button>
        </dd>
      </dl>
      <dl>
        <dt>支付密码</dt>
        <dd class="text">安全性高的密码可以使账号更安全，建设您定期更换</dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_2.png" class="icon" alt="" />
          <span class="setting red-color">未设置</span>
          <span class="line">|</span>
          <el-button @click="showBuyPasswordPopup">设置</el-button>
        </dd>
      </dl>
      <!-- <dl>
        <dt>操作保护</dt>
        <dd class="text">在控制台关键操作（如：释放、修改密码等）时，通过设置保护强度和验证方式再次确认您的身份，进一步提高账号安全性，有效保护您安全使用云产品</dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_2.png" class="icon" alt="" />
          <span class="setting red-color">未设置</span>
          <span class="line">|</span>
          <router-link class="edit blue" to="">修改</router-link>
        </dd>
      </dl>
      <dl>
        <dt>密保问题</dt>
        <dd class="text">建议您设置三个容易记住，且最不容易被他人获取的问题及答案，更有效保障您的密码安全</dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_2.png" class="icon" alt="" />
          <span class="setting red-color">未设置</span>
          <span class="line">|</span>
          <router-link class="edit blue" to="">修改</router-link>
        </dd>
      </dl>
      <dl>
        <dt>安全邮箱</dt>
        <dd class="text">安全邮箱可以作为账号身份验证的一种辅助校验方式</dd>
        <dd class="btn">
          <img src="@/assets/admin/icon_2.png" class="icon" alt="" />
          <span class="setting red-color">未设置</span>
          <span class="line">|</span>
          <router-link class="edit blue" to="">修改</router-link>
        </dd>
      </dl>
      <dl>
        <dt>注销账号</dt>
        <dd class="text">如果您不再使用此账号，可以将其注销。账号成功注销后，其下所有服务、数据及隐私信息将会被删除并将无法恢复</dd>
        <dd class="btn">
          <router-link class="edit blue" to="">注销帐号</router-link>
        </dd>
      </dl> -->
    </div>

    <!--dialog-->
    <sign :dialogVisible.sync="signVisible" />
    <phone :dialogVisible.sync="phoneVisible" />
    <buy-password :dialogVisible.sync="buyPasswordVisible" />
    <login-password :dialogVisible.sync="loginPasswordVisible" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pTitle from "@/components/admin/pageTitle"
import sign from './components/edit/sign'
import phone from './components/edit/phone'
import buyPassword from './components/edit/buy-password'
import loginPassword from './components/edit/login-password'

export default {
  components: {
    pTitle,
    sign,
    phone,
    buyPassword,
    loginPassword,
  },
  data() {
    return {
      newAvatar: null,
      signVisible: false,
      phoneVisible: false,
      buyPasswordVisible: false,
      loginPasswordVisible: false,
    }
  },
  computed: {
    ...mapState({
      loginUser: state => state.loginUser,
    }),
  },
  methods: {
    handleSuccess(res, file) {
       this.newAvatar = URL.createObjectURL(file.raw)
    },
    handleError() {
      this.$message.error('图片上传失败！');
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    showSignPopup() {
      this.signVisible = true
    },
    showPhonePopup() {
      this.phoneVisible = true
    },
    showBuyPasswordPopup() {
      this.buyPasswordVisible = true
    },
    showLoginPasswordPopup() {
      this.loginPasswordVisible = true
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.userIntroduce-page {
  margin: 20px 30px;
  position: relative;
  .user-introduce {
    display: flex;
    align-items: center;
    padding: 45px 30px;
    box-sizing: content-box;
    border-top: 1px solid #dadadb;
    .user-avatar {
      .avatar {
        width: 130px;
        height: 130px;
        border-radius: 100%;
        background-color: rgb(241, 245, 250);
        background-repeat: no-repeat;
        background-position: center 22px;
        background-size: 90%;
      }
      .edit-avatar {
        button {
          color: #5e9cd5;
          font-size: 18px;
          background: none;
          padding-top: 16px;
          border: 0;
        }
      }
    }
    .user-intro-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 0 20px;
      dl {
        height: 30px;
        line-height: 30px;
        display: flex;
        dt {
          width: 120px;
          text-align: right;
        }
        dd {

        }
      }
      .el-button {
        font-size: 16px;
        color: #5e9cd5;
        background: none;
        padding: 0 0 0 30px;
        border: none;
      }
    }
  }
  .account-security {
    border-top: 1px solid #dadadb;
    dl {
      font-size: 18px;
      line-height: 30px;
      text-align: left;
      display: flex;
      align-items: center;
      dt {
        width: 270px;
        color: #333;
        padding: 40px 0 40px 20px;
      }
      dd {
        width: calc(100% - 270px - 20px);
        display: flex;
        .bar {
          width: 420px;
          height: 26px;
          background: #F1F1F1;
          .percent {
            height: 26px;
            background: #2295FF;
            display: inline-block;
          }
        }
        .text {
          padding-left: 40px;
          .tip {
            padding-left: 40px;
          }
        }
      }
    }
  }
  .table {
    dl {
      font-size: 18px;
      line-height: 30px;
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: dashed 1px #DADADB;
      dt {
        width: 270px;
        font-weight: bold;
        color: #333;
        text-align: center;
      }
      dd {
        &.text {
          width: calc(100% - 270px - 180px);
          text-align: left;
        }
        &.btn {
          width: 180px;
          vertical-align: middle;
          span,.el-button {
            padding: 5px;
            position: relative;
            top: -6px;
          }
          .icon {
            margin-right: 10px;
          }
          .line {
            color: #eee;
          }
          .el-button {
            font-size: 18px;
            color: #5e9cd5;
            border: none;
          }
        }
      }
    }
  }
}
</style>