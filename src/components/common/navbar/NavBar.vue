<template>
    <div class="container navbar">
        <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
        <div class="right-menu">
<!--            <span><a>xxx</a>同学</span>-->
            <avatar/>
        </div>
    </div>
</template>

<script>
import Hamburger from '@/components/common/Hamburger'
import Avatar from '@/components/common/Avatar'

export default {
    name: "NavBar",
    components: {Hamburger, Avatar},
    data() {
        return {
            sidebar:{
                opened:true,
            },
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        toggleSideBar() {
            // this.sidebar.opened=!this.sidebar.opened
            this.$store.dispatch('app/toggleSideBar')
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}

.container h3 {
    align-self: center;
    margin: 0;
    font-style: italic;
}
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color: transparent;

        & :hover {
            background: rgba(0, 0, 0, .025)
        }
    }

    .right-menu {
        //float: right;
        //height: 100%;
        //line-height: 50px;

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background .3s;

                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
    }
}
</style>
