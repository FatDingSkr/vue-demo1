<template>
    <div class="home">
        <Header></Header>
        <Banner></Banner>
        <Menu></Menu>
        <Daily_Pomo></Daily_Pomo>
        <Recommend></Recommend>
        <List></List>
        <div style="height:0.6rem;width:100%"></div>
        <Tabbar></Tabbar>
        
    </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import Tabbar from "@/components/Tabbar"
import Menu from "./Menu"
import Daily_Pomo from "./Daily_Pomo"
import Recommend from "./Recommend"
import List from "./List"

export default {
    components:{
        Tabbar,Banner,Header,Menu,Daily_Pomo,Recommend,List
    }
}
</script>

<style lang="scss" scoped>
</style>
