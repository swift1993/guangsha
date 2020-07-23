<template>
    <div>
        <el-dropdown class="moni_title">
            <el-button type="primary">
                考试名称 <i class="el-icon-arrow-down"></i>
            </el-button>
            <el-dropdown-menu>
                <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="moni_list">
            <div class="moni" v-for="(value) in moniData" :key="value.id">
                <div class="moni_name">
                    课程名称：{{value.name}}
                </div>
                <div class="moni_description">
                    简介：{{value.description}}
                </div>
                <el-button type="primary" size="medium" class="go_moni" @click="goMoni">
                    去模拟
                </el-button>
                <el-button type="info" size="medium" class="moni_record" @click="moniRecord">
                    模拟记录
                </el-button>
            </div>
        </div>
        <el-dialog
                title="模拟考试"
                :visible.sync="centerDialog"
                width="30%"
                center>
            <div class="moni_tip">
                <p>模拟考试时长：02:00:00</p>
                <p>模拟考试规则：</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "moni",
        data(){
            return{
                moniData:[
                    {
                        id:'1',
                        name:'高数1期末考模拟',
                        description:'这是一场巨大的考验'
                    },
                    {
                        id:'2',
                        name:'大学物理1期末考模拟',
                        description:'这也是一场巨大的考验'
                    },
                ],
                centerDialog:false,
            }
        },
        methods:{
            myConfirm(){
                this.$router.push({name:'examing'})
            },
            goMoni(){
                this.centerDialog = true;
            },
            moniRecord(){
                this.$router.push({name:'moni_record'})
            }
        }
    }
</script>

<style scoped>
    .moni_list{
        margin-top: 40px;
        border-left: 1px #cccccc solid;
        border-right: 1px #cccccc solid;
    }
    .moni{
        position: relative;
        height: 115px;
        border-top: 1px #cccccc solid;
        border-bottom: 1px #cccccc solid;
        margin-bottom: 20px;
    }
    .moni_name{
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .moni_description{
        position: absolute;
        top: 60px;
        left: 20px;
    }
    .go_moni{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 100px;
    }
    .moni_record{
        position: absolute;
        top: 60px;
        right: 20px;
        width: 100px;
    }
    .moni_tip{
        text-align: center;
    }
</style>