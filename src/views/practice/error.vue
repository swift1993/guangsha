<template>
    <div>
        <div class="main">
            <div class="exam_title">
                <div class="exam_question_type">单选题</div>
                <div class="exam_count">{{id}} / {{total}}</div>
            </div>

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

            <div class="analysis" :class="answerShow?'show':'hide'">
                <span class="true_answer">正确答案： </span>  <span>你的答案： </span>
                <div class="analysis_info">
                    解析：
                </div>
            </div>

            <div class="bottom">
                <el-button class="exam_question_last">上一题</el-button>
                <el-button class="answer_view" @click="answerView">查看答案</el-button>
                <el-button class="exam_question_next">下一题</el-button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "error",
        data(){
            return{
                radio:'',
                answerShow:false,
                id:'50',
                total:'100'
            }
        },
        methods:{
            answerView(){
                this.answerShow = true;
            }
        }
    }
</script>

<style scoped>
    .main{
        border: 1px #cccccc solid;
        border-bottom: none;
        height: 800px;
    }
    .answer_list{
        list-style: none;
        font-size: 15px;
    }
    .answer_list li {
        margin-bottom: 30px;
    }
    .exam_title{
        position: relative;
        height: 60px;
    }
    .exam_question_type{
        position: absolute;
        left: 20px;
        top: 20px;
    }
    .exam_count{
        position: absolute;
        right: 20px;
        top: 20px;
        border: 1px #000000 solid;
        text-align: center;
        width: 120px;
        height: 30px;
        line-height: 30px;
        border-radius: 6px;
        color: #5BA0FF;
    }
    .exam_question{
        margin: 20px 40px;
    }
    .bottom{
        margin-top: 5%;
    }
    .exam_question_last{
        margin-left: 5%;
    }
    .exam_question_next{
        margin-left: 33%;
    }
    .answer_view{
        margin-left: 33%;
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
    .hide{
        display: none;
    }
    .show{
        display: block;
    }

</style>