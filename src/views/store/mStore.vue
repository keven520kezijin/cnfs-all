<template>
  <div class="store">
    <m-banner :bgImg="bgImg" class="banner"></m-banner>

    <store />

    <box classname="superiority mobile mt-60" title="CNFS产品优势">
      <div class="item">
        <img src="@/assets/home/i1.png" alt="" class="cir">
        <h6 class="tip">完全托管</h6>
        <p>
          云中完全托管的服务，可以轻松创建和运行高性能文件系统。不再需要考虑安装和配置软件，以及复杂的性能调优工作，只需几分钟就能立刻开始使用高性能的文件存储，开始你的业务
        </p>
      </div>
      <div class="item">
        <img src="@/assets/home/i2.png" alt="" class="cir">
        <h6 class="tip">超高吞吐和IOPS</h6>
        <p>
          文件存储CPFS采用分布式的并行架构，数据条带化后均匀分布在存储集群上，可以实现计算节点并行访问，提供数十GB的吞吐和几十万级的IOPS以及毫秒级时延
        </p>
      </div>
      <div class="item">
        <img src="@/assets/home/i3.png" alt="" class="cir">
        <h6 class="tip">弹性可扩展</h6>
        <p>
          支持在线的扩容，由于所有数据均以条带化的方式存储并且支持扩容以后的自动负载平衡，可满足性能的线性增长并且即时利用扩容节点的吞吐和存储能力，满足业务增长需要的更多容量与性能的诉求
        </p>
      </div>
      <div class="item">
        <img src="@/assets/home/i4.png" alt="" class="cir">
        <h6 class="tip">高可用</h6>
        <p>
          所有节点均为高可用设计。实现集群内秒级别的故障检测，并由CPFS集群调度器自动将服务切换到其他节点，同时兼顾负载均衡。整个切换过程用户不感知，提供远高于传统两节点HA的高可用性
        </p>
      </div>
      <div class="item">
        <img src="@/assets/home/i5.png" alt="" class="cir">
        <h6 class="tip">安全可靠</h6>
        <p>
          数据持久化存储于阿里云自研的盘古分布式存储系统，支持多份数据拷贝，可以提供11个9的数据可靠性，并完美通过了阿里双十一超高压力的考验
        </p>
      </div>
    </box>

    <box classname="mobile mt-80" title="产品功能">
      <div class="product mt-30">
        <div class="item">
          <div class="icon">
            <img class="ib1" src="@/assets/home/ib1.png" alt="">
          </div>
          <div class="main">
            <h6>兼容POSIX/MPI</h6>
            <p>文件存储CNFS的兼容标准POSIX/MPI，因此您可以使用当前基于Linux的应用程序</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img class="ib2" src="@/assets/home/ib2.png" alt="">
          </div>
          <div class="main">
            <h6>文件管理功能</h6>
            <p>支持目录级别的配额设置，及ACL访问控制。用户可以将企业自己的LDAP/NIS集成到文件存储CNFS中</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img class="ib3" src="@/assets/home/ib3.png" alt="">
          </div>
          <div class="main">
            <h6>高吞吐，低延时</h6>
            <p>依靠并行架构，用户I/O在客户端和存储节点间完全并行访问，通过集群聚合，吞吐可以线性增加</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img class="ib4" src="@/assets/home/ib4.png" alt="">
          </div>
          <div class="main">
            <h6 >计算生态整合</h6>
            <p>容器等计算平台整合，支持集群直接挂载CNFS文件系统。用户CNFS中的数据可以借助阿里云丰富的计算生态进行快速分析</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img class="ib5" src="@/assets/home/ib5.png" alt="">
          </div>
          <div class="main">
            <h6>并发访问优化</h6>
            <p>统一命名空间，支持成千上百机器同时并发访问，针对数据处理进行了优化。即使是大量的小文件，访问性能也可以提高10倍以上</p>
          </div>
        </div>
      </div>
    </box>

    <box classname="mobile mt-80" title="存储相关流程">
      <div class="procedure-box">
        <span class="down" />
        <swiper
          ref="swiper"
          :options="swiperOptions"
        >
          <swiper-slide>
            <div class="list">
              <h6>存储设备接入流程</h6>
              <div class="content">
                <dl>
                  <dt>1</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">准备存储设备</dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">部署设备运行环境</dd>
                </dl>
                <dl>
                  <dt>3</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">下载安装接入程序并运行</dd>
                </dl>
                <dl>
                  <dt>4</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">检查接入情况</dd>
                </dl>
                <dl>
                  <dt>5</dt>
                  <dd class="text">获取存储节点数据</dd>
                </dl>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list">
              <h6>存储节点奖励流程</h6>
              <div class="content">
                <dl>
                  <dt>1</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">存储设备接入平台网络</dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">检查节点数据</dd>
                </dl>
                <dl>
                  <dt>3</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">保持存储设备正常运行1个自然周</dd>
                </dl>
                <dl>
                  <dt>4</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">系统自动发放奖励到节点帐户</dd>
                </dl>
                <dl>
                  <dt>5</dt>
                  <dd class="text">继续保持在线<br/>持续获得奖励</dd>
                </dl>
              </div>
            </div>
            </swiper-slide>
          <swiper-slide>
            <div class="list">
              <h6>存储节点报价流程</h6>
              <div class="content">
                <dl>
                  <dt>1</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">成为存储节点</dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">查看节点可用存储空间</dd>
                </dl>
                <dl>
                  <dt>3</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">在最高限价内进行自由报价</dd>
                </dl>
                <dl>
                  <dt>4</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">等待分配存储订单</dd>
                </dl>
                <dl>
                  <dt>5</dt>
                  <dd class="text">提供存储服务<br/>获得订单奖励</dd>
                </dl>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list">
              <h6>用户存储流程</h6>
              <div class="content">
                <dl>
                  <dt>1</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">评估存储需求</dd>
                </dl>
                <dl>
                  <dt>2</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">选择存储服务</dd>
                </dl>
                <dl>
                  <dt>3</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">购买存储空间</dd>
                </dl>
                <dl>
                  <dt>4</dt>
                  <dd class="arrow"></dd>
                  <dd class="text">下载并安装存储客户端</dd>
                </dl>
                <dl>
                  <dt>5</dt>
                  <dd class="text">上传文件到存储网络</dd>
                </dl>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination_line" slot="pagination"></div>
      </div>
    </box>

    <!-- <box classname="mobile mt-80" title="行业实战场景">
      <div class="scene">
        <img src="@/assets/home/s1.png" alt="">
        <img src="@/assets/home/s2.png" alt="">
        <img src="@/assets/home/s3.png" alt="">
      </div>
    </box> -->
  </div>
</template>

<script>
import mBanner from "@/components/mBanner";
import mTop from "@/components/mTop";
import box from "@/components/box"
import store from "./components/mobile/store" // store
export default {
  name: "",
  components: {
    mBanner,
    mTop,
    store,
    box,
  },
  props: {},
  data() {
    return {      
      bgImg: require("@/assets/home/m-banner2.png"),
      box1Src: require("@/assets/home/box1.png"),
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination_line",
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";
.store {
  .superiority {
    padding: 40px 0;
    background-color: #f5f5f6;
    .item {
      margin-top: 40px;
      img {
        width: 86px;
        margin: 0 auto;
        display: block;
      }
      .cir {
        width: 86px;
        height: 86px;
        border-radius: 43px;
        background-color: #e5e5e6;
        margin-bottom: 20px;
      }
      .tip {
        color: #333;
        font-size: 22px;
        font-weight: bold;
        margin-top: 30px;
      }
      p {
        text-align: center;
        padding: 10px 20px 0;
        color: #8f8f8f;
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
  .product {
    .item {
      width: 90%;
      display: flex;
      justify-content: space-between;
      .icon {
        padding-right: 15px;
        flex: 1;
        img {
          margin-top: 20px;
        }
        .ib1 {
          width: 54px;
          height: 46px;
        }
        .ib2 {
          width: 52px;
          height: 53px;
        }
        .ib3 {
          width: 52px;
          height: 56px;
        }
        .ib4 {
          width: 52px;
          height: 45px;
        }
        .ib5 {
          width: 54px;
          height: 60px;
        }
      }
      .main {
        width: 260px;
        display: flex;
        flex-direction: column;
        h6 {
          display: block;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          border-bottom: 1px solid #F2F2F2;
          text-align: left;
        }
        p {
          font-size: 14px;
          color: #8f8f8f;
          line-height: 24px;
          text-align: left;
          margin: 20px 0;
        }
      }
    }

  }
  .scene {
    padding-top: 30px;
    img {
      width: 335px;
      margin-bottom: 8px;
      &:last-child {
          margin-bottom: 50px;
      }
    }
  }
  .procedure-box {
    width: 100%;
    margin-top: 50px;
    background: url('~@/assets/store/bg_write.png') repeat-x;
    background-size: auto 100%;
    border-top: solid 2px #0D84F2;
    position: relative;
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
    .item-box {
      height: 650px;
    }
    .swiper-pagination_line {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .list {
      width: 100%;
      padding: 40px 0 50px;
      h6 {
        font-size: 18px;
        color: #333;
        font-weight: bold;
      }
      .content {
        padding-top: 30px;
        margin-top: 30px;
        dl {
          position: relative;
          dt {
            color: #0D84F2;
            font-size: 22px;
            line-height: 40px;
            text-align: center;
            padding-bottom: 10px;
            background: url('~@/assets/store/marker.png') no-repeat center top;
            background-size: 40px auto;
          }
          dd {
            font-size: 16px;
            color: #666;
            padding-top: 15px;
            &.arrow {
              margin: 10px 0;
              height: 34px;
              background: url('~@/assets/store/m_arrow.png') no-repeat center 0;
            }
            &.text {
              width: 141px;
              line-height: 20px;
              padding-top: 8px;
              padding-bottom: 8px;
              position: absolute;
              top: 0;
            }

          }
          &:nth-child(odd){
            dd.text {
              text-align: left;
              padding-left: 15px;
              padding-right: 5px;
              background: url('~@/assets/store/bg_left.png') no-repeat;
              background-size: 100% 100%;
              right: 15px;
            }
          }
          &:nth-child(even){
            dd.text {
              text-align: right;
              padding-left: 5px;
              padding-right: 15px;
              background: url('~@/assets/store/bg_right.png') no-repeat;
              background-size: 100% 100%;
              left: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
