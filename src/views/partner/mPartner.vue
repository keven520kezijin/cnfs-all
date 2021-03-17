<template>
  <div class="page">
    <m-banner :bgImg="bgImg" class="banner"></m-banner>
    <div class="imgbox">
      <img class="ad-img" src="@/assets/home/ad.png" alt="" />
    </div>
    <box classname="mobile mt-50" title="合作理念">
      <pre class="box-txt">
        平台层面，主要做四件事
        公共关系、技术开发、平台规则、服务运营。
        市场层面，采取开放合作共赢的模式
        也就是城市合伙人机制。
      </pre>
      <div class="img">
        <img src="@/assets/home/box1.png" alt="">
      </div>
    </box>
    <box classname="mobile mt-50" title="城市合伙人权益">
      <pre class="box-txt">
        分享平台十六大利益；
        年收益可望上亿；
        业绩优秀的城市合伙人将与项目方携手上市；
      </pre>
      <div class="img">
        <img src="@/assets/home/box2.png" alt="">
      </div>
    </box>
    <box classname="mobile mt-50" title="合作条件">
      <pre class="box-txt">
        当地合法注册，符合经营范围的企业；
        价值认同、诚信靠谱、能力上佳 执行力强；
        每地级市仅限一家；
      </pre>
      <div class="img">
        <img src="@/assets/home/box3.png" alt="">
      </div>
    </box>
    <div class="partner-list mt-50">
      <box classname="mobile mt-50" title="城市合伙人设置">
        <partner-com classname="partner__mobile" :list="provincesArr" />
      </box>
    </div>
    <box classname="mobile mt-50" title="平台支持">
      <div class="mt-22">
        <sustain :arrImg="arrImg" />
      </div>
    </box>
  </div>
</template>

<script>
import mBanner from "@/components/mBanner";
import box from "@/components/box";
import sustain from "./components/sustain"; // partnerCom
import partnerCom from "./components/partnerCom"; // partnerCom
import { getprovincelist } from "@/api/page";
import { arrTrans } from '@/utils/validate'

export default {
  components: {
    mBanner,
    box,
    sustain,
    partnerCom,
  },
  data() {
    return {
      provincesArr: [],
      bgImg: require("@/assets/home/1.png"),
      box1Src: require("@/assets/home/box1.png"),
      arrImg: [
        require("@/assets/home/sustain-1.png"),
        require("@/assets/home/sustain-2.png"),
        require("@/assets/home/sustain-3.png"),
        require("@/assets/home/sustain-4.png"),
        require("@/assets/home/sustain-5.png"),
        require("@/assets/home/sustain-6.png"),
        require("@/assets/home/sustain-7.png"),
        require("@/assets/home/sustain-8.png"),
        require("@/assets/home/sustain-9.png"),
      ],
    };
  },
  created() {
    this.reqProvincelist();
  },
  methods: {
    reqProvincelist() {
      getprovincelist({
        sortType: "weight",
        pageNo: 1,
        pageSize: 500,
      }).then((res) => {
        if(res.code == 200 && res.data) this.provincesArr = arrTrans(6, res.data);
      });
    },
  }
};
</script>

<style scoped lang="scss">
.page {
  padding-bottom: 70px;
  position: relative;
  .banner {
    z-index: 10;
  }
}
.imgbox {
  width: 100%;
  position: relative;
  top: -1px;
  img {
    display: block;
  }
  .ad-img {
    width: 100%;
    border: 0;
  }
}

.box {
  .box-txt {
    // width: 60%;
    font-size: 14px;
    line-height: 30px;
    color: #999999;
    margin-top: 16px;
  }
  .img {
    padding: 0 20px;
    img {
      width: 100%;
      display: block;
    }
  }
}
.partner-list {
  background: #F5F5F6;
  padding: 10px 0 60px;
}
.footer-box {
  margin-top: 30px;
}
</style>
