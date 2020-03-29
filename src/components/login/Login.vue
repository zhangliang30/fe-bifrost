<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avator_box">
                <img src="../../assets/logo.png">
            </div>
            <!-- form -->
            <el-form :model="loginForm" :rules="loginRules" ref="loginRef" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" show-password></el-input>
                </el-form-item>
                <el-form-item>
                </el-form-item>
                <el-form-item class="btns">
                    <!-- 绑定点击事件回调方法 -->
                    <el-button type="primary" @click="login">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        // 密码规则: 大小写字母、数字和特殊符号至少包含两种
        var pwPattern =  /^(?![A-Za-z]+$)(?![A-Z0-9]+$)(?![a-z0-9]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,16}$/
        // 定义密码校验方法
        var passwordCheck = (rule, value, callback) => {
            if (!(pwPattern.test(value))) {
                // 正则校验失败
                return callback(new Error('密码为大小写数字和特殊符号中至少两种'))
            } else {
                return callback()
            }
            callback()
        }
        return {
            // 登录表单数据绑定
            loginForm: {
                username: '',
                password: ''
            },
            // 表单规则绑定
            loginRules: {
                username: [
                    {required: true, message: '请输入帐号', trigger: 'blur' }
                ],
                password: [
                    // 密码通过上面定义的check函数进行校验
                    {required: true, validator: passwordCheck, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 点击登录按钮后触发login函数
        login() {
            this.$refs['loginRef'].validate((valid) => {
                // 规则预校验
                if (!valid) {
                    return;
                }
                // 校验成功，发起登录请求
                console.log(this.$http.post('', this.loginForm));
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 80%;
    height: 60%;
    max-width: 450px;
    max-height: 350px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(
        -50%, -50%
    );
    .avator_box {
        height: 30%;
        width: 30%;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(
            -50%, -50%
        );
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_form {
    position: absolute;
    top: 30%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .btns {
        left: 40%;
    }
}
</style>
