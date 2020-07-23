<template>
    <div>
        <ul class="notice_list">
            <li v-for="(value,index) in noticeData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" @click="view(value.id)">
                <div class="notice_title">{{value.title}}</div>
                <div class="notice_type">分类：{{value.type}}</div>
            </li>
            <el-pagination
                    background
                    layout="prev,pager,next"
                    :page-size="pagesize"
                    :total="count"
                    @current-change="current_change"
            >

            </el-pagination>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                noticeData:[
                    {
                        id:'1',
                        type:'学习须知',
                        title:'【金华日报】期末考 “准空乘”秀才艺',
                        content:'【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺'
                    },
                    {
                        id:'2',
                        type:'学习须知',
                        title:'【金华日报】期末考 “准空乘”秀才艺',
                        content:'【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺'
                    },
                    {
                        id:'3',
                        type:'学习须知',
                        title:'【金华日报】期末考 “准空乘”秀才艺',
                        content:'【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺【金华日报】期末考 “准空乘”秀才艺'
                    },
                ],
                count:3,
                pagesize:2,
                currentPage:1,
            }
        },
        methods:{
            current_change:function(currentPage){
                this.currentPage = currentPage;
                console.log(currentPage);
            },
            view:function (id) {
                this.$router.push({name:'notice_info',params:{id:id}});
            }
        }

    }
</script>

<style scoped>
    .notice_list{
        list-style: none;
    }
    .notice_list li{
        height: 80px;
        margin-bottom: 20px;
        border: 1px #cccccc solid;
        cursor: pointer;
    }
    .notice_title {
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .notice_type{
            margin-left: 20px;
        }

</style>