<template>
  <div class="home">
    <div class="top">
      <div class="logo">
        <img src="../assets/logo-a.png" />
      </div>
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="#1683c8"
          text-color="#ffffff"
          active-text-color="#ffd04b"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">企业责任</el-menu-item>
          <el-submenu index="3">
            <template slot="title">业务板块</template>
            <el-menu-item index="3-1">业务板块</el-menu-item>
            <el-menu-item index="3-2">科技创新</el-menu-item>
            <el-menu-item index="3-3">产品服务</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">科技创新</el-menu-item>
          <el-submenu index="5">
            <template slot="title">产品服务</template>
            <el-menu-item index="5-1">业务板块</el-menu-item>
            <el-menu-item index="5-2">科技创新</el-menu-item>
            <el-menu-item index="5-3">产品服务</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="6">在线服务</el-menu-item> -->
          <el-submenu index="7">
            <template slot="title">关于我们</template>
            <el-menu-item index="7-1">业务板块</el-menu-item>
            <el-menu-item index="7-2">科技创新</el-menu-item>
            <el-menu-item index="7-3">产品服务</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>

    <div class="banner" ref="banner">
      <img src="../assets/banner1.png" alt />
    </div>

    <!--关于我们-->
    <div class="about">
      <div class="about-left" data-aos="fade-right" data-aos-once="true">
        <div class="about-tit">
          <img class="about-tit-img" src="../assets/3.png" alt />
        </div>
        <span class="txt">纪元链科技成立于2017年，注册资本5000万元。</span>
        <span class="txt">纪元链科技自成立以来，始终专注区块链领域，旨在把区块链作为核心技术自主创新的重要突破口，用区块链技术赋能实体企业，促进产业创新发展。</span>
        <span class="txt">纪元链科技通过与大连理工大学、同济大学等高校进行产学研合作，积淀了较多的区块链技术和人才。</span>
      </div>
      <div class="about-right" data-aos="fade-left" data-aos-once="true">
        <div class="bg">
          <img src="../assets/about-bg.png" />
        </div>
        <div class="box"></div>
        <div class="video-box">
          <video-player
            class="video-player-box"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
          ></video-player>
        </div>
      </div>
    </div>

    <!--业务模块-->
    <div class="business">
      <div class="business-tit">
        <img src="../assets/6.png" />
      </div>
      <div class="business-swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="item-box">
            <div class="item-box">
              <!-- style="background: #ffd452" -->
              <div class="item-icon">
                <i class="iconfont iconicon"></i>
              </div>
              <div class="item-contain">
                <div class="item-tit">CNFS平台搭建0</div>
                <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-box">
              <!-- style="background: #5cb2fe" -->
              <div class="item-icon">
                <i class="iconfont iconicony"></i>
              </div>
              <div class="item-contain">
                <div class="item-tit">CNFS平台搭建1</div>
                <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-box">
              <!-- style="background: #64cb71" -->
              <div class="item-icon">
                <i class="iconfont iconicon2-01"></i>
              </div>
              <div class="item-contain">
                <div class="item-tit">CNFS平台搭建2</div>
                <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item-box">
              <!-- style="background: #b79af5" -->
              <div class="item-icon">
                <i class="iconfont iconicon3"></i>
              </div>
              <div class="item-contain">
                <div class="item-tit">CNFS平台搭建3</div>
                <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="item-box">
            <div class="item-box">
              <!-- style="background: #ff6775" -->
              <div class="item-icon">
                <i class="iconfont iconshiyanshixuanzhong2"></i>
              </div>
              <div class="item-contain">
                <div class="item-tit">CNFS平台搭建4</div>
                <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>

    <!--实验室-->
    <div class="laboratory">
      <div class="laboratory-tit-img">
        <img src="../assets/9.png" alt />
      </div>
      <div class="lab-box">
        <div class="lab-box-item" @mouseenter="enter(0)" @mouseleave="leave" @click="go(0)">
          <div class="lab-box-item-card" :class="bgArr[0]===1?'active':''">
            <img src="../assets/icon1.svg" />
            <h2>CNFS协议实险室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
        <div class="lab-box-item" @mouseenter="enter(1)" @mouseleave="leave" @click="go(1)">
          <div class="lab-box-item-card" :class="bgArr[1]===1?'active':''">
            <img src="../assets/icon2.svg" />
            <h2>车联网区块链实验室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
        <div class="lab-box-item" @mouseenter="enter(2)" @mouseleave="leave" @click="go(2)">
          <div class="lab-box-item-card" :class="bgArr[2]===1?'active':''">
            <img src="../assets/icon3.svg" />
            <h2>能源区块链实验室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
        <div class="lab-box-item" @mouseenter="enter(3)" @mouseleave="leave" @click="go(3)">
          <div class="lab-box-item-card" :class="bgArr[3]===1?'active':''">
            <img src="../assets/icon4.svg" />
            <h2>分布式计算实验室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
        <div class="lab-box-item" @mouseenter="enter(4)" @mouseleave="leave" @click="go(4)">
          <div class="lab-box-item-card" :class="bgArr[4]===1?'active':''">
            <img src="../assets/icon5.svg" />
            <h2>健康医疗区块链实验室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
        <div class="lab-box-item" @mouseenter="enter(5)" @mouseleave="leave" @click="go(5)">
          <div class="lab-box-item-card" :class="bgArr[5]===1?'active':''">
            <img src="../assets/icon6.svg" />
            <h2>BIM区块链实验室</h2>
            <h4>闵行区梅陇路369号</h4>
          </div>
        </div>
      </div>
    </div>

    <!--cnfs-->
    <div class="cnfs">
      <div class="cnfs-main">
        <div class="cnfs-left" data-aos="fade-right" data-aos-once="true">
          <img src="../assets/cnfs.png" alt />
        </div>
        <div class="cnfs-right" data-aos="fade-left" data-aos-once="true">
          <img src="../assets/hexin.png" alt />
          <div
            class="cnfs-txt"
          >2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。</div>
          <div class="cnfs-txt">CNFS是目前我国唯一一个内容寻址的互联网底层传输协议，属全国首创。目标是逐步取代美国的http，属国家战略。</div>
        </div>
      </div>
    </div>

    <div class="bottom-box">
      <!--优势-->
      <div class="superiority">
        <div class="superiority-tit-img">
          <img src="../assets/7.png" alt />
        </div>
        <swiper-super />
      </div>

      <!--成员-->
      <div class="member">
        <div class="member-tit-img">
          <img src="../assets/1.png" alt />
        </div>
        <div class="menber-box">
          <div class="menber-item">
            <img src="../assets/r4.png" alt />
            <h1>陈志奎</h1>
            <div class="info">大连理工大学</div>
            <div class="info">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
            <img class="img-bottom" src="../assets/r2.png" alt />
            <h1>陈志奎</h1>
            <div class="info">大连理工大学</div>
            <div class="info">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
          </div>
          <div class="menber-item center">
            <img src="../assets/r1.png" alt />
            <h1>陈志奎</h1>
            <div class="info">大连理工大学</div>
            <div class="info">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
            <div
              class="info"
            >曾在德国斯图加特大学从事网络与数据计算方面的科学研究。回国后参与并主持多个国家重点研发项目。发表学术论文150余篇；SCI检索期刊100余篇；申请发明专利20项；已经授权13项；获得软件著作权4项；教材3部。教育部颁发科技进步奖一等奖1项；地理信息协会科技进步一等奖1项；二等奖1项。</div>
            <div class="info ab">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
          </div>
          <div class="menber-item">
            <img src="../assets/r5.png" alt />
            <h1>陈志奎</h1>
            <div class="info">大连理工大学</div>
            <div class="info">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
            <img class="img-bottom" src="../assets/r3.png" alt />
            <h1>陈志奎</h1>
            <div class="info">大连理工大学</div>
            <div class="info">现任大连理工大学教授，博士生导师，大工大数据研究所所长。</div>
          </div>
        </div>
      </div>
    </div>

    <!--文化-->
    <div class="civilization">
      <img src="../assets/gongsi.png" alt />
      <div class="main">
        <div class="business-swiper">
          <swiper ref="mySwiper" :options="swiperCivilization">
            <swiper-slide class="item-box">
              <div class="item-box">
                <!-- style="background: #ffd452" -->
                <div class="item-icon">
                  <i class="iconfont iconicon"></i>
                </div>
                <div class="item-contain">
                  <div class="item-tit">定位</div>
                  <div class="item-txt">专注区块链的高新企业立足中国，放眼世界</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <!-- style="background: #5cb2fe" -->
                <div class="item-icon">
                  <i class="iconfont iconicony"></i>
                </div>
                <div class="item-contain">
                  <div class="item-tit">方向</div>
                  <div class="item-txt">紧跟国家战略方向，深耕区块链与新基建</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <!-- style="background: #64cb71" -->
                <div class="item-icon">
                  <i class="iconfont iconicon2-01"></i>
                </div>
                <div class="item-contain">
                  <div class="item-tit">目标</div>
                  <div class="item-txt">区块链领域的BAT</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item-box">
                <!-- style="background: #b79af5" -->
                <div class="item-icon">
                  <i class="iconfont iconicon3"></i>
                </div>
                <div class="item-contain">
                  <div class="item-tit">价值观</div>
                  <div class="item-txt">方正、聚合、共赢</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="item-box">
              <div class="item-box">
                <!-- style="background: #ff6775" -->
                <div class="item-icon">
                  <i class="iconfont iconshiyanshixuanzhong2"></i>
                </div>
                <div class="item-contain">
                  <div class="item-tit">方正、聚合、共赢</div>
                  <div class="item-txt">CNFS平台搭建CNFS平台搭建CNFS平台搭建CNFS平台搭建</div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>

    <!-- <el-button>默认按钮</el-button> -->
    <footer-box></footer-box>
  </div>
</template>

<script>
// require styles
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import img from "../assets/video-img.png";
import footerBox from "@/components/footer";
import swiperSuper from "@/components/swiper";
export default {
  data() {
    return {
      bgArr: [0, 1, 0, 1, 0, 1],
      playerOptions: {
        // videojs options
        width: "440",
        height: "530",
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
          },
        ],
        poster: img,
      },
      width: window.innerWidth,
      swiperCivilization: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 4,
        spaceBetween: 30,
      },
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        // autoplay:true,

        //自动轮播
        // autoplay: {
        //   delay: 2000,
        //   //当用户滑动图片后继续自动轮播
        //   disableOnInteraction: true,
        // },
        //开启循环模式
        // loop: true,
        // Some Swiper option/callback...
      },
      activeIndex: "1",
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  created() {},
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    this.$refs.banner.style.height = window.innerHeight - 60 + "px";
  },
  name: "Home",
  components: { videoPlayer, footerBox, swiperSuper },
  methods: {
    go(i) {
      console.log("go", i);
    },
    enter(i) {
      const arr = [0, 0, 0, 0, 0, 0];
      arr[i] = 1;
      console.log("arr: ", arr);
      this.bgArr = arr;
    },
    leave() {
      this.bgArr = [0, 1, 0, 1, 0, 1];
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
  },
};
</script>
<style lang="scss">
@media (max-width: 1300px) and (min-width: 700px) {
  .about-left .txt {
    font-size: 16px !important;
  }
  .about-tit-img {
    width: 130px;
  }
  .laboratory-tit-img,
  .superiority-tit-img {
    margin-top: 40px;
    width: 150px;
    img {
      width: 100%;
    }
  }
  .member-tit-img {
    width: 220px;
    margin-top: 60px;
    img {
      width: 100%;
    }
  }
  .business-tit {
    width: 300px;
    img {
      width: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
.lab-box-item-card {
  background: rgba(13, 13, 13, 0.3);
}
.lab-box-item-card.active {
  background: rgba(0, 128, 208, 0.8);
}

.home {
  .top {
    height: 60px;
    background: #1683c8;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 200px;
      height: 60px;
      display: flex;
      align-items: center;
      img {
        height: 36px;
      }
    }
    .nav {
      width: 800px;
      height: 60px;
      ::v-deep .el-menu.el-menu--horizontal {
        border: none;
      }
    }
  }
  .banner {
    background: #1683c8;
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .about {
    width: 1000px;
    margin: 20px auto 60px auto;
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .about-left {
      width: 480px;
      font-size: 20px;
      background: #fff;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .about-tit {
        margin-bottom: 40px;
      }
      .txt {
        font-size: 20px;
        color: #8f8f8f;
        text-align: left;
        display: block;
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
    .about-right {
      width: 480px;
      height: 570px;
      position: relative;
      .bg {
        width: 100px;
        position: absolute;
        right: -60px;
        top: -60px;
      }
      .box {
        width: 292px;
        height: 348px;
        background: #1683c8;
        left: 0;
        top: 0;
        z-index: 1;
        position: absolute;
      }
      .video-box {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 2;
        ::v-deep .video-js .vjs-big-play-button {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        ::v-deep .video-js .vjs-play-control {
          outline: none;
        }
      }
    }
  }
  .business {
    background: #f6faff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    .business-swiper {
      padding-top: 20px;
      width: 70%;
      .swiper-container {
        width: 100%;
        display: block;
        .swiper-wrapper {
          width: 100%;
          display: block;
          .swiper-slide {
            display: flex;
            justify-content: center;
            .item-box {
              width: 200px;
              height: 220px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              .iconfont {
                font-size: 40px;
                color: #1683c8;
              }
              &:hover {
                .item-icon {
                  background: #1683c8;
                }
                .iconfont {
                  font-size: 40px;
                  color: #fff;
                }
              }
              .item-icon {
                height: 100px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                background: #fff;
              }
              .item-contain {
                height: 100px;
                width: 100%;
                .item-tit {
                  font-size: 16px;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                }
                .item-txt {
                  font-size: 14px;
                  height: 24px;
                  line-height: 24px;
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
  }
  .laboratory {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    .lab-box {
      width: 780px;
      height: 440px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      background-image: url("../assets/labbg.png");
      background-repeat: no-repeat;
      background-size: 100%;
      &:not(:last-child) {
        margin-top: 40px;
      }
      .lab-box-item {
        width: 260px;
        height: 220px;
        position: relative;
        .lab-box-item-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 260px;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 54px;
            height: 54px;
            margin-bottom: 16px;
          }
          h2 {
            font-size: 18px;
            color: #fff;
            margin-bottom: 16px;
          }
          h4 {
            font-size: 12px;
            color: #fff;
          }
        }
      }
    }
  }
  .cnfs {
    width: 100%;
    background: #0177c2;
    display: flex;
    justify-content: center;
    .cnfs-main {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position-y: center;
      padding: 40px 0;
      position: relative;
      .cnfs-left {
        // position: absolute;
        width: 400px;
        img {
          width: 100%;
        }
      }
      .cnfs-right {
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        img {
          width: 300px;
          margin-bottom: 30px;
        }
        .cnfs-txt:not(:last-child) {
          margin-bottom: 30px;
        }
        .cnfs-txt {
          font-size: 16px;
          color: #fff;
          text-align: left;
          line-height: 26px;
        }
      }
    }
  }
  .bottom-box {
    background-image: url("../assets/bottom-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 260px;
    .superiority {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .member {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .menber-box {
        margin-top: 40px;
        margin-bottom: 40px;
        width: 780px;
        display: flex;
        flex-direction: row;
        .menber-item {
          flex: 1;
          flex-direction: column;
          align-items: center;
          box-sizing: content-box;
          padding: 30px 20px 20px 20px;
          &.center {
            height: 470px;
            position: relative;
          }
          img {
            width: 80px;
            height: 80px;
            border-radius: 40px;
            margin-bottom: 30px;
          }
          .img-bottom {
            margin-top: 60px;
          }
          h1 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .info {
            font-size: 14px;
            margin-bottom: 20px;
            line-height: 24px;
            &.ab {
              position: absolute;
              bottom: -76px;
            }
          }
          &.center {
            box-shadow: 0px 0px 17px 17px #f0f7fc;
            border-radius: 14px;
          }
        }
      }
    }
  }
  .civilization {
    padding: 40px 0;
    box-sizing: border-box;
    height: 600px;
    width: 100%;
    background-image: url("../assets/education-bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 200px;
    }
    .main {
      margin: 40px 0;
      width: 900px;
      height: 400px;
      background: #ccc;
    }
  }
}
</style>
