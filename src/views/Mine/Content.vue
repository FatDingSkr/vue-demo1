<template>
    <div class="content" style="background:rgb(248,248,248)">
        <div class="banner"><img src="@/assets/banner.jpg" alt=""></div>
        <div class="surprize">
            <p>
                <i class="fa fa-heart-o"></i>
                <span style="font-size:0.08rem;padding-top:0.08rem">我的收藏</span>
                <span style="font-size:0.04rem;color:#ccc">您还没有收藏</span>
            </p>
            <p>
                <i class="fa fa-shopping-bag"></i>
                <span style="font-size:0.08rem;padding-top:0.08rem">我的福利</span>
                <span style="font-size:0.04rem;color:#ccc">海量优惠券</span>
            </p>
        </div>
        <div class="111" style="padding-bottom:0.6rem"><img style="width:100%" src="@/assets/111.png" alt=""></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .banner{
        margin-bottom: 0.1333rem;
        img{
            width:100%
        }
    }
    .surprize{
        display: flex;
        height: 1.26rem;
        background: #fff;
        margin-bottom: 0.13rem;
        p{
            display:flex;
            flex:1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            font-size: .16rem;
            line-height: .22rem;
            i{
                font-size:0.3rem;
                color:#e83448;
            }
        }
    }
</style>
