<template>
  <div class="page">
    <!--未激活-->
    <div v-if="!isActivate" class="no-activate">
      <dl>
        <dt>
          <i class="el-icon el-icon-warning-outline"></i>
        </dt>
        <dd>
          <div class="text">您还未激活存豆账户，请先激活账户〜</div>
          <el-button type="primary">立即激活</el-button>
        </dd>
      </dl>
    </div>
    <!--已激活-->
    <div v-else class="main">
      <div class="top">
        <div class="card total">
          <dl>
            <dt class="txt-opa">总存豆数</dt>
            <dd>
              <span class="total-price">20000</span>
              <span class="tit txt-opa">可用豆数</span>
              <span class="small-number">100</span>
            </dd>
          </dl>
          
          <div class="total-box">
            <swiper :options="swiperOptions">
              <swiper-slide>
                <div class="item-tit txt-opa">存储奖励账户</div>
                <div class="item-num">800</div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-tit txt-opa">推广奖励账户</div>
                <div class="item-num">600</div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-tit txt-opa">社区奖励账户</div>
                <div class="item-num">210</div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-tit txt-opa">流通账户</div>
                <div class="item-num">360</div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" />
            <div class="swiper-button-next" />
          </div>
        </div>
        <div class="card current">
          <div class="price">当前豆价：1 <span>元/豆</span></div>
          <div class="total-num">卖豆排队数：764355668豆</div>
        </div>
      </div>
      <div class="beans-box">
        <div class="item" @click="showTransferDialog">
          <img
            src="@/assets/admin/beansAccount/icon_zhuandou@2x.png"
            height="50"
            alt=""
          />
          <div class="txt">转豆</div>
        </div>
        <div class="item" @click="showCollectDialog">
          <img
            src="@/assets/admin/beansAccount/icon_shoudou@2x.png"
            height="50"
            alt=""
          />
          <div class="txt">收豆</div>
        </div>
        <div class="item" @click="showBuyDialog">
          <img
            src="@/assets/admin/beansAccount/icon_maidou@2x.png"
            height="50"
            alt=""
          />
          <div class="txt">买豆</div>
        </div>
        <div class="item" @click="showSellDialog">
          <img
            src="@/assets/admin/beansAccount/icon_mandou@2x.png"
            height="50"
            alt=""
          />
          <div class="txt">卖豆</div>
        </div>
      </div>
      <div class="title">交易记录</div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    
      <!--dialog-->
      <buy-beans :dialogVisible.sync="buyVisible" />
      <transfer-beans :dialogVisible.sync="transferVisible" />
      <collect-beans :dialogVisible.sync="collectVisible" />
      <sell-beans :dialogVisible.sync="sellVisible" />
    </div>
  </div>
</template>

<script>
import transferBeans from './dialog/transfer-beans'
import buyBeans from './dialog/buy-beans'
import collectBeans from './dialog/collect-beans'
import sellBeans from './dialog/sell-beans'

export default {
  components: {
    transferBeans,
    buyBeans,
    collectBeans,
    sellBeans,
  },
  data() {
    return {
      isActivate: true,
      tableData: [],
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      // dialog
      transferVisible: false,
      buyVisible: false,
      collectVisible: false,
      sellVisible: false,
    };
  },
  methods: {
    showTransferDialog() {
      this.transferVisible = true;
    },
    showBuyDialog() {
      this.buyVisible = true;
    },
    showCollectDialog() {
      this.collectVisible = true;
    },
    showSellDialog() {
      this.sellVisible = true;
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
.page-beansAccount {
  background: #f8f8f8;
}
.main {
  width: 1346px;
  margin: 0 auto;
  padding-top: 50px;
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .card {
      width: 665px;
      height: 272px;
    }
    .total {
      border-right: 8px;
      padding: 30px 20px 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #fff;
      background-image: url("~@/assets/admin/beansAccount/img_gold@2x.png");
      background-size: 100%;
      dl {
        dt {
            font-size: 22px;
            text-align: left;
            padding-bottom: 10px;
        }
        dd {
          height: 78px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-clamp: 1; // 行数
          -webkit-box-orient: vertical;
          .total-price {
            font-family: JDZhengHT-EN-Regular;
            font-size: 78px;
          }
          .tit {
            font-size: 20px;
            padding-left: 30px;
          }
          .small-number {
            font-family: JDZhengHT-EN-Regular;
            font-size: 60px;
            padding-left: 6px;
          }
        }
      }
      ::v-deep .total-box {
        width: 100%;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px dashed #fff;
        display: flex;
        position: relative;
        .swiper-slide {
          width: 148px !important;
          padding: 0;
          &:not(:last-child) {
            border-right: 1px dashed #fff;
          }
          .item-tit {
            font-size: 18px;
          }
          .item-num {
            font-size: 46px;
            padding-top: 10px;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
          top: 60px;
          &::after {
            font-size: 20px;
            opacity: .6;
          }
        }
        .swiper-button-prev {
          left: 0px;
        }
        .swiper-button-next {
          right: 4px;
        }
      }
      .txt-opa {
        opacity: .6;
      }
    }
    .current {
      background-image: url("~@/assets/admin/beansAccount/img_blue@2x.png");
      background-size: 100%;
      font-family: JDZhengHT-EN-Regular;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 8px;
      .price {
        color: #333;
        font-size: 24px;
        span {
          font-size: 14px;
        }
      }
      .total-num {
        color: #999;
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
  .beans-box {
    height: 92px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      height: 100%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 10px;
      }
      img {
        margin-right: 30px;
      }
      .txt {
        font-size: 24px;
      }
    }
  }
  .title {
    font-size: 24px;
    text-align: left;
    line-height: 30px;
    height: 30px;
    margin-top: 56px;
    margin-bottom: 20px;
  }
  ::v-deep .el-table {
    border-bottom: solid 1px #D9D9D9;
    border-right: solid 1px #D9D9D9;
    th, td {
      border: solid 1px #D9D9D9;
    }
    th {
      font-size: 18px;
      color: #666;
      background: #F0F0F0;
    }
    td {
      font-size: 16px;
    }
  }
}
.no-activate {
  padding: 60px 0 0 80px;
  text-align: left;
  dl {
    display: flex;
    dt {
      .el-icon {
        font-size: 40px;
        color: #f96549;
      }
    }
    dd {
      font-size: 20px;
      line-height: 30px;
      padding-left: 15px;
      .el-button {
        width: 210px;
        height: 50px;
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
}
</style>