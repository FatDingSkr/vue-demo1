<template>
    <div class="header">
        <div class="search-bar">
            <div class="search-logo"></div> 
            <div class="search-bar-item">
                <i class="fa fa-search"></i> 
                <span>搜索热门商品</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header{
        height: 0.44rem;
        width: 100%;
        background-color: #fbfbfb;
        position: fixed;
        top: 0;
        padding: 0 0.1rem;
        z-index: 100;
        .search-bar{
            padding-top:0.06rem;
        }
        .search-logo{
            margin-top:0.04rem;
            width: 0.29rem;
            height: 0.24rem;
            background: url(../../assets/bl_logo.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100%;
            float:left;
        }
        .search-bar-item{
            float:right;
            background-color: #F4F4F4;
            width:89%;
            height: 0.32rem;
            border-radius: 0.02rem;
            margin-left: 0.1rem;
            color: #D0D0D0;
            text-align: center;
            line-height:0.32rem;
            .fa-search{
                width: 1em;
                height: 1em;
                vertical-align: -.15em;
                fill: currentColor;
                overflow: hidden;
            }
        }
    }
</style>
