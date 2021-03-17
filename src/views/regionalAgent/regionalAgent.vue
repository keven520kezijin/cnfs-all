<template>
  <div class="home">
    <!--头部-->

    <div class="topnav"></div>
    <!--面包屑-->
    <div class="breadnav">
      <ul>
        <li><router-link to="/partner?id=partner">城市合伙人</router-link></li>
        <li>></li>
        <li>{{ province }}</li>
      </ul>
    </div>

    <!--代理列表-->
    <div class="agents-box">
      <partner-list classname="partner__pc" :partnerData="partnerData" />
    </div>
    
    <router-view />
  </div>
</template>

<script>
import { getpartenerbyprovince } from "@/api/page";
import partnerList from "./components/partnerList";

export default {
  components: {
    partnerList,
  },
  data() {
    return {
      province: '',
      partnerData: [],
    }
  },
  created() {
    this.reqPartenerbyprovince();
    this.province = this.$route.query.province
  },
  methods: {
    reqPartenerbyprovince() {
      const provinceId = this.$route.query.province;
      getpartenerbyprovince({
        pageNo: 1,
        pageSize: 500,
        province: provinceId
      }).then((res) => {
        if(res.code == 200 && res.data) this.partnerData = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

@mixin h3 {
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 30px;
  padding-left: 20px;
  margin-bottom: 20px;
  background-image: url("~@/assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}


.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .nynav {
    height: 84px;
    background: #292c2f;
    h1 {
      height: 38px;
      width: 180px;
      background: red;
    }
  }

  .topnav {
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    background-color: #292c2f;

    .top-box {
      width: $pageWidth;
      height: 60px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .top-left {
        width: 300px;

        .top-log {
          height: 38px;
          width: 180px;
          float: left;
        }

        .top-adressbox {
          width: 78px;
          height: 28px;
          border: 1px solid #ffffff;
          color: #ffffff;
          font-size: 14px;
          line-height: 28px;
          text-align: center;
          float: left;
          margin-left: 20px;
        }
      }

      .top-nav {
        width: 680px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;

        .el-menu.el-menu--horizontal {
          border: none;
          background: none;
          width: 600px;

          .el-menu-item.is-active {
            border: none;
          }

          .el-menu-item {
            color: #333;
            height: 30px;
            line-height: 30px;
            border: none;
          }
        }

        .el-menu-item:not(.is-disabled):hover,
        .el-menu-item:not(.is-disabled):focus {
          background: none;
        }

        .top-reg {
          background: #0d8bff;
          float: left;
          font-size: 14px;
          color: #fff;
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
      }
    }

    .top-main {
      position: absolute;
      top: 200px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      h2 {
        font-size: 40px;
        margin-bottom: 50px;
      }

      h4 {
        font-size: 20px;
      }

      .note {
        position: absolute;
        background: red;
        color: #000;
        height: 105px;
        width: 100%;
        top: 295px;
        font-size: 28px;
        line-height: 105px;
        text-align: left;

        .note-txt {
          padding-left: 360px;
        }
      }
    }
  }
  .breadnav {
    width: 1200px;
    padding-bottom: 30px;
    color: #333;
    ul {
      padding-top: 100px;
      display: flex;
      li {
        font-size: 28px;
        padding-right: 15px;
        a {
          color: #333;
          cursor: pointer;
        }
      }
    }
  }
  .agents-box {
    background: #f5f5f6;
    padding-top: 125px;
    padding-bottom: 150px;
    margin-bottom: 150px;
    width: 100%;
    .agentscon {
      width: 1200px;
      display: flex;
      flex-wrap: wrap;

      margin: 0 auto;
      justify-content: flex-start;

      .agentscon-list {
        align-items: center;
        height: 410px;
        width: 278px;
        border: 1px solid #e6e6e6;
        margin: 0px 10px 30px 10px;
        background: green;
        position: relative;
        background: url("~@/assets/agents/juxing2.png");
        .agents-txt {
          width: 215px;
          padding-top: 60px;
          margin: 0 auto;
          padding-bottom: 20px;
          border-bottom: 1px dashed #ccc;
          margin-bottom: 60px;
          h3 {
            font-size: 30px;
            line-height: 40px;
            height: 80px;
            color: #333;
            padding-bottom: 20px;
            box-sizing: content-box;
          }
          p {
            font-size: 20px;
            color: #999;
            padding-top: 5px;
          }
        }
        .agents-pic {
          width: 285px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          .succes-yes {
            width: 70px;
            height: 49px;
            margin: 0 auto;
            margin-top: -12px;
            img {
              width: 70px;
              height: 49px;
            }
          }

          img {
            width: 34px;
            height: 37px;
          }
          span {
            font-size: 22px;
            color: #999;
            padding-left: 20px;
            padding-top: 7px;
          }
        }
        .btn-box {
          width: 214px;
          height: 50px;
          margin: 0 auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          .button {
            flex: 1;
            height: 40px;
            font-size: 16px;
            & :not(:last-child) {
              margin-right: 10px;
            }
          }
        }
        .agents-btn {
          width: 214px;
          height: 50px;
          color: #fff;
          font-size: 23px;
          margin: 0 auto;
          background: #0d8bff;
          cursor: pointer;
          border: none;
          margin-top: 30px;
        }
        .agents-btn-gray {
          background: #666;
        }
        .hotpic {
          height: 75px;
          width: 75px;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .nobg {
        background: #fff;
      }
    }
  }

  .store-type {
    padding: 140px 0;

    h3 {
      @include h3;
      display: inline-block;
    }

    .storecon {
      height: 715px;
      border: 1px solid #000;
      margin: 150px auto 0 auto;
      display: flex;
      justify-content: center;

      .store-list {
        width: 350px;
      }

      align-items: center;
    }
  }

  .pro-adv {
    background: #f5f5f5;
    padding: 140px 0;
    width: 100%;

    h3 {
      @include h3;
      display: inline-block;
    }

    .procon {
      display: flex;
      justify-content: center;
      padding-top: 100px;
      text-align: center;

      .procon-list {
        width: 375px;
        align-items: center;
        border: 1px solid #000;
        margin: 0 18px;

        img {
          height: 152px;
          width: 152px;
        }

        h4 {
          font-size: 28px;
          color: #333;
          padding: 35px 0 15px 0;
        }

        p {
          color: #8f8f8f;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }

  .pro-func {
    padding: 140px 0 0 0;

    h3 {
      @include h3;
      display: inline-block;
    }

    .profuncon {
      padding-top: 120px;
      width: 1280px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .profuncon-list {
        box-shadow: 0 0 9px 3px #999;

        padding: 32px 24px;
        text-align: left;
        margin-bottom: 40px;
        height: 160px;
        margin-right: 30px;

        .profunc-pic {
          float: left;
          width: 70px;
          height: 70px;
          border: 1px solid red;
        }

        .profunc-txt {
          float: left;
          padding-left: 25px;
          width: 460px;

          h4 {
            color: #333;
            font-size: 28px;
            line-height: 36px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f5f5f6;
          }

          p {
            color: #8f8f8f;
            padding-top: 10px;
            font-size: 20px;
            line-height: 33px;
          }
        }
      }
    }
  }

  .mind-box {
    width: 100%;

    margin-top: 140px;
    padding-top: 50px;

    h3 {
      @include h3;
      display: inline-block;
    }

    h4 {
      font-size: 18px;
      color: #999;
      width: 480px;
      text-align: center;
      margin: 0 auto;
      line-height: 32px;
    }

    .mindcon {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      box-shadow: 0 0 9px 3px #999;
      justify-content: center;
      margin-top: 60px;

      .mindcon-txt {
        width: 625px;
        height: 373px;
        text-align: left;
        align-items: center;

        h5 {
          font-size: 30px;
          color: #333;
          line-height: 40px;
          padding: 70px 0 30px 100px;
        }

        ul {
          padding-left: 120px;
        }

        ul li {
          font-size: 20px;
          color: #888;
          line-height: 33px;
          text-align: left;
          list-style-type: disc;
        }
      }

      .mindcon-pic {
        width: 575px;
        height: 373px;
        align-items: center;
        background: red;
      }
    }
  }

  .platform-box {
    padding: 150px 0;

    h3 {
      @include h3;
      display: inline-block;
    }

    .platformcon {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 1200px;
      margin: 0 auto;
      text-align: left;
      padding-top: 110px;

      .platformcon-list {
        position: relative;
        height: 264px;
        align-items: center;

        width: 570px;
        border: 1px solid #000;
        background: red;
        margin: 13px 10px;

        h4 {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          line-height: 31px;
          padding-left: 10px;
          position: absolute;
          bottom: 55px;
        }

        p {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 45px;
          background: #000;
          opacity: 0.6;
          font-size: 18px;
          color: #ffffff;
          text-indent: 10px;
          line-height: 45px;
        }
      }
    }
  }
}
</style>
