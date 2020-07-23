<template>
    <div>
        <div class="header">
            <span class="exam_name">考试名称：高数1期末考试</span>
            <span class="exam_time">交卷倒计时：{{time}}</span>
            <el-button type="danger" class="exam_submit" @click="examSubmit">交卷</el-button>
        </div>
        <div class="layout">
            <div class="aside">
                <div class="exam_question_card">
                    答题卡
                </div>
                <span class="exam_question_code" :class="true?'done':''" v-for="(value,index) in count" :key="index">{{value}}</span>
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
        <el-dialog
                title="提示"
                :visible.sync="dialog"
                width="30%"
                center>
            <div style="text-align: center">
                <p>您好</p>
                <p>考试时间已到</p>
                <p>系统即将自动交卷</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">（{{s}}）秒后自动交卷</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "examing",
        data(){
            return {
                count:20,
                radio:'',
                centerDialog:false,
                done:'20',
                undo:'30',
                timer:null,
                show:true,
                msec:10,
                h:'',
                m:'',
                s:'',
                time:'02:00:00',
                dialog:false
            }
        },
        mounted() {
            this.countdown();
        },
        methods:{
            myConfirm(){
                this.centerDialog = false;
                this.$message('提交成功');
            },
            examSubmit(){
                this.centerDialog = true;
                console.log(this.$route.params.id);
            },
            //倒计时
            countdown() {
                let msec = this.msec;
                var that = this;
                that.timer = setInterval(function () {
                    let h = parseInt(msec  / 60 / 60 % 24);
                    let m = parseInt(msec  / 60 % 60);
                    let s = parseInt(msec  % 60);
                    that.h = h > 9 ? h : '0' + h;
                    that.m = m > 9 ? m : '0' + m;
                    that.s = s > 9 ? s : '0' + s;
                    that.time = that.h+':'+that.m+':'+that.s;
                    if(msec>0){
                        msec--;
                        if(msec<5){
                           that.dialog = true;
                           that.s = s;
                        }
                    }else{
                        that.dialog = false;
                        clearInterval(that.timer);
                        that.$router.push({name:'submit'})
                    }

                }, 1000)
            },

        },
        computed:{
            times:function(){
                    return 10;
                    }
        },
        beforeDestroy() {
            clearInterval(this.timer);
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
        left: 2%;
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
    .exam_question_code{
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin: 20px 18px;
        line-height: 40px;
        border: 1px #cccccc solid;
    }
    .done{
        background-color: #63a35c;
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
        margin-top: 20%;
    }
    .exam_question_next{
        margin-left: 60%;
    }

</style>