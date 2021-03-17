<template>
  <div class="page promotionReward-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="申请推广奖励" name="first">
        <j-form />
      </el-tab-pane>
      <el-tab-pane label="奖励申请记录" name="second">
        <take-notes />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import form from './components/form'
import takeNotes from './components/takeNotes'
export default {
  components: {
    jForm: form,
    takeNotes
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';
</style>