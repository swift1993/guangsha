<template>
    <el-tabs type="border-card">
        <el-tab-pane label="正在进行">
            <div class="exam" v-for="(value) in testing" :key="value.id">
                <div class="exam_name">考试名称：{{value.name}}</div>
                <div class="exam_time">考试时间：{{value.time}}</div>
                <el-button type="danger" class="go_exam" @click="goExam(value.id)">去考试</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="即将开始">
            <div class="exam" v-for="(value) in test" :key="value.id">
                <div class="exam_name">考试名称：{{value.name}}</div>
                <div class="exam_time">考试时间：{{value.time}}</div>
                <el-button type="danger" class="go_exam" @click="goExam(value.id)">去考试</el-button>
            </div>
        </el-tab-pane>
        <el-dialog
                title="提示"
                :visible.sync="centerDialog"
                width="30%"
                center>
            <p>1、相信自己，从容应考。要坚定必胜信念，因为中考所涉及的考点，我们已经在平时训练过无数次，只要正常发挥，我们就足以应对一切，假如超常发挥，那简直是锦上添花。</p>
            <p>2、卷面整洁，书写美观。字迹可以幼稚，可以不美，但字体大小要适中，尽量做到横平竖直，不要连笔。用笔的颜色不要过淡或过深，更不要中途更换用笔。尤其作文不要随意改动。（我们用中性笔答题）</p>
            <p>3、仔细审题，每分必争。磨刀不误砍柴工，审题务必认真仔细</p>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="myConfirm">{{sure}}</el-button>
  </span>
        </el-dialog>
    </el-tabs>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                testing:[
                    {
                        id:'1',
                        name:'高数',
                        time:'2020-07-20 9:30:00'
                    },
                    {
                        id:'2',
                        name:'高数2',
                        time:'2020-07-20 10:30:00'
                    },
                ],
                test:[
                    {
                        id:'1',
                        name:'大学物理',
                        time:'2020-07-20 9:30:00'
                    },
                    {
                        id:'2',
                        name:'线性代数',
                        time:'2020-07-20 10:30:00'
                    },
                ],
                show:true,
                count:'',
                timer:null,
                centerDialog:false,
                sure:'(10s)确定',
                id:''
            }
        },
        methods:{
            goExam(id){
                this.centerDialog = true;
                //获取倒计时
                const TIME_COUNT = 10;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                            this.sure = '('+this.count+'s)确定';
                            this.id = id;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.centerDialog = false;
                            this.sure = '(10s)确定';
                            this.$router.push({name:'examing',params:{id:id}});
                            this.id = id;
                        }
                    }, 1000)
                }
            },
            myConfirm(){
                this.centerDialog = false
                clearInterval(this.timer);
                this.timer = null;
                this.sure = '(10s)确定';
                this.$router.push({name:'examing',params:{id:this.id}})
            }
        }
    }
</script>

<style scoped>
    .exam{
        height: 80px;
        font-size: 15px;
        position: relative;
        border: 1px #cccccc solid;
        padding-left: 30px;
        margin-bottom: 10px;
    }
    .exam .exam_name{
        position: absolute;
        top: 10px;
        height: 30px;
        line-height: 30px;
    }
    .exam .exam_time{
        position: absolute;
        bottom: 10px;
        height: 30px;
        line-height: 30px;
    }
    .go_exam{
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>