<template>
    <div>
        <el-dropdown class="score_title">
            <el-button type="primary">
                考试名称 <i class="el-icon-arrow-down"></i>
            </el-button>
            <el-dropdown-menu>
                <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-time-picker
                is-range
                v-model="value1"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围" class="score_time">
        </el-time-picker>

        <el-table
                :data="tableData.slice((currentPage-1)*parseInt(pageSize),currentPage*parseInt(pageSize))"
                border
                style="width: 95%;" class="score_list">
            <el-table-column
                    prop="name"
                    label="考试名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="试卷"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="考试次数"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="考试时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="得分"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="排名"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="动作">
                <template slot-scope="scope">
                    <el-link @click="view(scope.row)">查看详情</el-link>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center;margin-top: 30px;">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    page-size="6"
                    :total="total"
                    @current-change="current_change">
            </el-pagination>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="centerDialog"
                width="30%"
                center>
            <div style="text-align: center">
                <p>考试名称:{{name}}</p>
                <p>考试时间:{{time}}</p>
                <p>正确题数:{{right}}</p>
                <p>错误题数:{{error}}</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">查看答案</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                value1: [new Date(2020, 9, 10, 8, 40), new Date(2020, 9, 10, 9, 40)],
                tableData:[{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小豹',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                pageSize:6,
                total:7,
                currentPage:1,
                centerDialog:false,
                name:'',
                time:'',
                right:'',
                error:''
            };
        },
        methods:{
            view(row){
                this.centerDialog = true;
                console.log(row);
                this.name = row.name;
                this.time = row.date;
                this.right = row.name;
                this.error = row.name;
            },
            current_change:function(currentPage){
                this.currentPage = currentPage;
            },
            myConfirm(){
                this.$router.push({name:'answer'});
            }
        }
    }
</script>

<style scoped>
    .score_title{
        margin: 40px 80px 40px 40px;
    }
    .score_list{
        margin-left: 40px;
    }
</style>