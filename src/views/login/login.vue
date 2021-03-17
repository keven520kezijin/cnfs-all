<template>
  <div class="home">
    <!--头部-->
    <div class="nynav">
      <div class="container page-w">
        <div class="logo">
          <router-link to="/"><img src="@/assets/logo_write.svg" alt="logo" /></router-link>
        </div>
      </div>
    </div>

    <!--内页内容-->
    <div class="nywrap">
      <div class="nycontent">
        <div class="login-txt">
          <h3>CNFS存储平台全新上线</h3>
          <p>
            采用分布式存储方式分布式存储，数据信息更安全可靠，信息更加快速，便捷，资源共享
          </p>
          <h4><img src="@/assets/login/login-bg.png" /></h4>
        </div>
        <div class="login-con">
          <h3>账号密码登录</h3>
          
          <div class="login-form">
            <login-form />
          </div>

          <!-- <div class="login-other">
            <p>其它登录方式</p>
            <ol>
              <li><img src="@/assets/login/icon_weibo.png" />微博</li>
              <li><img src="@/assets/login/icon_qq.png" />QQ</li>
              <li><img src="@/assets/login/icon_weixin.png" />微信公众账号</li>
            </ol>
          </div> -->
          <div class="login-reg">
            <ol>
              <li>
                <router-link to="/register">免费注册</router-link>
              </li>
              <li class="line">|</li>
              <li>
                <router-link to="/password_find">忘记密码</router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!--内页尾部-->
    <div class="ny-footer">
      Copyright@2019-2020 Epochain.org
      CNFS存储平台版权归开发者所有，并保留所有权利
    </div>
  </div>
</template>

<script>
import loginForm from './components/form';
export default {
  components: {
    loginForm,
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

@mixin h3 {
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 30px;
  padding-left: 40px;
  margin-bottom: 20px;
  background-image: url("~@/assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}

.home {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .nynav {
    width: 100%;
    height: 84px;
    background: #292c2f;
    .container {
      height: 100%;
      display: flex;
      align-items: center;
      
      .logo {
        width: 180px;
        display: inline-block;
      }
    }
  }
  .nywrap {
    width: 100%;
    background: #fff;
    padding-bottom: 84px;
    .nycontent {
      width: 1200px;
      margin: 0 auto;
      padding: 80px 0;
      overflow: hidden;
      zoom: 1;
      .login-txt {
        width: 550px;
        text-align: left;
        float: left;
        h3 {
          font-size: 30px;
          color: #333333;
          line-height: 40px;
          padding-top: 85px;
          padding-bottom: 25px;
        }
        p {
          width: 405px;
          font-size: 20px;

          color: #8f8f8f;
          line-height: 38px;
        }
        h4 {
          padding-top: 20px;
        }
      }
      .login-con {
        height: 730px;
        width: 550px;
        float: right;
        background: url("~@/assets/login/line.png") top left no-repeat;

        padding-left: 50px;
        text-align: left;
        h3 {
          padding: 30px 0 15px 20px;
          border-bottom: 1px solid #d8d8d8;
          font-size: 28px;
          color: #333333;
          line-height: 37px;
        }
        .login-form {
          padding-top: 85px;
        }
        .login-other {
          margin: 0 auto;
          width: 470px;
          padding-top: 110px;
          padding-bottom: 30px;
          display: flex;
          overflow: hidden;
          zoom: 1;
          p {
            padding-top: 20px;
            width: 115px;
            float: left;
            font-size: 18px;
            color: #999999;
            line-height: 24px;
          }
          ol {
            float: left;
            padding-left: 35px;
            padding-top: 20px;
            li {
              float: left;
              font-size: 18px;
              color: #333333;
              line-height: 24px;
              padding-right: 20px;
              &:last-child{
                padding-right: 0;
              }
              cursor: pointer;
              img {
                padding-right: 10px;
              }
            }
          }
        }
        .login-reg {
          clear: both;

          padding: 27px 0;

          overflow: hidden;
          zoom: 1;
          border-top: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
          text-align: center;
          width: 544px;
          ol {
            li {
              float: left;
              padding: 0 50px;
              color: #333333;
              font-size: 24px;
              line-height: 31px;
              a {
                color: #333333;
              }
            }
            .line {
              color: #d8d8d8;
            }
          }
        }
      }
    }
  }
  .ny-footer {
    height: 84px;
    width: 100%;
    background: #f7f8fa;
    border: 1px solid #efefef;
    text-align: center;
    line-height: 84px;
    font-size: 16px;
    color: #999999;
    position: absolute;
    bottom: 0;
  }
}
</style>
