<template>
    <div class="max-w-md mx-auto mt-10">
      <el-card class="box-card">
        <h1 class="text-2xl font-bold mb-5">測試</h1>
        <el-form @submit.prevent="handleSubmit">
          <el-form-item label="Username">
            <el-input v-model="username" placeholder="Enter your username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="password" type="password" placeholder="Enter your password"></el-input>
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
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        this.$message({
          message: `Username: ${this.username}\nPassword: ${this.password}`,
          type: 'success'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* 可以在這裡添加任何特定於這個組件的樣式 */
  </style>
  