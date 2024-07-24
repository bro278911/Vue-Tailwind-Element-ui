<template>
  <div class="max-w-md mx-auto mt-10">
    <el-card class="box-card">
      <h1 class="text-2xl font-bold mb-5">測試登入</h1>
      <el-form ref="form" :model="form" :rules="rules" @submit.prevent="handleSubmit">
        <el-form-item label="帳號" prop="username">
          <el-input v-model="form.username" placeholder="請輸入帳號"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input v-model="form.password" type="password" placeholder="請輸入密碼"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">登入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyForm',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '請輸入帳號', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            message: `${this.form.username} 登入成功!`,
            type: 'success'
          });
          this.init();
        } else {
          this.$message({
            message: '請填寫完整的表單',
            type: 'error'
          });
        }
      });
    },
    init() {
      this.form.username = '';
      this.form.password = '';
    }
  },
}
</script>

<style scoped>
/* 可以在這裡添加任何特定於這個組件的樣式 */
</style>