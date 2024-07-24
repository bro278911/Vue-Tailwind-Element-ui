<template>
    <div>
      <h1>Home Page</h1>
      <MyForm />
    </div>
  </template>
  
  <script>
  import MyForm from '../components/MyForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      MyForm
    }
  }
  </script>
  
  <style scoped>
  /* Home 視圖特定樣式 */
  </style>
  