<template>
    <div class="tabbar">
        <TabItem txt="首页" mark="home" :sel="selected">
            <i slot="normalImg" class="fa fa-home"></i>            
        </TabItem>
        <TabItem txt="分类" mark="friends" :sel="selected">
            <i slot="normalImg" class="fa fa-tasks"></i>            
        </TabItem>
        <TabItem txt="购物车" mark="shoppingcar" :sel="selected">
            <i slot="normalImg" class="fa fa-shopping-cart"></i>            
        </TabItem>
        <TabItem txt="我的" mark="mine" :sel="selected">
            <i slot="normalImg" class="fa fa-user-circle-o"></i>
        </TabItem>
    </div>
</template>

<script>
import TabItem from "./TabItem"
export default {
    data(){
        return {
            selected:this.$route.name
        }
    },
    components:{
        TabItem
    },
}
</script>

<style lang="scss" scoped>
    .tabbar{
        padding-bottom:5px;
        padding-top:9px;
        position: fixed;
        bottom:0;
        left:0;
        height:60px;
        width:100%;
        display: flex;
        border-top:1px solid #f7ecec;
        background: #fff;
    }
</style>
