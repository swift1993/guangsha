<template>
    <div class="login-container">
        <div class="title"><h1>广厦学院业税财一体实验室考务/练习系统</h1></div>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
            <div id="headimg"><img src="../../assets/login.png" alt=""></div>
            <el-form-item prop="username" >
                <el-input v-model="form.username" placeholder="请输入学号"></el-input>
            </el-form-item>
            <el-form-item prop="password" >
                <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                },
                rules:{
                    username: [
                        {required: true, message: "用户名不能为空", trigger: 'blur'},
                        {min: 3, max: 10, message: "用户名3-5位", trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                           this.$refs[formName].validate(valid => {
                               if (valid) {
                                     // 通过的逻辑
                                   console.log(this.form.username)
                                   this.$router.push({name:'index'})
                                  } else {
                                     console.log('验证失败');
                                     return false;
                                    }
                             });
                    }
        }
    };
</script>

<style scoped>
    .login-form {
        width: 350px;
        margin: 160px auto; /* 上下间距160px，左右自动居中*/
        background-color: rgb(255, 255, 255, 0); /* 透明背景色 */
        padding: 30px;
    }

    /* 背景 */
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../assets/login.png") no-repeat;
        background-size: 100%;
    }

    /*为输入框添加圆角*/
    /deep/ .el-input__inner{
        border-radius: 15px;
    }

    /**/
    /deep/ .el-form-item__content{
        margin-left: 0 !important;
    }

    /deep/ .el-button{
        width: 100%;
        border-radius: 15px;
    }

    #headimg{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    #headimg img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .title{
       text-align: center;
    }

</style>