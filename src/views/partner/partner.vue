<template>
  <div class="home">
    <!--头部-->
    <div class="topcontent">
      <div class="top-main" ref="topMain">
        <h2 class="leftIn">合作共赢，共建科技新生活</h2>
        <h4 class="leftIn delay200">机遇、成长、未来、发展</h4>
      </div>
    </div>
    <div class="note-box">
      <div class="marquee-box">
        <marquee class="note-txt" width="400" align="middle">
          <span
            class="nota-span"
            v-for="item in marqueeData"
            :key="item.object_id"
            >{{ item.title }}</span>
        </marquee>
      </div>
    </div>
    <!--合作理念-->
    <div class="mind-box">
      <box title="合作理念" classname="pc">
        <h4 class="mt-42">主要从平台和市场两个层面对合作关系进行多维度的建设达到优化机制、合作共赢的效果</h4>
        <div
          class="mindcon"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="mindcon-txt">
            <ul>
              <li style="margin-bottom: 40px">
                平台层面，主要做四件事<br />公共关系、技术开发、平台规则、服务运营。
              </li>

              <li>
                市场层面，采取开放合作共赢的模式<br />也就是城市合伙人机制。
              </li>
            </ul>
          </div>
          <div class="mindcon-pic"><img src="@/assets/partner/img1.jpg" /></div>
        </div>
      </box>
    </div>


      <!--城市合伙人权益-->
      <div class="mind-box">
        <box title="城市合伙人权益" classname="pc">
          <h4 class="mt-42">不断优化平台机制，让项目最大限度凸显价值，为合作伙伴创造更多收益和项目建设的机会</h4>
          <div
            class="mindcon"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div class="mindcon-pic">
              <img src="@/assets/partner/img2.png" />
            </div>
            <div class="mindcon-txt">
              <ul>
                <li>分享平台十六大利益；</li>
                <li>年收益可望上亿；</li>
                <li>业绩优秀的城市合伙人将与项目方携手上市；</li>
              </ul>
            </div>
          </div>
        </box>
      </div>

      <!--合作条件-->
      <div class="mind-box" style="padding-bottom: 150px">
        <box title="合作条件" classname="pc">
          <h4 class="mt-42">平台会不断优化城市合伙人机制，让更多具有相同价值观的优质企业成为合作伙伴共同发展</h4>
          <div
            class="mindcon"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div class="mindcon-txt">
              <ul>
                <li>当地合法注册，符合经营范围的企业；</li>

                <li>价值认同、诚信靠谱、能力上佳 执行力强；</li>
                <li>每地级市仅限一家；</li>
              </ul>
            </div>

            <div class="mindcon-pic">
              <img src="@/assets/partner/img3.jpg" />
            </div>
          </div>
        </box>
      </div>

    <!--城市合伙人设置-->
    <div class="set-box" ref="partner">
      <box title="城市合伙人设置" classname="pc">
        <partner-com classname="partner__pc" :list="provincesArr" />
      </box>
    </div>

    <!--平台支持-->
    <div class="platform-box">
      <box title="平台支持" classname="pc">
          <div
            class="platformcon"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div class="platformcon-list">
              <img src="@/assets/partner/img01.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img02.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img03.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img04.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img05.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img06.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img07.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
            <div class="platformcon-list">
              <img src="@/assets/partner/img08.png" />
              <!--  <h4>品牌支持1</h4>
                    <p>品牌传翻、定位、品牌推广宣传活动</p>-->
            </div>
          </div>
      </box>
    </div>
  </div>
  
</template>

<script>
import { getlistbypage, getprovincelist } from "@/api/page"
import { arrTrans } from '@/utils/validate'
import box from "@/components/box"
import partnerCom from './components/partnerCom'

export default {
  components: {
    box,
    partnerCom,
  },
  data() {
    return {
      marqueeData: [], // 跑马灯
      provincesArr: [],
    };
  },
  created() {
    this.reqMarqueeData();
    this.reqProvincelist();
  },
  mounted() {
    setTimeout(() => {
      const topMain = this.$refs.topMain;
      topMain.classList.add("show");
    }, 200);

    window.addEventListener("scroll", this.handleScroll);

    // 新闻详情返回首页新闻位置
    const id = this.$route.query.id
    if (id) {
      this.$nextTick(() => {
        this.$refs.partner.scrollIntoView({
          behavior: "smooth",  // 平滑过渡
        });
      })
    }
  },
  methods: {
    reqProvincelist() {
      const partnerData = this.$store.state.partnerData
      if (partnerData.length === 0) {
        getprovincelist({
          pageNo: 1,
          pageSize: 500,
        }).then((res) => {
          if(res.code == 200 && res.data) {
            const data = arrTrans(8, res.data);
            this.provincesArr = data;
            this.$store.commit('SAVE_PARTNERLIST', data)
          }
        });
      } else {
        this.provincesArr = partnerData;
      }
    },
    reqMarqueeData() {
      const data = this.$store.state.marquee
      let filterData;

      
      if(!data) {
        getlistbypage({
          sortType: "weight",
          pageNo: 1,
          pageSize: 100,
        }).then((res) => {
          if(res.code == 200 && res.data) {
            filterData = res.data.filter(item => item.isShow == 1);
            this.$store.commit('SAVE_MARQUEE', filterData)
            this.marqueeData = filterData
          }
        });
      } else {
        this.marqueeData = data
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.show .leftIn {
  animation-name: leftIn;
  animation-duration: 1s;
}

@keyframes leftIn {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

.delay200 {
  animation-delay: 200ms;
  animation-fill-mode: backwards !important;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .topcontent {
    width: 100%;
    height: 700px;
    background-image: url("~@/assets/partner/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    .top-main {
      position: absolute;
      top: 270px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      visibility: hidden;
      &.show {
        visibility: visible;
      }
      h2 {
        font-size: 64px;
        margin-bottom: 50px;
        font-weight: 500;
      }
      h4 {
        font-size: 32px;
        font-weight: lighter;
      }
      .note {
        position: absolute;
        // background: red;
        // color: #000;
        height: 105px;
        width: 100%;
        top: 700px;
        // font-size: 28px;
        // line-height: 105px;
        // text-align: left;
        background-image: url("~@/assets/partner/note-bg.png");
      }
    }
  }

  .note-box {
    height: 105px;
    width: 100%;
    background: top center no-repeat url("~@/assets/partner/note-bg.png");
    display: flex;
    justify-content: center;
    .marquee-box {
      padding-left: 70px;
      box-sizing: border-box;
      width: 1200px;
      background-image: url("~@/assets/partner/tongzhi-3.png");
      background-size: 56px 44px;
      background-repeat: no-repeat;
      background-position: 0 center;
      .note-txt {
        color: #fff;
        font-size: 32px;
        line-height: 105px;
        width: 100%;
        span.nota-span {
          display: inline-block;
          padding-right: 40px;
          color: #fff;
        }
      }
    }
  }

  .store-type {
    padding: 140px 0;
    h3 {
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
    padding-bottom: 50px;

    h3 {
      display: inline-block;
    }
    h4 {
      font-size: 18px;
      color: #999;
      width: 480px;
      text-align: center;
      line-height: 32px;
    }
    .mindcon {
      width: 1200px;
      display: flex;
      box-shadow: 0 0 9px 3px #999;
      justify-content: center;
      margin-top: 60px;
      .mindcon-txt {
        width: 625px;
        height: 373px;
        text-align: left;
        display: flex;
        align-items: center;
        ul {
          padding-left: 120px;
          li {
            font-size: 20px;
            color: #888;
            line-height: 33px;
            text-align: left;
            list-style-type: disc;
          }
        }
      }
      .mindcon-pic {
        width: 575px;
        height: 373px;
        align-items: center;
      }
    }
  }

  .set-box {
    background: #f5f5f6;
    width: 100%;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      display: inline;
    }
    .nobg {
      background: #fff;
    }
  }

  .partner__pc {
    width: 1170px;
    height: 1000px;
  }

  .platform-box {
    padding: 80px 0 120px 0;
    h3 {
      display: inline-block;
    }
    .platformcon {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 1200px;
      margin: 0 auto;
      text-align: left;
      padding-top: 40px;
      .platformcon-list {
        position: relative;
        height: 264px;
        align-items: center;
        width: 570px;
        margin: 13px 10px;
        transition: all 0.3s ease;
        &:hover {
          transform: translate3d(0, -3px, 0);
        }
        img {
          height: 260px;
          width: 570px;
        }

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
        .pic1 {
          background-image: url("~@/assets/partner/img01.png");
        }
      }
    }
  }
}
</style>
