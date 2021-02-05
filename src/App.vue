<template>
    <div id="app">
      <router-view />
<!--        <layout></layout>-->
<!--        <side-bar class="sidebar-container"/>-->
<!--        <div class="main-container">-->
<!--            <nav-bar/>-->
<!--            <home-page></home-page>-->
<!--        </div>-->
    </div>
</template>

<script>
// import HomePage from "@/components/views/homepage/HomePage";
// import NavBar from "@/components/common/navbar/NavBar";
// import SideBar from "@/layout/components/SideBar";
// import Layout from "@/layout";

export default {

    name: 'App',
    // components: {Layout
        // , NavBar, HomePage,SideBar
    // }
}
</script>

<style>

#app {

}
::-webkit-scrollbar-track-piece {
    background: #d3dce6;
}
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background: #99a9bf;
    border-radius: 20px;
}
</style>
