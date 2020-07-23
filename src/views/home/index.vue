<template>
    <el-container>
        <el-aside style="width: 240px">
            <div class="title">
                <h2 @click="goHome" style="cursor: pointer">广厦考务系统</h2>
            </div>
            <div class="headimg">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="info">
                <p>学员：{{name}}</p>
                <p>学号：{{code}}</p>
                <p>班级：{{cla}}</p>
            </div>
            <el-menu
                    :unique-opened="true"
                    :router="true"
                    background-color="#5BA0FF"
                    text-color="#fff"
                    active-text-color="#ffd04b"
            >
                <el-menu-item index="change_password">密码修改</el-menu-item>
                <el-menu-item index="exam">我的考试</el-menu-item>
                <el-menu-item index="score">成绩查询</el-menu-item>
                <el-menu-item index="moni">模拟练习</el-menu-item>
                <el-menu-item index="random">随机练习</el-menu-item>
                <el-menu-item index="error">错题练习</el-menu-item>
                <el-menu-item index="notice">通知公告</el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <div class="notice" @click="message"><i class="el-icon-chat-line-round"></i></div>
                <div class="out" @click="out"><i class="el-icon-switch-button"></i></div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                name:'李佳佳',
                code:'202015556',
                cla:'二年三班',
            }
        },
        methods:{
            //退出
            out(){
                this.$confirm("退出登录, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(() => {
                    this.$router.push({ path: "/" });
                });
            },
            goHome(){
                    this.$router.push({path:"/index"});
            },
            message(){
                this.$router.push({name:'message'});
            }
        }
    }
</script>

<style scoped>
     .el-container{
        height: 100vh;
        font-size: 15px;
    }
     .el-header{
        background: #5BA0FF;
        color: #ffffff;
         position: relative;
    }
     .el-aside{
        background: #5BA0FF;
        color: #ffffff;
    }
    .el-main{
        color: #212121;
    }
    .el-menu{
        width: 100%;
    }
    .title{
        margin: 20px auto;
        text-align: center;
    }

    .headimg{
        margin: 0 auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .headimg img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .el-menu-item{
        text-align: center;
        border-bottom: 1px #ffffff solid;
    }
    .info{
        margin-left: 25%;
    }

    /*消息图标*/
    .notice{
        position: absolute;
        top: 20%;
        right: 100px;
        width: 40px;
        height: 40px;
        font-size: 30px;
    }
    /*退出按钮*/
    .out{
        position: absolute;
        top: 20%;
        right: 40px;
        width: 40px;
        height: 40px;
        font-size: 30px;
    }
</style>