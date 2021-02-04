<template>
    <!--    <el-menu class="avatar-container">-->
    <!--        <el-submenu>-->
    <!--            <template slot="title">-->
    <!--                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">-->
    <!--            </template>-->
    <!--            <el-menu-item>个人信息</el-menu-item>-->
    <!--            <el-submenu>-->
    <!--                <template slot="title">选择角色</template>-->
    <!--                <el-menu-item>学生</el-menu-item>-->
    <!--                <el-menu-item>教师</el-menu-item>-->
    <!--            </el-submenu>-->
    <!--            <el-menu-item>退出</el-menu-item>-->
    <!--        </el-submenu>-->
    <!--    </el-menu>-->
    <el-dropdown class="avatar-container" trigger="click" :hide-on-click="false">
        <div class="avatar-wrapper">
            <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                 class="user-avatar">
            <!--            <i class="el-icon-caret-bottom"/>-->
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
                <el-dropdown-item>
                    个人信息
                </el-dropdown-item>
            </router-link>
<!--            <el-dropdown-item>-->
                <el-dropdown trigger="hover" placement="right-start">
                    <li class="el-dropdown-menu__item">选择角色</li>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            学生
                        </el-dropdown-item>
                        <el-dropdown-item disabled>
                            教师
                            <span>√</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            管理员
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    <!--                <el-cascader-panel :options="options"></el-cascader-panel>-->
                </el-dropdown>
<!--            </el-dropdown-item>-->
            <!--            <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">-->
            <!--                <el-dropdown-item>Github</el-dropdown-item>-->
            <!--            </a>-->
            <!--            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">-->
            <!--                <el-dropdown-item>Docs</el-dropdown-item>-->
            <!--            </a>-->
            <el-dropdown-item @click.native="logout">
                <span style="display:block;">退出</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: "index.vue",
    data() {
        return {
            // options:[{
            //     value: "select",
            //     label: "选择角色",
            //     children: [{
            //         value: "teacher",
            //         label: "教师"
            //     }, {
            //         value: "student",
            //         label: "学生"
            //     }]
            // }]
            options: [{
                value: "teacher",
                label: "教师"
            }, {
                value: "student",
                label: "学生"
            }]
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar-container {
    margin-right: 20px;

    .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
    }
}
</style>
