<template>
  <div class="home">
    <!--头部-->
    <div class="topcontent">
      <div class="top-main" ref="topMain">
        <h2 class="leftIn">CNFS分布式存储平台</h2>
        <h4 class="leftIn delay200">安全、隐私、快捷、价廉</h4>
        <!-- <div class="btn leftIn delay400">
          <j-button @click.native="notify">
            <i class="iconfont iconplay_icon button-icon"></i>
            立即开通
          </j-button>
        </div> -->
      </div>
    </div>
    <!---->
    <!--多种存储类型-->
    <div class="store-type">
      <box title="多种存储类型" classname="pc">
        <div
          class="storecon mt-50"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="store-list">
            <ul>
              <li></li>
              <li>适用场景</li>
              <li>对象最小计量大小</li>
              <li>最少存储时间</li>
              <li>数据访问特点</li>
              <li>图片处理</li>
              <li>数据取回费用</li>
              <li>OSS传输加速(上传/下载加速)</li>
              <li>存储空间价格(本地冗余LRS)</li>
              <li>存储空间价格(同城冗余ZRS)</li>
            </ul>
          </div>
          <div class="store-list">
            <ol>
              <li><div class="store-tit">热数据存储</div></li>
              <li>通用场景，平均每文件每月访问大于1次</li>
              <li>按照对象实际大小计算</li>
              <li>无</li>
              <li>实时访问</li>
              <li>支持</li>
              <li>无</li>
              <li>支持</li>
              <li style="color: #f96549">￥<span>0.12元</span>/GB/月</li>
              <li style="color: #f96549">￥<span>0.21元</span>/GB/月</li>
            </ol>
          </div>
          <div class="store-list">
            <ol>
              <li><div class="store-tit">温数据存储</div></li>
              <li>单文件月访问不到1次，但访问需实时</li>
              <li>64KB,即小于64KB的文件，按64KB计费</li>
              <li>30天</li>
              <li>实时访问</li>
              <li>支持</li>
              <li>按实际获取的数据量收取，单位GB</li>
              <li>支持</li>
              <li style="color: #f96549">￥<span>0.08元</span>/GB/月</li>
              <li style="color: #f96549">￥<span>0.10元</span>/GB/月</li>
            </ol>
          </div>
          <div class="store-list">
            <ol>
              <li><div class="store-tit">冷数据存储</div></li>
              <li>单文件月访问不到1次，但访问需实时</li>
              <li>64KB,即小于64KB的文件，按64KB计费</li>
              <li>60天</li>
              <li>需先解冻后才能读取，解冻时间1分钟</li>
              <li>支持，但需要先解冻</li>
              <li>按实际获取的数据量收取，单位GB</li>
              <li>支持</li>
              <li style="color: #f96549">￥<span>0.03元</span>/GB/月</li>
              <li style="color: #f96549">￥<span>0.12元</span>/GB/月</li>
            </ol>
          </div>
        </div>
      </box>
    </div>
    <!--产品优势-->
    <div class="pro-adv">
      <box title="CNFS产品优势" classname="pc" />
      <swiper
        class="procon__swiper"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-once="true"
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide class="item-box">
          <div class="procon">
            <div class="procon-list">
              <img src="@/assets/store/youshi_1.png" />
              <h4>完全托管</h4>
              <p>
                云中完全托管的服务，可以轻松创建和运行高性能文件系统。不再需要考虑安装和配置软件，以及复杂的性能调优工作，只需几分钟就能立刻开始使用高性能的文件存储，开始你的业务
              </p>
            </div>
            <div class="procon-list">
              <img src="@/assets/store/youshi_2.png" />
              <h4>超高吞吐和IOPS</h4>
              <p>
                文件存储CPFS采用分布式的并行架构，数据条带化后均匀分布在存储集群上，可以实现计算节点并行访问，提供数十GB的吞吐和几十万级的IOPS以及毫秒级时延
              </p>
            </div>
            <div class="procon-list">
              <img src="@/assets/store/youshi_3.png" />
              <h4>弹性可扩展</h4>
              <p>
                支持在线的扩容，由于所有数据均以条带化的方式存储并且支持扩容以后的自动负载平衡，可满足性能的线性增长并且即时利用扩容节点的吞吐和存储能力，满足业务增长需要的更多容量与性能的诉求
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="procon">
            <div class="procon-list">
              <img src="@/assets/store/youshi_3.png" />
              <h4>弹性可扩展</h4>
              <p>
                支持在线的扩容，由于所有数据均以条带化的方式存储并且支持扩容以后的自动负载平衡，可满足性能的线性增长并且即时利用扩容节点的吞吐和存储能力，满足业务增长需要的更多容量与性能的诉求
              </p>
            </div>
            <div class="procon-list">
              <img src="@/assets/store/youshi_4.png" />
              <h4>高可用</h4>
              <p>
                所有节点均为高可用设计。实现集群内秒级别的故障检测，并由CPFS集群调度器自动将服务切换到其他节点，同时兼顾负载均衡。整个切换过程用户不感知，提供远高于传统两节点HA的高可用性
              </p>
            </div>
            <div class="procon-list">
              <img src="@/assets/store/youshi_5.png" />
              <h4>安全可靠</h4>
              <p>
                数据持久化存储于阿里云自研的盘古分布式存储系统，支持多份数据拷贝，可以提供11个9的数据可靠性，并完美通过了阿里双十一超高压力的考验
              </p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--产品功能-->
    <div class="pro-func">
      <box title="产品功能" classname="pc">
        <div
          class="profuncon"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="profuncon-list">
            <div class="profunc-pic"><img src="@/assets/store/img1.png" /></div>
            <div class="profunc-txt">
              <h4>兼容POSIX/MPI</h4>
              <p>
                文件存储CNFS的兼容标准POSIX/MPI，因此您可以使用当前基于 Linux
                的应用程序
              </p>
            </div>
          </div>
          <div class="profuncon-list">
            <div class="profunc-pic"><img src="@/assets/store/img2.png" /></div>
            <div class="profunc-txt">
              <h4>文件管理功能</h4>
              <p>
                支持目录级别的配额设置，及ACL访问控制。用户可以将企业自己的LDAP/NIS集成到文件存储CNFS中
              </p>
            </div>
          </div>
          <div class="profuncon-list">
            <div class="profunc-pic"><img src="@/assets/store/img3.png" /></div>
            <div class="profunc-txt">
              <h4>高吞吐，低延时</h4>
              <p>
                依靠并行架构，用户I/O在客户端和存储节点间完全并行访问，通过集群聚合，吞吐可以线性增加
              </p>
            </div>
          </div>
          <div class="profuncon-list">
            <div class="profunc-pic"><img src="@/assets/store/img4.png" /></div>
            <div class="profunc-txt">
              <h4>计算生态整合</h4>
              <p>
                容器等计算平台整合，支持集群直接挂载CNFS文件系统。用户CNFS中的数据可以借助阿里云丰富的计算生态进行快速分析。
              </p>
            </div>
          </div>
          <div class="profuncon-list">
            <div class="profunc-pic"><img src="@/assets/store/img5.png" /></div>
            <div class="profunc-txt">
              <h4>并发访问优化</h4>
              <p>
                统一命名空间，支持成千上百机器同时并发访问，针对数据处理进行了优化。即使是大量的小文件，访问性能也可以提高10倍以上
              </p>
            </div>
          </div>
        </div>
      </box>
    </div>

    <!--流程-->
    <div class="procedure">
      <box title="存储相关流程" classname="pc">
        <div
          class="procedure-box"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="list">
            <h6>存储设备接入流程</h6>
            <div class="content">
              <span class="down" />
              <dl>
                <dt>1</dt>
                <dd class="arrow"></dd>
                <dd>准备存储设备</dd>
              </dl>
              <dl>
                <dt>2</dt>
                <dd class="arrow"></dd>
                <dd>部署设备运行环境</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <dd class="arrow"></dd>
                <dd>下载安装接入程序并运行</dd>
              </dl>
              <dl>
                <dt>4</dt>
                <dd class="arrow"></dd>
                <dd>检查接入情况</dd>
              </dl>
              <dl>
                <dt>5</dt>
                <dd>获取存储节点数据</dd>
              </dl>
            </div>
          </div>
          <div class="list">
            <h6>存储节点奖励流程</h6>
            <div class="content">
              <span class="down" />
              <dl>
                <dt>1</dt>
                <dd class="arrow"></dd>
                <dd>存储设备接入平台网络</dd>
              </dl>
              <dl>
                <dt>2</dt>
                <dd class="arrow"></dd>
                <dd>检查节点数据</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <dd class="arrow"></dd>
                <dd>保持存储设备正常运行1个自然周</dd>
              </dl>
              <dl>
                <dt>4</dt>
                <dd class="arrow"></dd>
                <dd>系统自动发放奖励到节点帐户</dd>
              </dl>
              <dl>
                <dt>5</dt>
                <dd>继续保持在线<br/>持续获得奖励</dd>
              </dl>
            </div>
          </div>
          <div class="list">
            <h6>存储节点报价流程</h6>
            <div class="content">
              <span class="down" />
              <dl>
                <dt>1</dt>
                <dd class="arrow"></dd>
                <dd>成为存储节点</dd>
              </dl>
              <dl>
                <dt>2</dt>
                <dd class="arrow"></dd>
                <dd>查看节点可用存储空间</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <dd class="arrow"></dd>
                <dd>在最高限价内进行自由报价</dd>
              </dl>
              <dl>
                <dt>4</dt>
                <dd class="arrow"></dd>
                <dd>等待分配存储订单</dd>
              </dl>
              <dl>
                <dt>5</dt>
                <dd>提供存储服务<br/>获得订单奖励</dd>
              </dl>
            </div>
          </div>
          <div class="list">
            <h6>用户存储流程</h6>
            <div class="content">
              <span class="down" />
              <dl>
                <dt>1</dt>
                <dd class="arrow"></dd>
                <dd>评估存储需求</dd>
              </dl>
              <dl>
                <dt>2</dt>
                <dd class="arrow"></dd>
                <dd>选择存储服务</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <dd class="arrow"></dd>
                <dd>购买存储空间</dd>
              </dl>
              <dl>
                <dt>4</dt>
                <dd class="arrow"></dd>
                <dd>下载并安装存储客户端</dd>
              </dl>
              <dl>
                <dt>5</dt>
                <dd>上传文件到存储网络</dd>
              </dl>
            </div>
          </div>
        </div>
      </box>
    </div>

    <!--行业实战场景-->
    <!-- <div class="pro-combat">
      <box title="行业实战场景" classname="pc">
        <div
          class="procombatcon"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div class="procombatcon-2">
          </div>
          <div class="procombatcon-3">
          </div>
        </div>
      </box>
    </div> -->
    
  </div>
</template>

<script>
// require styles
import jButton from "@/components/button"
import box from "@/components/box"

export default {
  components: {
    jButton,
    box,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 30,
        loop: true,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      const topMain = this.$refs.topMain;
      topMain.classList.add("show");
    }, 200);
  },
  methods: {
    handleNavSelect(e) {
      console.log("e: ", e);
      this.activeIndex = e;
    },
    notify() {
      console.log("notify");
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

.delay400 {
  animation-delay: 400ms;
  animation-fill-mode: backwards !important;
}

.delay600 {
  animation-delay: 400ms;
  animation-fill-mode: backwards !important;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .topcontent {
    width: 100%;
    height: 700px;
    background-image: url("~@/assets/store/img_shoutu.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
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
            color: #fff;
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
      top: 210px;
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
      }
      .btn {
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .store-type {
    padding: 140px 0;
    .storecon {
      border-top: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      display: flex;
      justify-content: center;
      width: 1200px;
      .store-list {
        width: 300px;
        font-size: 18px;
        color: #767676;
        transition: all 0.3s;
        &:not(:first-child):hover {
          box-shadow: 0 0 9px 3px #999;
          z-index: 88;
          .store-tit {
            background-color: #333;
            color: #fff;
          }
          ol > li {
            border-right: none;
          }
        }
        ul {
          text-align: left;

          background: #f5f5f5;
          li {
            height: 65px;
            line-height: 65px;
            padding: 0 10px;
            border-bottom: 1px solid #ebebeb;
            border-right: 1px solid #ebebeb;
          }
        }
        ol {
          text-align: center;
          li {
            height: 65px;
            line-height: 65px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            border-bottom: 1px solid #f5f5f6;
            border-right: 1px solid #f5f5f6;
            & + li {
              padding: 0 10px;
            }
            .store-tit {
              font-size: 24px;
              font-weight: bold;
              color: #333333;
              background: #ebecec;
            }

            span {
              font-size: 26px;
              color: #f96549;
            }
          }
        }
      }
      align-items: center;
    }
  }
  .pro-adv {
    background: #f5f5f5;
    padding: 140px 0;
    width: 100%;
    .swiper-container {
      height: 550px;
      .swiper-pagination {
        ::v-deep .swiper-pagination-bullet {
          width: 40px;
          height: 3px;
          border-radius: 1.5px;
        }
      }
    }
    .procon {
      display: flex;
      justify-content: center;
      padding-top: 100px;
      text-align: center;

      .procon-list {
        width: 375px;
        align-items: center;
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
    .profuncon {
      padding-top: 50px;
      width: 1200px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .profuncon-list:hover {
        box-shadow: 0 0 9px 3px #999;
        transform: translateY(-5px);
      }
      .profuncon-list {
        width: 500px;
        text-align: left;
        margin-bottom: 40px;
        margin: 15px;
        padding: 35px 30px;
        display: flex;
        align-items: flex-start;
        transition: transform 0.3s;
        .profunc-pic {
          float: left;
          width: 70px;
          height: 70px;
        }
        .profunc-txt {
          float: left;
          padding-left: 25px;
          width: 360px;
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
  .procedure {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      color: #333333;
      font-size: 28px;
      font-weight: 700;
      margin-top: 30px;
    }
    .procedure-box {
      width: 1200px;
      margin-bottom: 20px;
      overflow: hidden;
      transition: all 0.8s;
      .list {
        margin-top: 80px;
        h6 {
          font-size: 28px;
          color: #333;
          font-weight: bold;
        }
        .content {
          padding-top: 30px;
          margin-top: 30px;
          background: url('~@/assets/store/bg_write.png') repeat-x;
          background-size: auto 100%;
          border-top: solid 2px #0D84F2;
          position: relative;
          display: flex;
          justify-content: space-around;
          span {
            width: 36px;
            height: 16px;
            background: url('~@/assets/store/down.png') no-repeat;
            display: inline-block;
            position: absolute;
            top: -2px;
            left: 50%;
            z-index: 20;
          }
          dl {
            width: 160px;
            position: relative;
            dt {
              color: #0D84F2;
              font-size: 28px;
              line-height: 70px;
              text-align: center;
              padding-bottom: 13px;
              background: url('~@/assets/store/marker.png') no-repeat center top;
            }
            dd {
              // font-family: "MicrosoftYaHei","PingFang SC","SimHei";
              font-size: 20px;
              color: #666;
              padding-top: 15px;
              &.arrow {
                width: 82px;
                height: 9px;
                background: url('~@/assets/store/arrow.png') no-repeat 0 0;
                position: absolute;
                right: -80px;
                top: 30px;
              }
              &:hover {
                color: #0D84F2;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .up-icon {
      width: 32px;
      height: 32px;
      transition: all 0.3s;
      img {
        width: 100%;
      }
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .pro-combat {
    padding: 70px 0 120px 0;
    .procombatcon {
      width: 1200px;
      color: #fff;
      text-align: center;
      box-sizing: border-box;
      padding-top: 50px;

      div {
        height: 254px;
      }
      h4 {
        font-size: 26px;
        padding-top: 40px;

        line-height: 35px;
        padding-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        text-align: left;
        padding: 0 50px;
      }

      .procombatcon-1 {
        background-image: url("~@/assets/store/cj1.png");

        width: 590px;
        float: left;
      }
      .procombatcon-2 {
        float: right;
        width: 590px;
        background-image: url("~@/assets/store/cj2.png");
      }
      .procombatcon-3 {
        float: left;
        background-image: url("~@/assets/store/cj3.png");
        width: 1200px;
        margin-top: 25px;
        p {
          padding: 0 270px;
        }
      }
    }
  }
}
</style>
