<template>
    <div class="friends">
        <mt-header :title="'分类'" fixed >
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="navbar">
            <mt-navbar 
                v-model="selected"
                
            >
                <mt-tabitem 
                    
                v-for="(list,index) in sort_list"
                    :key="list.categorySid"
                    :id="index + 1"
                   
                    
                >{{list.categoryName}}</mt-tabitem>
                
            </mt-navbar>
        </div>
        
        <mt-tab-container v-model="selected">
            <mt-tab-container-item 
                v-for="sort in sorts"
                :key="sort.id"
                :id="sort.id"
            >
                <div 
                    class="sort_content"
                    v-for="item in sort.list"
                    :key="item.categoryId"    
                >
                    <p class="sort-title">{{item.categoryName}}</p>
                    <router-link 
                        to="/goodlist/message"
                        class="detail"
                        v-for="detail in item.categorys"
                        :key="detail.categoryId"
                        :id="detail.categoryId"
                    >
                        <img width="50" height="50" :src="detail.categoryPicture" alt="">
                        <span>{{detail.categoryName}}</span>
                    </router-link>
                </div>
            </mt-tab-container-item>
             
            
        </mt-tab-container>
        
        
        
            
        </div>

</template>

<script>
export default {
    name:"page-part",
    data(){
        return {
            sort_list:[],
            selected:1,
            sorts:[],
            isFixed:true
            
        }
    },
    methods:{
        getsortlsit(){
            this.$http.get('http://39.107.136.192/bl/json/sort/sort_list.json').then(res=>{
                this.sort_list = res.data.resultInfo
            })
        },
        getsort(){
            this.$http.get('http://39.107.136.192/bl/json/sort/sort.json').then(res=>{
                this.sorts = res.data
                console.log(res)
            })
        }
    },
    created(){
        this.getsortlsit()
        this.getsort()
    }
}
</script>

<style lang="scss">
    .friends{
        position: absolute;
        margin-bottom: .6rem;
        .navbar{
            overflow: hidden;
        
            
            
            .mint-navbar{
                
                overflow-x: hidden;
                overflow-y: auto ;
                padding-bottom: .85rem;
                height: 100%;                
                position: fixed;
                left: 0;
                top:44px;
                float: left;
                display: flex;
                z-index: 1;
                flex-direction: column;
                width:.9rem;
                .mint-tab-item{
                    .mint-tab-item-label{
                        font-size: 16px;
                    }
                }
            }
        }
            .mint-navbar::-webkit-scrollbar{
                display: none;
            }
        .mint-tab-container::-webkit-scrollbar{
            display: none;
        }
        .mint-tab-container{
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: auto ;
            position: fixed;
            float: right;
            height: 100%;
            top:44px;
            right:0;
            padding-bottom: 1rem;
            width: 70%;
            .sort_content{
                
                .sort-title{
                    margin:0.2rem 0;
                    border-left: 2px solid #fe5b4a;
                    color:#999;
                    padding-left: .1rem;
                    font-size: 12px;
                }
                .detail{
                    display:inline-block;
                    width:33%;
                    text-align: center;
                    span{
                        font-size: 12px;
                    }
                    img{
                        margin-left: .18rem
                    }
                }

            }
        }
        
    }
</style>
