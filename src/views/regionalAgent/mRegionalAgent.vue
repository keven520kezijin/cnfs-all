<template>
  <div class="regionalAgent">
    <div class="tit-box">{{ province }} > 城市合伙人</div>
    <div class="main">
      <partner-list classname="partner__mobile" :partnerData="partnerData" />
    </div>
  </div>
</template>

<script>
import { getpartenerbyprovince } from "@/api/page";
import partnerList from "./components/partnerList";

export default {
  components: {
    partnerList,
  },
  data() {
    return {
      province: '',
      partnerData: [],
    };
  },
  created() {
    this.reqPartenerbyprovince();
    this.province = this.$route.query.province
  },
  methods: {
    reqPartenerbyprovince() {
      const provinceId = this.$route.query.province;
      getpartenerbyprovince({
        pageNo: 1,
        pageSize: 500,
        province: provinceId
      }).then((res) => {
        if(res.code == 200 && res.data) this.partnerData = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.regionalAgent {
  @include page;
  .tit-box {
    margin-top: 50px;
    display: block;
    width: 100%;
    padding: 40px 0 20px 20px;
    text-align: left;
    font-size: 18px;
  }
  .main {
    width: 100%;
    background-color: #f5f5f6;
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }
}
</style>