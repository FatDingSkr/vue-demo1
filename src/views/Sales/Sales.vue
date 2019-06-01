<template>
    <div class="sales">
        <Navbar></Navbar>
        <router-link to="/shoppingcar" class="fa fa-cart-plus toCar"></router-link>
        <div class="message-list">
        
        <div 
            class="list_item"
            v-for="item in messages"
            :key="item[0].goodsId"
        >
         <router-link :to="{name:'goodsdetail',params:{id:item[0].goodsId}}"><img  width="115" height="115" :src="item[0].goodsImgPath" alt=""></router-link>   
            <div class="goods_desc" >
                <p class="good_title">{{item[0].goodsMsg}}</p>
                <span class="price">￥{{item[0].marketPrice}}</span>
                <span class="commond"><i class="fa fa-commenting-o"></i>{{item[0].totalEvaluate}}</span>
                <span class="rating"><i class="fa fa-thumbs-o-up"></i>{{Math.round(item[0].goodRatio * 100)}}%</span>
                <mt-button @click.stop="addGoodInfo(item[0])" type="danger" size="small">购买</mt-button>
            </div>
          
            
            
            
        </div>
        
    </div>
    <div class="empty">
            <span> </span>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from "@/components/Navbar/Navbar"
export default {
    components:{
        Navbar
    },
    props:["id"],
    data(){
        return {
            messages:[]
        }
    }, 
    methods:{
        ...mapActions(["addGoodInfo",'changeRoute']),
        getMessage(){
            this.$http.get("http://39.107.136.192/bl/json/sort/sales.json").then(res=>{
                this.messages = res.data
                
            })
        }
    },
    created(){
        this.getMessage()
    }
}
</script>

<style lang="scss">
.toCar{
        text-align: center;
        line-height: .4rem;
        position: fixed;
        left: .3rem;
        bottom: .8rem;
        width:.4rem;
        height: .4rem;
        background-color: #ccc;
        border-radius: 50%;
        font-size: .2rem;
        color:#fff;
    }
    .message-list{
        width: 98%;
        margin-left: 1%;
        margin-top: .5rem;
        overflow: hidden;
        .list_item{
            float: left;
            height: 1.6rem;
            width:98%;
            border-bottom: 1px solid #eee;
            img{
               float: left;
               margin-top: 30px;
               margin-left: 0;
            }
            .goods_desc{
                position: relative;
                top:.45rem;
                width:67%;
                height: 1.1rem;
                left: 1.2rem;
                
                .good_title{
                    position: absolute;
                    left:0;
                    font-size: .14rem;
                    margin:0;
                }
                .price{
                    font-size: 16px;
                    margin-right: 5px;
                    color:#FF6F6F;
                    position: absolute;
                    bottom:.15rem;
                    left: 0;
                }
                .commond{
                    font-size: .15rem;
                    position: absolute;
                    left: .7rem;
                    bottom: .16rem;
                    i{
                        margin-right: 2px;
                    }
                    margin-right: 5px;
                }
                .rating{
                    font-size: .15rem;
                    position: absolute;
                    left: 1.2rem; 
                    bottom:.16rem;
                    i{
                        margin-right: 2px;
                    }
                }
                .mint-button{
                    position: absolute;
                    width:.55rem;
                    height: .30rem;
                    right:0;
                    bottom:.1rem;
                    z-index: 10;
                }
            }
        }
        
    }
    .empty{
            height: .5rem;
            width: 100%;
        }
</style>
