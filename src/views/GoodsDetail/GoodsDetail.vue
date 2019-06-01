<template>
    <div class="detail">
         <mt-header title="商品详情" fixed >
            <router-link to="/goodlist/message" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="list_item">

        
        <img  width="60%" height="60%" :src="goods.goodsImgPath" alt="">
        <div class="goods_desc" >
            <span>{{goods.infoStoreName}}</span>
            <p class="good_title">{{goods.goodsMsg}}</p>
            <p>{{goods.productName}}</p>
            <span class="price">￥{{goods.marketPrice}}</span>
            <span class="commond"><i class="fa fa-commenting-o"></i>{{goods.totalEvaluate}}</span>
            <span class="rating"><i class="fa fa-thumbs-o-up"></i>{{Math.round(goods.goodRatio * 100)}}%</span>
            <mt-button @click="addGoodInfo(goods)" type="danger" size="small">购买</mt-button>
        </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            goods:''
        }
    },
    methods:{
        ...mapActions(["addGoodInfo"]),
        getGoods(){
            this.$http.get("http://39.107.136.192/bl/json/sort/message.json").then(res=>{
                
                // this.goods = res.data.some(item=>{
                //     if(item[0].goodsId === this.$route.params.id) {
                //         return item[0]
                //     }
                // })
                for(let i = 0; i < res.data.length;i++){
                    if(res.data[i][0].goodsId === this.$route.params.id){
                        this.goods = res.data[i][0]
                        break
                    }
                }
            })
        }
    },
    created(){
        this.getGoods();
    }
}
</script>

<style lang="scss" scoped>
        .mint-header{
            background-color: #ccc;
        }
        .list_item{
            margin-top: .4rem;
            
            
            width:98%;
            img{
                margin-left: .75rem;
            }
            .good_title{
                font-size: 18px;
                color:black;
                margin-left: .2rem;
            }
            
        }
        
    
</style>
