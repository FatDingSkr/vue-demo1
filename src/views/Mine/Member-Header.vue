<template>
    <div class="member-header">
        <div class="set clear"><i class="fa fa-cog"></i></div>
        <div class="member clear">
            <div class="img"><img src="@/assets/logo.jpg" alt=""></div>
            <div class="unlogin">
                <a href="">登录/</a><a href="">注册</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .member-header{
        padding: .06rem 0 .1rem;
        background:#e83448;
        background-size:100% 100%;
        .set{
            padding-right: .13rem;
            padding-bottom: .11rem;
            i{
                color:#fff;
                float:right;
                font-size:0.24rem
            }
        }
        .member{
            padding-left: .2rem;
            padding-bottom: .24rem;  
            .img{
                float:left;
                width: 0.65rem;
                height: 0.65rem;
                border-radius: 50%;
                overflow: hidden;
                margin-right: .2rem;
                img{
                    width:100%
                }
            } 
            .unlogin{
                height:0.65rem;
                line-height:0.65rem;
                float:left;
                a{
                    color:#fff;
                    font-size:0.16rem;
                }
            }  
        }
    }
</style>
