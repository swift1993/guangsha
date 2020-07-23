<template>
    <div>
        <div class="exam_title">考试名称：高数1期末考试</div>
        <div class="exam_icon">
            <i class="el-icon-success"></i>
            <div class="submit">交卷完成</div>
        </div>
        <div class="exam_content">
            <p>请等待后台评分</p>
            <p>预计成绩发布时间：2020-07-20 09:00:00</p>
            <el-button type="warning" class="submit_button" @click="sure">我知道了</el-button>
        </div>
    </div>
</template>

<script>

    import {disableBrowserBack} from "../utils/utils";

    export default {
        name: "submit_automatic",
        mounted() {
            disableBrowserBack();
        },
        methods:{
            sure(){
                this.$router.push({name:'exam'})
            }
        }
    }
</script>

<style scoped>
    .exam_title{
        border: 1px #cccccc solid;
        text-align: center;
        height: 60px;
        font-size: 15px;
        line-height: 60px;
        margin-bottom: 60px;
    }
    .exam_icon{
        text-align: center;
        margin-bottom: 60px;
    }
    .el-icon-success{
        font-size: 60px;
        color: #55a532;
        margin-bottom: 20px;
    }
    .submit{
        font-size: 20px;
        font-weight: bolder;
        color: #cccccc;
    }
    .submit_button{
        margin-top: 60px;
        margin-bottom: 20px;
    }
    .exam_content{
        text-align: center;
        border: 1px #cccccc solid;
        width: 30%;
        margin: 0 auto;
        padding-top: 40px;
    }
</style>