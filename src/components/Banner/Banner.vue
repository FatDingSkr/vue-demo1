<template>
    <div class="swiper-container bg-img" :class="appbanner">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img width="100%" :src="banner.mediaUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    props:{
        appbanner:{
            type:String,
            default:"app-banner"
        }
    },
    methods:{
        // 解决403图片缓存问题
        /* getImages( _url ){
        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            return 'https://images.weserv.nl/?url=' + _u;
            }
        }, */
        getBanners(){
            //发送请求  
            this.$http.get("/api/bl/home_banners",{  
                params:{
                    limit:6
                }
            }).then(res=>{
                this.banners = res.data.object_list[0].obj.otherResource[0].advList;
                //必须等到数据更新了引发视图重新渲染完成后，再去进行实例化操作
                this.$nextTick(()=>{
                    new Swiper("."+this.appbanner,{
                        mousewheel:true,
                        autoplay:true,
                        loop:true,
                        pagination:{
                            el:".swiper-pagination"
                        }
                    })
                })
                
            })
        }
    },
    created(){
        this.getBanners()
    }
}
</script>

<style lang="scss">
    .swiper-container{
        margin-top:0.44rem;
        height:1.3rem;
        img{
            width:100%;
            height:100%;
        }
        .swiper-pagination{
            left:auto;
            width:auto;
            right:10px;
        }
        .swiper-pagination-bullet-active{
            background:#d0d4d8;
        }
    }
</style>
