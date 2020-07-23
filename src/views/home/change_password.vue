<template>
    <div class="change">
        <el-form label-position="left" label-width="80px" :model="form" ref="form" :rules="rules">
            <el-form-item label="原密码" prop="password">
                <el-input v-model="form.password" type="password">

                </el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="new_password">
                <el-input v-model="form.new_password" type="password">

                </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="sure_password">
                <el-input v-model="form.sure_password" type="password">

                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: "change_password",
        data(){
            //此处即表单发送之前验证
            let validateNewPassword = (rule, value, callback) => {
                if (value === this.form.password) {
                    callback(new Error('新密码不能与原密码相同!'))
                } else {
                    callback()
                }
            }
            let validateNewPassword2 = (rule, value, callback) => {
                if (value !== this.form.new_password) {
                    callback(new Error('与新密码不一致!'))
                } else {
                    callback()
                }
            }
            return{
                form:{
                    password:'',
                    new_password:'',
                    sure_password:'',
                },
                rules:{
                    password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'}
                    ],
                    new_password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'},
                        {validator:validateNewPassword,trigger: 'blur'},
                    ],
                    sure_password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 3, max: 10, message: "密码3-5位", trigger: 'blur'},
                        {validator:validateNewPassword2,trigger: 'blur'},
                    ],
                }
            }
        },
        methods:{
            onSubmit (formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$message.success('密码已修改')
                        /*let { newPassword, password } = this.form
                        updatePassword({ newPassword, password }).then(() => {
                            this.$message.success('密码已修改')
                        })*/
                    } else {
                        this.$message.error('请正确填写表单')
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .change{
        width: 50%;
        margin: 0 auto;
    }
</style>