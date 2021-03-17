<template>
  <el-dialog title="" :visible.sync="visible" @close="handleClose">
    <div class="popup-img">
      <img :src="url" alt="" />
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
    }
  },
  watch: {
    dialogVisible(val) {
      this.visible = val;
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:dialogVisible", false);
    },
  }
}
</script>