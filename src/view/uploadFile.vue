<template>
  <div>
    <button class="upload-button" @click="openFileInput">题库上传</button>
    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
  </div>
</template>

<style>
.upload-button {
  position: absolute;
  bottom: 25px;
  left: 4.5%;
  background-color: #0b66c0;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'QuestionBankUpload',
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const fileInput = event.target;
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
        this.uploadFile(selectedFile);
      }
    },
    uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('/upload', formData)
          .then(response => {
            // 处理上传成功后的响应
            console.log(response.data);
            this.showNotification('上传成功！');
          })
          .catch(error => {
            // 处理上传失败的情况
            console.error(error);
            this.showNotification('上传失败！');

          });
    },
    showNotification(message) {
      this.$alert(message);
    }
  }
};
</script>


