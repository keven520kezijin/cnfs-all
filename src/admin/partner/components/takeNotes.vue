<template>
  <div class="takeNotes-page">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="申请内容" width="180"> </el-table-column>
      <el-table-column prop="name" label="申请描述" width="180"> </el-table-column>
      <el-table-column prop="address" label="申请奖励拍豆" width="180"> </el-table-column>
      <el-table-column prop="date" label="发生日期" width="180"> </el-table-column>
      <el-table-column prop="date" label="申请时间" width="180"> </el-table-column>
      <el-table-column prop="address" label="申请状态" width="180"> </el-table-column>
      <el-table-column prop="address" label="详情" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ]
    };
  },
};
</script>

<style>
</style>