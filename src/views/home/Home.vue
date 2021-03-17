<template>
  <div class="home">
    <!--头部-->
    <div class="topcontent">
      <div class="top-main" ref="topMain">
        <h2 class="leftIn">CNFS分布式存储平台</h2>
        <h4 class="leftIn delay200">安全、隐私、快捷、价廉</h4>
        <div class="btn leftIn delay400">
          <j-button @click.native="notify">
            <i class="iconfont iconfenzu151 button-icon"></i>
            平台介绍
          </j-button>
          <j-button @click.native="notify">
            <!-- <i class="iconfont iconplay_icon button-icon"></i> -->
            白皮书
          </j-button>
        </div>
      </div>

      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <!--广告位-->
    <div class="ad-box">
      <div class="ad-main">
        <div class="btn pointer" @click="showLjxd">立即下单</div>
        <div class="popup" v-if="isShowLjxd">
          <img src="../../assets/home/ljxd.png" alt="">
        </div>
      </div>
    </div>
    <!--平台介绍部分-->
    <div class="introcontent">
      <div class="intro_first">
        <img
          src="../../assets/home/img-1.png"
          data-aos="fade-right"
          data-aos-once="true"
        />
        <div class="intro_txt" data-aos="fade-left" data-aos-once="true">
          <h3>CNFS平台介绍与定位</h3>
          <span
            >2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。</span
          >
        </div>
      </div>
      <div class="intro_second">
        <div class="intro_txt" data-aos="fade-right" data-aos-once="true">
          <h3>CNFS平台优势</h3>
          <span
            >2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。</span
          >
        </div>
        <img
          data-aos="fade-left"
          data-aos-once="true"
          src="../../assets/home/img-2.png"
        />
      </div>
    </div>
    <!--公司发展历程-->
    <div class="process-box">
      <h3>公司发展历程</h3>
      <swiper class="process__swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="processcon">
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2019.3月</div>
              <h4>CNFS技术研发<br />平台方案设计</h4>
            </div>
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2020.6月</div>
              <h4>科研成果落地，项目公司<br />组建，总部办公场地落实</h4>
            </div>
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2020.7月</div>
              <h4>平台各项筹备<br />商业规则细化</h4>
            </div>
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2020.9月</div>
              <h4>
                合作伙伴甄选；项目官网上线<br />小存储节点搭建；小范围技术测试
              </h4>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="processcon last-processcon">
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2020.11月</div>
              <h4>剪彩 扩大存储节点规模<br />扩大开发者生态</h4>
            </div>
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2021.7月</div>
              <h4>测试网上线<br />开始大规模公测</h4>
            </div>
            <div class="processcon-list topIn">
              <div class="processcon-list-pic">2021.10月</div>
              <h4>主网上线<br />开始平台运营</h4>
            </div>
            <div class="processcon-list topIn"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!--重要新闻-->
    <div class="news-box" ref="news" v-if="newsData">
      <h3>重要新闻</h3>
      <div class="newscon">
        <div
          class="newscon-list"
          v-for="(item,i) in newsData"
          data-aos="fade-down-right"
          data-aos-once="true"
          @click="go('/news', item.id)"
          :key="i"
        >
          <dl>
            <dt :style="`background-image: url(${item.img})`">
              <span class="shade" />
            </dt>
            <dd>
              <h4>{{ item.title }}</h4>
              <time>{{ item.pubDate }}</time>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <!--首页搜索-->
    <search-box />
    <!--合作伙伴-->
    <box classname="news pc mt-50" title="合作伙伴">
      <clients />
    </box>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { arrTrans } from '@/utils/validate'
import jButton from "../../components/button";
import searchBox from "./components/searchBox";
import clients from './components/clients'
import box from "@/components/box"
import { getNewsList } from '@/api/page'

export default {
  components: {
    jButton, 
    searchBox,
    clients,
    box,
  },
  data() {
    return {
      isShowProcesscon: false,
      isShowLjxd: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
      },
      newsData: null,
    };
  },
  created() {
    this.getNewsData();
  },
  computed: {
    ...mapState({
      device: (state) => state.user.device,
    }),
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
        this.$refs.news.scrollIntoView({
          behavior: "smooth",  // 平滑过渡
        });
      })
    }
  },
  methods: {
    getNewsData() {
      let newsData = this.$store.state.newsData;

      if (!newsData) {
        getNewsList({
          sortType: "weight",
          pageNo: 1,
          pageSize: 20,
        }).then((res) => {
          if(res.code == 200 && res.data) {
            let data = res.data.filter(item => item.type == 2 && item.isShow == 1)
            const list = arrTrans(3, data)
            this.newsData = list[0]
            this.$store.commit('SAVE_NEWSLIST', list[0])
          }
        });
      } else {
        this.newsData = this.$store.state.newsData;
      }
    },
    showLjxd() {
      if(!this.isShowLjxd) {
        this.isShowLjxd = true;
      } else {
        this.isShowLjxd = false;
      }
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 1200 && !this.isShowProcesscon) {
        this.isShowProcesscon = true;
      }
    },
    go(path, id) {
      this.$router.push({ path, query: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.logo_wrap .line_odd {
  width: 2860px;
  //-webkit-animation: scrollToRight 36s linear infinite;
  animation: scrollToRight 16s linear infinite;
}

.logo_wrap .line_even {
  width: 2860px;
  //-webkit-animation: scrollToRight-data-v-6a32e916 30s linear infinite;
  animation: scrollToRight 10s linear infinite;
}

@keyframes scrollToRight {
  from {
    transform: translate3d(-50%, 0, 0);
  }

  to {
    transform: translate3d(0%, 0, 0);
  }
}

#particles-js {
  width: 100%;
}
.show-processcon .topIn {
  animation: topIn 1s ease;
  &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.3s;
  }
}

@keyframes topIn {
  from {
    transform: translateY(-50px);
  }

  to {
    transform: translateY(0px);
  }
}

.show .leftIn,
.show-processcon .leftIn {
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

.delay400 {
  animation-delay: 400ms;
  animation-fill-mode: backwards !important;
}

.delay600 {
  animation-delay: 400ms;
  animation-fill-mode: backwards !important;
}

@mixin h3 {
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 30px;
  padding-left: 20px;
  margin-bottom: 20px;
  background-image: url("../../assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .topcontent {
    width: 100%;
    height: 600px;
    background-image: url("../../assets/home/img_shouping.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    .top-main {
      position: absolute;
      top: 180px;
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
        margin-bottom: 30px;
        font-weight: lighter;
        font-weight: 500;
      }
      h4 {
        font-size: 32px;
        font-weight: lighter;
      }
      .btn {
        width: 560px;
        height: 60px;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .iconfenzu151 {
          padding-right: 10px;
          font-size: 24px;
          display: block;
        }
      }
    }
  }
  .banner-ad {
    padding: 70px 0;
    .banner_con {
      width: 1200px;
      height: 394px;
      margin: 0 auto;
      background: red;
    }
  }
  .ad-box {
    height: 70px;
    width: 100%;
    background-image: url("../../assets/home/bar-1.png");
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    .ad-main {
      width: $pageWidth;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      .popup {
        position: absolute;
        top: -65px;
        right: 40px;
      }
      .btn {
        width: 200px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        background: #0d8bff;
        margin-right: 30px;
      }
    }
  }
  .introcontent {
    padding: 120px 0;
    clear: both;
    zoom: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .intro_first {
      width: 1000px;
      clear: both;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 443px;
        height: 425px;
      }
      .intro_txt {
        width: 444px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #999;
        font-size: 18px;
        text-align: left;
        line-height: 32px;
        h3 {
          @include h3;
        }
      }
    }
    .intro_second {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 100px;
      img {
        width: 447px;
        height: 365px;
      }
      .intro_txt {
        width: 444px;
        color: #999;
        font-size: 18px;
        text-align: left;
        line-height: 32px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          @include h3;
        }
      }
    }
  }

  .process-box {
    width: 100%;
    height: 510px;
    background-image: url("../../assets/home/img_fazhan.png");
    background-position: center;
    h3 {
      @include h3;
      display: inline-block;
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }

  .process__swiper {
    width: 1200px;
    height: 300px;
    .swiper-pagination {
      ::v-deep .swiper-pagination-bullet {
        width: 40px;
        height: 3px;
        border-radius: 1.5px;
      }
    }
    .last-processcon::after {
      top: 42px !important;
      left: 400px !important;
      width: 660px !important;
    }
    .processcon {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      &.show-processcon {
        visibility: visible;
      }
      &::after {
        content: "";
        width: 800px;
        height: 0;
        border-bottom: 1px solid #fff;
        position: absolute;
        top: 42px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
      .processcon-list {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;
        .processcon-list-pic {
          width: 158px;
          height: 84px;
          margin: 0 auto;
          background-image: url("../../assets/home/bg-1.png");
          background-size: 158px 84px;
          color: #0d8bff;
          font-size: 20px;
          font-weight: 800;
          text-align: center;
          line-height: 84px;
          transition: all 0.3s;
          &:hover {
            background-image: url("../../assets/home/bgOn-1.png");
            color: #fff;
          }
        }
        h4 {
          width: 300px;
          font-size: 20px;
          color: #666;
          line-height: 34px;
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }

  .news-box {
    padding-top: 100px;
    padding-bottom: 100px;
    h3 {
      @include h3;
      display: inline-block;
      margin-top: 0;
      margin-bottom: 60px;
    }
    h4 {
      padding-bottom: 115px;
    }
    .newscon {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      dl {
        width: 380px;
        margin: 0 10px;
        box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
        dt {
          height: 260px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          position: relative;
          &:hover {
            border: solid 5px #0666c0;
            .shade {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, .4);
              display: block;
            }
          }
        }
        dd {
          text-align: left;
          padding: 10px;
          h4 {
            font-size: 16px;
            color: #999;
            height: 56px;
            line-height: 26px;
            padding: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-clamp: 2; // 行数
            -webkit-box-orient: vertical;
          }
          time {
            font-size: 14px;
            color: #B9B9BB;
            padding-top: 15px;
          }
        }
      }
    }
  }

  .partner {
    width: $pageWidth;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 120px;
    h3 {
      @include h3;
      display: inline-block;
      margin: 50px 0 50px 0;
    }
    .partner-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .partner-item {
        width: 280px;
        height: 118px;
        margin-bottom: 26px;
        background: #ffffff;
        box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
        border-radius: 9px;
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 204px;
          height: 65px;
        }
        &:not(:nth-child(4n)) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
