<template>
    <div class="list">
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="5"
        >
            <li
                v-for="product in list"
                :key="product.newGoods.sid"    
            >
                <img v-lazy="product.newGoods.url" alt="">
                <span>{{product.newGoods.goods_sales_name}}</span>
                <p>￥:{{product.newGoods.sale_price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            list:[],
            page:1,
            limit:6,
            loading:false,   //默认无线滚动
            hasMore:true    //记录是否还有更多数据
        }
    },
    methods:{
        loadMore() {
            if(!this.hasMore){
                this.loading=true;//如果判断为没有更多数据了，关闭无限滚动
                Toast({
                    message:"没有更多了...",
                    position:"bottom",
                    duration:1000
                })
                return false;
            }
            this.getlist();
        },
        /* getlist(){
            //发送请求  
            this.$http.get("/home-json/list.json").then(res=>{
                this.list = res.data;
            })
        }, */
        getlist(){
            this.loading = true;
            let {page,limit} = this;
            let toast = Toast({
                message: '正在加载...',
                iconClass: 'fa fa-cog fa-spin',
                duration:-1,
                postion:"middle",
                className:"toast"
            }); 
            this.$http.get("/api/bl/home_lists",{
                params:{
                    limit:this.limit,
                    page:this.page
                }
            }).then(res=>{
                //this.list = res.data.object_list;
                this.list = this.list.concat(res.data.object_list);
                this.loading = false;
                toast.close();
                if(limit*page >= res.data.total){
                    this.hasMore = false;
                    return false;
                }
                this.page++;
            })
        }
    },
    /* created(){
        this.getlist();
    } */
}
</script>

<style lang="scss" scoped>
    .list{
        padding: 0 0.15rem;
        width:100%;
        ul{
            margin-left: -0.15rem;
            li{
                padding-left: 0.15rem;
                display: inline-block;
                margin-bottom: 0.15rem;
                width: 50%;
                vertical-align: top;
                img{
                    width:100%
                }
                span{
                    margin: 0.05rem 0;
                    height: 0.35rem;
                    line-height: 0.17rem;
                    font-size: 0.12rem;
                    color: #444444;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                }
                p{
                    padding-top: 0.05rem;
                    font-size: 0.14rem;
                    color: #333333;
                    overflow: hidden;
                    line-height: 0.2rem;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
