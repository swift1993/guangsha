<template>
    <div>
        <div class="moni">
            <p>课程名称：</p>
            <p>简介：</p>
        </div>
        <el-table
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                border
                style="width: 99.9%">
            <el-table-column
                    prop="id"
                    label="序号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="test"
                    label="试卷"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="考试时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="得分"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="动作">
                <el-link @click="view">查看详情</el-link>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                hide-on-single-page="true"
                layout="prev,pager,next"
                :page-size="pagesize"
                :total="total"
                @current-change="current_change"
        >

        </el-pagination>
        <el-dialog
                title="考试详情"
                :visible.sync="centerDialog"
                width="30%"
                center>
            <div class="moni_tip">
                <p>考试名称：</p>
                <p>考试时间：</p>
                <p>正确题数：</p>
                <p>错误题数：</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">查看答案</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "moni_record",
        data(){
            return{
                tableData:[
                    {
                        id:'1',
                        test:'高数1',
                        time:'考试时间',
                        score:'90'
                    },
                    {
                        id:'2',
                        test:'高数1',
                        time:'考试时间',
                        score:'90'
                    },
                    {
                        id:'3',
                        test:'高数1',
                        time:'考试时间',
                        score:'90'
                    },
                    {
                        id:'4',
                        test:'高数1',
                        time:'考试时间',
                        score:'90'
                    }
                ],
                pagesize:10,
                currentPage:1,
                total:4,
                centerDialog:false
            }
        },
        methods:{
            current_change(currentPage){
                this.currentPage = currentPage;
            },
            view(){
               this.centerDialog = true;
            },
            myConfirm(){
                this.$router.push({name:'answer'});
            }
        }
    }
</script>

<style scoped>
    .moni{
        padding: 20px;
        margin-bottom: 20px;
        border: 1px #cccccc solid;
    }
    .moni_tip{
        text-align: center;
    }
</style>