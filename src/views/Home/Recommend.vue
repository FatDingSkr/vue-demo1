<template>
    <div class="recommend">
        <div class="banner"><img src="http://img23.iblimg.com/market-2/images/activity/1399924441.jpg" alt=""></div>
        <div class="channel-box">
            <div
                class="channel-item"
                v-for="product in recommend"
                :key="product.advList[0].deployId"
            >
                <img alt="" :src="product.advList[0].picUrl">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            recommend:[],
        }
    },
    methods:{
        getrecommend(){
            this.$http.get("/api/bl/home_banners").then(res=>{
                this.recommend = res.data.object_list[0].obj.otherResource.slice(9,15);
            })
        }
    },
    created(){
        this.getrecommend();
    }
}
</script>

<style lang="scss" scoped>
    .channel-box{
        height: 2.8rem;
        position: relative;
        padding: 0.1rem 0.08rem;
        .channel-item{
            height: 1.33rem;
            width: 33.33%;
            float:left;
            padding: 0.015rem;
            img{
                width: 100%;
                height: auto
            }
        }
    }
    .banner{
        padding-top:0.05rem;
        height: 1.2rem;
        margin: 0.09rem 0.09rem 0 0.09rem;
        img{
            width:100%;
        }
    }
</style>
