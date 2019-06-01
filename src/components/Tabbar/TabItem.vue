<template>
    <div class="tabitem" @click="changeFlag">
        <span :class="['title',(flag?'active':'')]"><slot name="normalImg"></slot></span>
        <span :class="['title',(flag?'active':'')]">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true;
            }
            return false;
        }
    },
    methods:{
        changeFlag(){
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabitem{
        flex:1;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        // padding-top:9px;
        // padding-bottom:2px;
        .fa{
            font-size:28px;
            &.active{
                color:green
            }
        }
        .title{
            font-size: 12px;
            &.active{
                color:green;
            }
        }
    }
</style>
