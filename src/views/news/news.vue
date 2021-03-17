<template>
  <div class="page page-news-detail" v-if="detail">
    <!--页头-->
    <nav class="nav">
      <div class="channel-path page-w">
        <router-link to="/home">首页</router-link>
        <span class="icon">></span>
        <router-link to="/home?id=news">重要新闻</router-link>
        <span class="icon">></span>
        <span>{{ detail.title }}</span>
      </div>
    </nav>
    <!--正文-->
    <section class="content">
      <div class="page-w">
        <div class="title">
          <h1>{{ detail.title }}</h1>
          <time>{{ detail.pubDate }}</time>
        </div>
        <div class="body" v-html="detail.content"></div>
      </div>
    </section>
    <!--页脚-->
  </div>
</template>

<script>
import { getNewsDetail } from '@/api/page'

export default {
  data() {
    return {
     detail: null,
    }
  },
  created() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      const params = {
        id: this.$route.query.id,
      }
      getNewsDetail(params).then(res => {
        if(res.code == 200 && res.data) this.detail = res.data
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.page-news-detail {
  background: #B1C2DA;
  padding-top: 98px;
  text-align: left;
  .nav {
    background: #058CE0;
    .channel-path {
      height: 98px;
      line-height: 98px;
      color: #fff;
      font-size: 22px;
      margin: 0 auto;
      .icon {
        padding: 0 8px;
      }
    }
  }
  .content {
    background: #fff;
    padding-top: 80px;
    .title {
      h1 {
        font-size: 42px;
        color: #0D0D0D;
      }
      time {
        font-size: 16px;
        color: #A0A0A2;
        padding-top: 25px;
        display: block;
      }
    }
    .body {
      padding: 70px 0;
      font-size: 20px;
      line-height: 34px;
    }
  }
}
</style>