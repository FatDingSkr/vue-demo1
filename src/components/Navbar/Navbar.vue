<template>
    <div class="navbar">
        <router-link
            v-for="nav in navs"
            :key="nav.id"
            :to="'/goodlist/' + nav.name"
            class="navbaritem"
        >{{nav.title}} <i :class="['fa',nav.icon]"></i></router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs:[
                {id:1,title:"综合",name:"message",icon:"fa-angle-down"},
                {id:2,title:"销量",name:"sales",icon:"fa-angle-down"},
                {id:3,title:"价格",name:"price",icon:"fa-angle-down"},
                {id:4,title:"筛选",name:"filter",icon:"fa-filter"}
            ]
        }
    }
}
</script>

<style lang="scss">
    .navbar{
        background-color:#fff;
        opacity: 0.95;
        width: 100%;
        height: .6rem;
        left: 0;
        top:0;
        position: fixed;
        z-index: 100;
           
        display: flex;
        justify-content: space-around;
        align-items: center;
        .navbaritem{
            font-size: 18px;
            color: #666;
            text-decoration: none;
            &.router-link-active{
                 color: black;
                    
                font-weight: 600
          }
        }
    }
</style>
