<template>
  <div
    class="partner mt-42"
    :class="classname"
  >
    <swiper class="partner__swiper" ref="swiper" :options="swiperOptions">
      <swiper-slide
        class="item-box"
        v-for="(item, i) in list"
        :key="i"
      >
        <div class="partner-box">
          <div class="partner-box_list" v-for="(item, i) in item" :key="i">
            <span class="hot"><img src="@/assets/agents/hot.png" /></span>
            <div class="title">
              <h4>{{ item.provinceName }}</h4>
            </div>
            <p>
              <img src="@/assets/agents/icon_guanzhu_red.png" />
              <span>{{ item.applyCount }}人正在申请</span>
            </p>
              <pre>…</pre>
            <button
              @click="go('/regionalAgent', item.province)"
            >
              立即查看
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="button button-prev-css" slot="button-prev" @click="prev">
      <img src="@/assets/partner/z.png" alt="" />
    </div>
    <div class="button button-next-css" slot="button-next" @click="next">
      <img src="@/assets/partner/y.png" alt="" />
    </div>
    <div class="swiper-pagination_line" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      provinces: [],
      provincesArr: [],
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination_line",
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    },
    go(path, province) {
      this.$router.push({ path, query: { province } });
    }
  },
};
</script>

<style scoped lang="scss">
.partner {
  position: relative;
  ::v-deep .swiper-wrapper {
    align-items: center;
  }
  .partner-box {
    margin: 0 auto;
  }
  &.partner__pc {
    width: 1400px !important;
    .button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      &.button-prev-css {
        left: 0;
      }
      &.button-next-css {
        right: 0;
      }
    }
    .partner-box {
      width: 1200px;
      .partner-box_list {
        width: 278px;
        height: 380px;
        padding: 0 25px;
        margin: 36px 8px;
        h4 {
          font-size: 35px;
          line-height: 50px;
          padding: 60px 0 30px;
        }
        p {
          padding: 50px 0 30px;
          font-size: 20px;
          line-height: 27px;
        }
        button {
          font-size: 23px;
          line-height: 50px;
        }
        pre {
          padding: 10px 0 30px;
        }
        .hot-icon {
          height: 75px;
          width: 75px;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .swiper-pagination_line {
      display: none;
    }
  }
  &.partner__mobile {
    width: 100%;
    .button {
      display: none;
    }
    .partner-box_list {
      width: 108px;
      height: 154px;
      padding: 0 10px;
      margin: 8px 5px;
      h4 {
        font-size: 18px;
        line-height: 26px;
        padding: 18px 0 10px;
      }
      .hot {
        width: 40%;
      }
      p {
        padding: 20px 0 10px;
        font-size: 12px;
        line-height: 0px;
        img {
          display: none;
        }
      }
      pre {
        line-height: 1px;
        margin-bottom: 20px;
      }
      button {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
      }
    }
  }
}

</style>
