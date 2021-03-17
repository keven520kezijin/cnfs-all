<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :header-cell-style="{ background: '#fafafa', color: '#333' }"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="tit" label="标题内容">
      <template slot-scope="scope">
        <div @click="details(scope)" class="msg-tit" :class="scope.row.status === 1 ? 'read' : 'unread'">
          {{ scope.row.title }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="create_time" label="提交时间" width="180" />
    <el-table-column prop="enum_message_type" label="类型" width="180" />
    <div slot="empty" style="height: 200px; line-height: 200px">
      <i class="el-icon-warning-outline" />您好，还没有消息哦！
    </div>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // tableData: [
      //   {
      //     id: "1",
      //     date: "2016-05-02",
      //     type: "王小虎",
      //     tit: "上海市普陀区金沙江路 1518 弄",
      //   },
      //   {
      //     id: "2",
      //     date: "2016-05-04",
      //     type: "王小虎",
      //     tit: "上海市普陀区金沙江路 1517 弄",
      //   },
      //   {
      //     id: "3",
      //     date: "2016-05-01",
      //     type: "王小虎",
      //     tit: "上海市普陀区金沙江路 1519 弄",
      //   },
      //   {
      //     id: "4",
      //     date: "2016-05-03",
      //     type: "王小虎",
      //     tit: "上海市普陀区金沙江路 1516 弄",
      //   },
      // ],
    };
  },
  methods: {
    details(scope) {
      localStorage.setItem("msg", scope.row.content);
      console.log("scope: ", scope);
      this.$router.push({
        path: "infoDetails",
        query: { id: scope.row.object_id },
      });
    },
  },
};
</script>

<style lang="scss">
.el-icon-warning-outline {
  margin-right: 10px;
}
.msg-tit {
  &:hover {
    text-decoration: underline;
    color: #06c;
  }
  &.read {
    font-weight: 600;
  }
  &.unread {
    color: #999;
  }
}
</style>
