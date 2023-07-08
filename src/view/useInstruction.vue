<template>
<div class="self">
    <div style="width: 100%;height: 5vh;">
            <h2 style="font-size: 30px;"><i class="el-icon-warning-outline"></i>使用说明</h2>
        </div>
        <el-divider/>

        <el-skeleton :rows="6" animated />
        <el-divider/>

        <div class="block">
        <el-timeline>
                <el-timeline-item timestamp="步骤一" placement="top">
                <el-card>
                    <h2>充值余额</h2>
                    <p>如果你是第一次使用这款软件，那么我建议你直接充值100rmb，因为我们的题库都是经过国家认证题库，保证每一所高校都所使用，所以价格来说相对比较高</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="步骤二" placement="top">
                <el-card>
                    <h2>购买你需要的题库</h2>
                    <p>快到期末了？还没开始复习？！没事稳了！购买相应的题库！保证你成绩90以上，如果没到90建议vivo50</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="步骤三" placement="top">
                <el-card>
                    <h2>开始刷题之旅</h2>
                    <p>购买完成后就可以在“我的题库”查看你所购买的相应的题库，开始刷题啦！  tips:不要浪费你的钱哦，每天都要来刷哦！</p>
                </el-card>
                </el-timeline-item>
        </el-timeline>
    </div>
    <div>
        <el-button type="text" @click="dialogVisible = true">对我们的产品有意见？</el-button>
            <el-dialog
            title="你小子挺狂"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>不准有意见，不接受任何意见</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">下次不敢了</el-button>
                <el-button type="primary" @click="dialogVisible = false">好的</el-button>
            </span>
            </el-dialog>
    </div>
</div>
</template>


<script>

export default {

    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },

}

</script>
