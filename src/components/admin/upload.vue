<template>
  <el-upload
    class="upload-demo"
    action="http://47.104.20.233:8089/cnfs-platform/platform/files/"
    :file-list="fileList"
    :before-upload="beforeUpload"
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <el-button type="primary">上传高清图</el-button>
  </el-upload>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
      };
    },
    methods: {
      handleSuccess() {
        this.$message.success('图片上传成功！');
        this.$emit('getUploadImg', this.fileList);
      },
      handleError() {
        this.$message.error('图片上传失败！');
      },
      beforeUpload(file) {
        let types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png'];
        const isImage = types.includes(file.type);
        const isLtSize = file.size / 1024 / 1024 < 5;

        if (!isImage) {
          this.$message.error('上传图片只能是 JPG、JPEG、GIF、BMP、PNG 格式!');
          return false;
        }

        if (!isLtSize) {
          this.$message.error('上传图片大小不能超过 5MB!');
          return false;

        }
        return true;
      }
    }
  }
</script>