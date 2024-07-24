<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 新增的導覽列 -->
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="2" class="logo-col" style="display: flex; align-items: center;">
            <a href="/"><img src="../public/logo_ZHOU.png" alt="Logo" class="logo"></a>
          </el-col>
          <el-col :span="1" class="text-right avatar-col" style="display: flex; align-items: center; justify-content: flex-end;">
            <el-avatar src="../public/logo_ZHOU.png"></el-avatar>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu vslot="dropdown">
                <el-dropdown-item>訊息</el-dropdown-item>
                <el-dropdown-item>登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside-menu">
          <!-- 側邊欄 -->
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1" @click="navigateTo('/')"> <el-icon>
                <HomeFilled />
              </el-icon>
              Home</el-menu-item>
            <el-menu-item index="2" @click="navigateTo('/about')"> <el-icon>
                <InfoFilled />
              </el-icon>
              About</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-page-header @back="goBack">
            <template #content>
              <span class="text-large font-600 mr-3"> Title </span>
            </template>
          </el-page-header>
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
    </el-container>
    <!-- 新增的漢堡選單抽屜 -->
    <el-drawer title="Menu" v-model:visible.sync="drawer" direction="ltr">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" @click="navigateTo('/')"> <i class="el-icon-house"></i>
          Home
        </el-menu-item>
        <el-menu-item index="2" @click="navigateTo('/about')"> <i class="el-icon-info"></i>
          About</el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>

<style scoped>
/* 新增的RWD样式 */
.logo {
  height: 60px;
}

@media (max-width: 768px) {
  .logo-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .aside-menu {
    display: none;
  }

  .burger-menu-col {
    display: block;
  }

  el-header h1 {
    font-size: 1.5em;
  }
}

@media (min-width: 769px) {
  .logo-col {
    display: flex;
    align-items: center;
  }

  .avatar-col {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .burger-menu-col {
    display: none;
  }
}
</style>