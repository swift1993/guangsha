<template>
    <div>
        <div class="notice">
            <i class="el-icon-gs-tongzhi"></i>
            <span>【金华日报】期末考 “准空乘”秀才艺</span>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="5">
                    <div class="content-item" @click="go('exam')">
                        <div class="icon">
                            <i class="el-icon-gs-bichi"></i>
                        </div>
                        <div class="tip">
                            我的考试
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="content-item"  @click="go('score')">
                        <div class="icon">
                            <i class="el-icon-gs-chengjichaxun" style="color: #bd2c00"></i>
                        </div>
                        <div class="tip">
                            成绩查询
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="content-item" @click="go('moni')">
                        <div class="icon">
                            <i class="el-icon-gs-monilianxi" style="color: #5BA0FF"></i>
                        </div>
                        <div class="tip">
                            模拟练习
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5">
                    <div class="content-item" @click="go('random')">
                        <div class="icon">
                            <i class="el-icon-gs-suijilianxi" style="color: #55a532"></i>
                        </div>
                        <div class="tip">
                            随机练习
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="content-item" @click="go('error')">
                        <div class="icon">
                            <i class="el-icon-gs-cuotilianxi" style="color: #a71d5d"></i>
                        </div>
                        <div class="tip">
                            错题练习
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="content-item">
                        <div class="icon">
                            <i class="el-icon-gs-shicao" style="color: #0077aa"></i>
                        </div>
                        <div class="tip">
                            实操练习
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5">
                    <div class="content-item" @click="question">
                        <div class="icon">
                            <i class="el-icon-gs-dayi" style="color: #ee9900"></i>
                        </div>
                        <div class="tip">
                            答疑咨询
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="content-item" @click="go('notice')">
                        <div class="icon">
                            <i class="el-icon-gs-tongzhi" style="color: #63a35c"></i>
                        </div>
                        <div class="tip">
                            通知公告
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="答疑咨询" :visible.sync="dialogFormVisible" center width="30%">
            <el-form :model="form">
                <el-form-item label="活动名称" label-width="120px">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请在此处填写你要咨询的问题"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                form:{
                    name:''
                },
                dialogFormVisible:false
            }
        },
        methods:{
            go(url){
                this.$router.push({name:url})
            },
            question(){
                this.dialogFormVisible = true;
            }
        }
    }
</script>

<style scoped>
    .notice{
        height: 40px;
        margin-bottom: 60px;
    }
    .notice i{
        color: #5BA0FF;
        font-size: 30px;
        height: 40px;
        line-height: 40px;
    }
    .notice span{
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        margin-left: 30px;
    }

    .el-col{
        height: 200px;
    }

    .content-item{
        width: 200px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        text-align: center;
        border: 3px #5BA0FF solid;
        border-radius: 8px;
        cursor: pointer;
    }

    .content-item .icon{
        position: absolute;
        top: 40px;
        left: 36%;
    }

    .content-item .tip{
        position: absolute;
        top: 140px;
        left: 32%;
        font-size: 20px;
        font-weight: bolder;
        color: #cccccc;
    }

    .content-item .icon i{
        font-size: 60px;
        color: #b3d4fc;
    }

    .el-col{
        margin-bottom: 30px;
    }

</style>