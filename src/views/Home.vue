<template>
    <el-container class="home-container">
        <el-header>
            <span>电商后台管理系统</span> 
            <el-button type="info">Log Out</el-button>
        </el-header>
        <el-container>
            <el-aside :width="isCollapse ? '64px' : '150px'">
                <div class="troggle-button" @click="troggleCollapse"><i class="el-icon-more-outline"></i></div>
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="rgb(79, 203, 252)" unique-opened
                 :collapse="isCollapse" :collapse-transition="false" router>
                    <el-submenu :index="'/' + item.path" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <i :class="item.icron"></i>
                            <span>{{item.authName}}</span>
                        </template>
                        <!-- subMenu -->
                        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="less" scoped>
.home-container {
    height: 100%;
}

.el-header {
    height: 200px;
    background-color: rgb(51, 49, 49);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px ;
    > div {
        display: flex;
        align-items: center;
    }
}

.el-aside {
    background-color: rgb(83, 81, 81);
    .el-menu {
        border-right: none;
    }
}

.troggle-button {
    background-color: #545c64;
    line-height: 24px;
    color: white;
    text-align: center;
    cursor: pointer;
}
</style>

<script>
  import menusData from '../assets/data/menus.json'
  export default {
    data() {
      return {
        // 侧边菜单数据
        menuList: menusData,
        // 侧边菜单折叠
        isCollapse: false
      }
    },
    methods: {
        troggleCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
  };
</script>