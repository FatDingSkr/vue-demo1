<template>
    <div class="mine">
        <mt-header class="title" title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <Member_Header></Member_Header>
        <Content></Content>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import Member_Header from "./Member-Header"
import Content from "./Content"
export default {
    components:{
        Tabbar,Member_Header,Content
    }
}
</script>

<style>
    .title{
        font-size:0.18rem;
        background-color: #f5f5f5;
        color:#000;
    }
</style>
