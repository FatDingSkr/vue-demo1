<template>
    <div class="carbox">

     <mt-header :title="'购物车     (' + getters.num + ')'" fixed >
            <router-link to="/goodlist/message" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    <div class="car">
        <div class="empty"
            v-if="cars.length==0"
        >
            <p>购物车空了 赶紧去挑点宝贝吧！</p>
            <router-link tag="div" to="/goodlist/message">去逛逛</router-link>
        </div>
       
        <div 
            v-else
            class="list_item"
            v-for="item in cars"
            :key="item.goodsId"
            
        >
            <img  width="115" height="115" :src="item.goodsImgPath" alt="">
            <div class="goods_desc" >
                <p class="good_title">{{item.goodsMsg}}</p>
                <span class="price">￥{{item.marketPrice}}</span>
                
                <span class="oldprice">￥{{item.goodsPrice}}</span>
                <div class="changeNum">
                    <mt-button @click="addGoodInfo(item)"  type="default" size="small">+</mt-button>
                    <span class="goodsNum">{{item.num}}</span>
                    <mt-button @click="reduceGood(item)"  type="default" size="small">-</mt-button>
                </div>
            </div>
          
            
            
            
        </div>
        
         
        </div>
        <div class="compute">
            <span class="total">合计 ￥{{getters.price}} .0</span>
            <mt-button type="danger"  >结算</mt-button>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
import router from "@/router"
export default {
    computed:{
        ...mapState({
            cars:state=>state.cars,
            Route:state=>state.lastRoute
        }),
        ...mapGetters(['getters'])

    },
    methods:{
        ...mapActions(["addGoodInfo","reduceGood","initCar"]),
        
    },
    data(){
        return {
            lastRoute:""
            }
    },
    created(){
        
        this.initCar();
        
        
    }
}
</script>

<style lang="scss" scoped>
    .mint-header{
        background-color: #ccc;
    }
    .car{
        width: 98%;
        margin-left: 1%;
        margin-bottom:.6rem;
        overflow: hidden;
        margin-top: .3rem;
        .list_item{
            float: left;
            height: 1.6rem;
            width:98%;
            border-bottom: 1px solid #eee;
            img{
               float: left;
               margin-top: 30px;
            }
            .goods_desc{
                position: relative;
                margin-top: .4rem;
                width:67%;
                height: 1.1rem;
                float: left;
                .good_title{
                    margin-bottom: 40px;
                    
                }
                .price{
                    font-size: 16px;
                    margin-right: 5px;
                    color:#FF6F6F;
                    position: absolute;
                    bottom:.15rem;
                }
                .oldprice{
                    text-decoration: line-through;
                    font-size: .12rem;
                    position: absolute;
                    left: .7rem;
                    bottom: .16rem;
                    i{
                        margin-right: 2px;
                    }
                    margin-right: 5px;
                }
                .changeNum{
                    font-size: .15rem;
                    position: absolute;
                    right: 0rem;
                    bottom:.1rem;
                    .goodsNum{
                        margin:0.1rem;
                    }
                    
                }
               
            }
        }
        
        
    }
    .empty{
        height: 100%;;
            margin-top: .5rem;
            font-size:18px;
            text-align: center;
           
            div{
                margin-top: .5rem;
                font-size: 18px;
                color:red
            }
        }
    .compute{
        position: fixed;
        right: .2rem;
        bottom:0.2rem;
        z-index: 100000;
        .total{
            color: #FF6F6F;
            font-size: 16px;
            margin-right: .2rem;
        }
    }
</style>
