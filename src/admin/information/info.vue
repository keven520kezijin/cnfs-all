<template>
  <div class="info-container">
    <p-title title="消息中心" />

    <el-tabs v-model="activeName" class="tabs-box" @tab-click="handleClick">
      <el-tab-pane label="全部类型消息" name="first">
        <tab :tableData="tableData" />
      </el-tab-pane>
      <el-tab-pane label="安全消息" name="second">
        <tab />
      </el-tab-pane>
      <el-tab-pane label="服务消息" name="third">
        <tab />
      </el-tab-pane>
      <el-tab-pane label="活动消息" name="fourth">
        <tab />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { queryusermessage } from "@/api/page";
import pTitle from "@/components/admin/pageTitle";
import tab from "./components/table.vue";
export default {
  components: {
    pTitle,
    tab,
  },
  data() {
    return {
      activeName: "first",
      tableData: []
    };
  },
  created() {
    this.reqQueryusermessage()
  },
  methods: {
    reqQueryusermessage() {
      const data = {
        QueryModel: {
          perpage: 10, //数据条数
          cursor: 0, //起始位移
          isRead: "0", //""-取所有0-未读1-已读
          userId: 1, //用户id
          enumMessageType: "", //消息类型
        },
      };
      // queryusermessage(data).then((res) => {
      //   console.log("queryusermessage-res: ", res);
      //   this.tableData = res.Data

      // });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  margin: 20px 30px;
  position: relative;
  .tabs-box {
    margin: 20px 0;
  }
}
</style>
