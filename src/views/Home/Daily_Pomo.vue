<template>
    <div class="daily-pomo">
        <p>今日爆款</p>
        <div class = "menu-box">
            <div class="cover">
                <div class="pomo-menu">
                    <div
                        class="pomo-item"
                        v-for="product in menu"
                        :key="product[0].goodsId"
                    >
                        <img :src="product[0].goodsImgPath" alt="">
                        <span class="price">￥{{product[0].marketPrice}}</span>
                        <span class="goodsPrice">参考价:￥{{product[0].goodsPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menu:[],
        }
    },
    methods:{
        getmenu(){
            this.$http.get("/api/bl/home_menus").then(res=>{
                this.menu = res.data.object_list[0].resultInfo.pageModel.rows;                
            })
        }
    },
    created(){
        this.getmenu();
    }
}
</script>

<style lang="scss" scoped>
    .daily-pomo{
        p{
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.17rem;
        font-weight: 550;
        color: #333333;
        text-align: center;
        }
        .menu-box{
            height: 1.29rem;
            width:100%;
            overflow: hidden;          
            .cover{
                overflow: scroll;
                .pomo-menu{
                    display:flex;
                    flex:1;
                    .pomo-item{
                        margin-left: 0.1rem;
                        width: 0.9rem;
                        height: 1.29rem;
                        img{
                            height:0.9rem
                        }
                        .price{
                            text-align: center;
                            display:block;
                            margin-top: 0.05rem;
                            font-size: 0.12rem;
                            color: #333333;
                            overflow: hidden;
                            line-height: 0.17rem;
                            white-space: nowrap;
                        }
                        .goodsPrice{
                            text-align: center;
                            display:block;
                            margin-top: 0.02rem;
                            text-align: center;
                            white-space: normal;
                            height: 0.12rem;
                            line-height: 0.12rem;
                            font-size: 0.1rem;
                            color: #AAA;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .cover::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
