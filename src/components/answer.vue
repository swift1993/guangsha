<template>
    <div>
        <div class="header">
                <span class="exam_name">考试名称：高数1期末考试</span>
                <span class="right">正确</span>
                <span class="error">错误</span>
                <span class="undo">未做</span>
        </div>
        <div class="layout">
            <div class="aside">
                <div class="exam_question_card">
                    答题卡
                </div>
                <div v-for="(value,index) in examData" :key="index" class="exam_question_type_group">
                    <div class="exam_question_type_card">{{value.question_type}}</div>
                    <span class="exam_question_code" :class="[item.answer == item.you_answer?'right_style':'',item.you_answer != '' && item.answer != item.you_answer?'error_style':'',item.you_answer == ''?'undo_style':'']" v-for="(item,i) in value.question_list" :key="i">{{item.id}}</span>
                </div>

            </div>
            <div class="main">
                <div class="exam_question_type">单选题</div>
                <div class="exam_question">我是问题</div>

                <el-radio-group v-model="radio">
                    <ul class="answer_list">
                        <li>
                            <el-radio :label="'A'">A.</el-radio>
                        </li>
                        <li>
                            <el-radio :label="'B'">B.</el-radio>
                        </li>
                        <li>
                            <el-radio :label="'C'">C.</el-radio>
                        </li>
                        <li>
                            <el-radio :label="'D'">D.</el-radio>
                        </li>
                    </ul>
                </el-radio-group>

                <div class="analysis">
                    <span class="true_answer">正确答案： </span>  <span>你的答案： </span>
                    <div class="analysis_info">
                        解析：
                    </div>
                    <div class="analysis_comment">
                        评语：
                    </div>
                </div>

                <div class="bottom">
                    <el-button class="exam_question_last">上一题</el-button>
                    <el-button class="exam_question_next">下一题</el-button>
                </div>

            </div>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="centerDialog"
                width="30%"
                center>
            <div style="text-align: center">
                <p>当前已做{{done}}道 未做{{undo}}道</p>
                <p>一旦交卷无法撤销</p>
                <p>是否确认交卷？</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">确认交卷</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "answer",
        data(){
            return {
                time:'02:59:59',
                count:20,
                radio:'',
                centerDialog:false,
                done:'20',
                undo:'30',
                right:true,
                error:true,
                undone:true,
                examData:[
                    {
                        question_type:'填空题',
                        question_list:[
                            {
                                type:'填空题',
                                title:'填1',
                                id:'1',
                                answer:'1',
                                you_answer:'1'
                            },
                            {
                                type:'填空题',
                                title:'填2',
                                id:'2',
                                answer:'25',
                                you_answer:''
                            }
                        ]
                    },
                    {
                        question_type:'选择题',
                        question_list:[
                            {
                                type:'选择题',
                                title:'选1',
                                id:'3',
                                answer:'A',
                                you_answer:'A'
                            },
                            {
                                type:'选择题',
                                title:'选2',
                                id:'4',
                                answer:'A',
                                you_answer:'B'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            myConfirm(){
                this.centerDialog = false;
                this.$message('提交成功');
            },
            examSubmit(){
                this.centerDialog = true;
                console.log(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>
    .header{
        position: relative;
        border: 1px #cccccc solid;
        font-size: 15px;
        height: 60px;
    }

    .layout{
        position: relative;
        height: 750px;
    }

    .aside{
        position: absolute;
        top: 20px;
        width: 20%;
        height: 100%;
        border: 1px #cccccc solid;
        border-bottom: none;
    }
    .main{
        position: absolute;
        top: 20px;
        left: 22.5%;
        width: 77.5%;
        height: 100%;
        border: 1px #cccccc solid;
        border-bottom: none;
    }
    .exam_name{
        position: absolute;
        left: 35%;
        top: 30%;
    }
    .exam_time{
        position: absolute;
        left: 65%;
        top: 30%;
    }
    .exam_submit{
        position: absolute;
        left: 90%;
        top: 12%;
    }
    .right_style{
        background-color: #63a35c;
        color: #ffffff;
    }
    .error_style{
        background-color: #FF0000;
        color: #ffffff;
    }
    .undo_style{
        background-color: #FD8709;
        color: #ffffff;
    }
    .exam_question_type_card{
        margin-left: 20px;
    }
    .exam_question_code{
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin: 20px 18px;
        line-height: 40px;
        border: 1px #cccccc solid;
    }
    .right{
        position: absolute;
        top: 15%;
        left: 50%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        border: 1px #cccccc solid;
        background-color: #63a35c;
        color: #ffffff;
    }
    .error{
        position: absolute;
        top: 15%;
        left: 55%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        border: 1px #cccccc solid;
        background-color: #FF0000;
        color: #ffffff;
    }
    .undo{
        position: absolute;
        top: 15%;
        left: 60%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        border: 1px #cccccc solid;
        background-color: #FD8709;
        color: #ffffff;
    }
    .exam_question_card{
        margin-bottom: 40px;
        text-align: center;
    }
    .answer_list{
        list-style: none;
        font-size: 15px;
    }
    .answer_list li {
        margin-bottom: 30px;
    }
    .exam_question_type{
        margin: 20px;
    }
    .exam_question{
        margin: 40px;
    }
    .bottom{
        margin-left: 20%;
        margin-top: 10%;
    }
    .exam_question_next{
        margin-left: 60%;
    }
    .analysis{
        padding: 40px;
        background-color: #cccc66;
        border-top: 1px #cccccc dotted;
        border-bottom: 1px #cccccc dotted;
    }
    .true_answer{
        margin-right: 300px;
    }
    .analysis_info{
        margin-top: 30px;
    }
    .analysis_comment{
        margin-top: 30px;
    }

</style>