<template>
  <div class="details-container">
    <p-title title="信息详情" />
    <div class="main">
      <div class="detail-title">
        <h4>阿里云服务器待处理漏洞周报 {{ $route.query.id }}</h4>
        <div>2020-10-6</div>
      </div>
      <div class="content">
        <p>
          尊敬的{{ username }}：<br />
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import pTitle from "@/components/admin/pageTitle";
export default {
  components: {
    pTitle,
  },
  data() {
    return {
      content: '',
      username: '',
    };
  },
  created() {
    console.log("$route: ", this.$route.query.id);
    this.content = localStorage.getItem("msg");
    // console.log(localStorage.getItem("userInfo"));

    this.username = JSON.parse(localStorage.getItem("userInfo")).UserName;
  },
};
</script>

<style lang="scss" scoped>
.details-container {
  margin: 20px 30px;
  position: relative;
  .main {
    border: 1px #dadadb solid;
    padding: 20px 40px;
    margin: 20px 0;
    .detail-title {
      text-align: center;
      font-size: 14px;
      h4 {
        font-size: 18px;
        font-weight: normal;
        margin: 10px 0;
      }
    }
    .content {
      margin-top: 10px;
      border-top: 1px #ddd solid;
      line-height: 40px;
      text-align: left;
    }
  }
}
</style>