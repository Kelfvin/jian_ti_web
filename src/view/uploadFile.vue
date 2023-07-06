<template>
  <div>
    <el-button type="primary"  @click="showUploadDialog">题库上传</el-button>
    <el-dialog :visible="uploadVisible" title="题库上传" @close="uploadVisible = false">
      <el-upload
          action="/upload"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
          :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png/pdf文件，且不超过10MB</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="uploadVisible = false">取消</el-button>
        <el-button type="primary" @click="upload">上传</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'uploadFile',
  data() {
    return {
      uploadVisible: false
    };
  },
  methods: {
    showUploadDialog() {
      this.uploadVisible = true;
    },
    handleUploadSuccess() {
      this.$message.success('文件上传成功');
      // 处理上传成功后的逻辑
    },
    handleUploadError() {
      this.$message.error('文件上传失败');
      // 处理上传失败后的逻辑
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('只能上传jpg/png文件');
      }
      if (!isLt2M) {
        this.$message.error('文件大小不能超过2MB');
      }

      return isJPG && isLt2M;
    },
    upload() {
      // 执行上传操作
      // 可以在这里调用接口上传文件
      this.uploadVisible = false;
    }
  }
};
</script>