<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            mode="vertical"
        >
<!--            <el-submenu index="1">-->
<!--                <template slot="title">-->
<!--                    <i class="el-icon-location"></i>-->
<!--                    <span slot="title">导航一</span>-->
<!--                </template>-->
<!--                <el-menu-item-group>-->
<!--                    <span slot="title">分组一</span>-->
<!--                    <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                    <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--                </el-menu-item-group>-->
<!--                <el-menu-item-group title="分组2">-->
<!--                    <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--                </el-menu-item-group>-->
<!--                <el-submenu index="1-4">-->
<!--                    <span slot="title">选项4</span>-->
<!--                    <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--                </el-submenu>-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="2">-->
<!--                <i class="el-icon-menu"></i>-->
<!--                <span slot="title">导航二</span>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="3" disabled>-->
<!--                <i class="el-icon-document"></i>-->
<!--                <span slot="title">导航三</span>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="4">-->
<!--                <i class="el-icon-setting"></i>-->
<!--                <span slot="title">导航四</span>-->
<!--            </el-menu-item>-->
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import {mapGetters} from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
    components: {SidebarItem},
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        routes() {
            return this.$router.options.routes
        },
        activeMenu() {
            const route = this.$route
            const {meta, path} = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        variables() {
            return variables
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    }
}
</script>
