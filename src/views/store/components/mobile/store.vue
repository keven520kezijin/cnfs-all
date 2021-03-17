<template>
  <div class="store">
    <box classname="mobile mt-80" title="多种存储类型">
      <div class="table-box mt-30">
        <el-table class="m-store" :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="quality" label="" width="150" />
          <el-table-column prop="hot" label="热数据存储" width="300" >
            <template slot-scope="scope">
              <span :class="scope.row.id > 6 ? 'red' : ''"> {{scope.row.hot}}</span>           
            </template>
          </el-table-column>
          <el-table-column prop="warm" label="温数据存储" width="300">
            <template slot-scope="scope">
              {{scope.row.warm}}
            </template>
          </el-table-column>
          <el-table-column prop="cold" label="冷数据存储" width="300" >
            <template slot-scope="scope">
              {{scope.row.cold}}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </box>
  </div>
</template>

<script>
import box from "@/components/box"

export default {
  components: {
    box,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          quality: "适用场景",
          hot: "通用场景，平均每文件每月访问大于1次", // 通用场景，平均每文件每月访问大于1次 按照对象实际大小计算 无 实时访问 支持 无 支持
          warm: "单文件月访问不到1次，但访问需实时",
          cold: "单文件月访问不到1次，但访问需实时",
          zip: 200333,
        },
        {
          id: 2,
          quality: "对象最小计量大小",
          hot: "按照对象实际大小计算",
          warm: "64KB,即小于64KB的文件，按64KB计费", // 单文件月访问不到1次，但访问需实时 64KB,即小于64KB的文件，按64KB计费 30天 实时访问 支持 按实际获取的数据量收取，单位GB 支持
          cold: "64KB,即小于64KB的文件，按64KB计费",
          zip: 200333,
        },
        {
          id: 3,
          quality: "最少存储时间要求",
          hot: "无",
          warm: "30天",
          cold: "60天",
          zip: 200333,
        },
        {
          id: 3,
          quality: " 数据访问特点",
          hot: "实时访问",
          warm: "实时访问",
          cold: "需先解冻后才能读取，解冻时间1分钟",   // 单文件月访问不到1次，且适应解冻过程 64KB,即小于64KB的文件，按64KB计费 60天 需先解冻后才能读取，解冻时间1分钟 支持，但需要先解冻 按实际解冻的数据量收取，单位GB 支持
          zip: 200333,
        },
        {
          id: 4,
          quality: " 图片处理",
          hot: "支持",
          warm: "支持",
          cold: "支持，但需要先解冻",  // 单文件月访问不到1次，但访问需实时 64KB,即小于64KB的文件，按64KB计费 30天 实时访问 支持 按实际获取的数据量收取，单位GB 支持
          zip: 200333,
        },
        {
          id: 5,
          quality: " 数据取回费用",
          hot: "无",
          warm: "按实际获取的数据量收取，单位GB",
          cold: "按实际解冻的数据量收取，单位GB",
          zip: 200333,
        },
        {
          id: 6,
          quality: " OSS传输加速(上传/下载加速)",
          hot: "支持",
          warm: "支持",
          cold: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          id: 7,
          quality: "存储空间价格(本地冗余LRS)",
          hot: "0.12元",
          warm: "0.8元",
          cold: "0.03元",
          zip: 200333,
        },
        {
          id: 8,
          quality: "存储空间价格(同城冗余ZRS)",
          hot: "0.15元",
          warm: "0.10元",
          cold: "0.12元",
          zip: 200333,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "~@/styles/variables.scss";
@import "~@/styles/mobile.scss";
.store {
  @include page;
  .table-box {
    width: 100%;
    padding-left: 30px;
    margin-bottom: 30px;
    .red {
      font-size: 20px;
      color: #f96549;
    }
  }
}
</style>