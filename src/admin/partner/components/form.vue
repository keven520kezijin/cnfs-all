<template>
  <div class="form-page">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-row class="form-level">
        <el-col :span="24">
          <el-form-item label="奖励日期" required>
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="form-level">
        <el-col :span="24">
          <el-form-item label="申请内容" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="form-level">
        <el-col :span="24">
          <el-form-item label="申请描述" prop="describe">
            <el-input type="textarea" v-model="ruleForm.describe"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="form-level">
        <el-col :span="24">
          <el-form-item label="申请金额" prop="describe">
            <el-input-number
              v-model="ruleForm.moneyNum"
              :precision="2"
              :step="1"
              :max="10000000000"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="form-level">
        <el-col :span="24">
          <el-form-item label="上传凭证" prop="describe">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        date: "",
        content: "",
        describe: "",
        moneyNum: "",
      },
      rules: {},
    };
  },
  methods: {
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style lang="scss" scoped>
.form-page {
  width: 600px;
}
</style>