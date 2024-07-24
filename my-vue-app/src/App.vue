<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <!-- 側邊欄 -->
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item index="1" @click="navigateTo('/')">Home</el-menu-item>
          <el-menu-item index="2" @click="navigateTo('/about')">About</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 頂部導航欄 -->
          <h1>My Vue App</h1>
        </el-header>
        <el-main>
          <!-- 路由視圖 -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <!-- 底部信息 -->
          <p>© 2024 My Vue App</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>