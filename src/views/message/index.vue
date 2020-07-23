<template>
    <div class="message">
        <div>
            <h3>消息提醒</h3>
        </div>
        <el-collapse @change="handleChange" v-model="activeNames">
            <el-collapse-item v-for="(value) in messageData" :key="value.id" :name="value.id">
                <template slot="title">
                    <div class="message_item">
                        <i class="el-icon-gs-dian" :class="value.is_read?'read':''"></i>
                        <span class="message_title">{{value.title}}</span>
                        <span class="message_date">{{value.date}}</span>
                    </div>
                </template>
                <div class="message_content">{{value.content}}</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                messageData:[
                    {
                        id:'1',
                        title:'消息1',
                        content:'这是第一条消息',
                        date:'2020-07-22',
                        is_read:0
                    },
                    {
                        id:'2',
                        title:'隐形消息',
                        content:'重大消息',
                        date:'2020-07-20',
                        is_read:1
                    }
                ],
                activeNames:[],
                is_read:false,
            }
        },
        methods:{
            handleChange(val){
                console.log(val);
                console.log(this.activeNames);
                this.is_read = true;
            },
        }
    }
</script>

<style scoped>
    .message_item{
        position: relative;
        height: 50px;
        width: 100%;
        line-height: 50px;
    }
    .message_title{
        position: absolute;
        left: 20px;
    }
    .message_date{
        position: absolute;
        right: 20px;
    }
    .read{
        color: #bd2c00;
    }
</style>