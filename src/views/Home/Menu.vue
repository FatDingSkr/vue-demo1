<template>
    <div class="menu">
        <div class="flex-m">
            <div class="menu-item">
                <div>
                    <div class="flex-c-m">
                        <img alt="" src="//img22.iblimg.com/market-2/images/activity/2035819070.png">
                    </div> 
                    <div class="flex-c-m deployName">停车</div>
                </div>
            </div>
            <div class="menu-item">
                <div>
                    <div class="flex-c-m">
                        <img alt="" src="//img22.iblimg.com/market-2/images/activity/2034148461.png">
                    </div> 
                    <div class="flex-c-m deployName">百联卡</div>
                </div>
            </div>
            <div class="menu-item">
                <div>
                    <div class="flex-c-m">
                        <img alt="" src="//img23.iblimg.com/market-2/images/activity/316154475.png">
                    </div> 
                    <div class="flex-c-m deployName">充值缴费</div>
                </div>
            </div>
            <div class="menu-item">
                <div>
                    <div class="flex-c-m">
                        <img alt="" src="//img22.iblimg.com/market-2/images/activity/1041687056.png">
                    </div> 
                    <div class="flex-c-m deployName">领券中心</div>
                </div>
            </div>
            <div class="menu-item">
                <div>
                    <div class="flex-c-m">
                        <img alt="" src="//img22.iblimg.com/market-2/images/activity/312112970.jpg">
                    </div> 
                    <div class="flex-c-m deployName">Apple</div>
                </div>
            </div>
        </div> 
        <div class="bottom-line"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .menu{
        height: 0.84rem;
        padding: 0.1rem 0;
        .flex-m{
            display:flex;
            flex:1;
            .menu-item{
                display:flex;
                justify-content: center;
                align-items: center;
                width: 20%;
                height: 100%;
                font-size: 0.12rem;
                color: #888;
                font-weight: 300;
                .flex-c-m{
                    img{
                        width:0.43rem;
                        height:0.43rem;
                        border-radius:50%;
                    }
                }
                .deployName{
                    padding-top:0.05rem;
                    text-align:center;
                }
            }
        }
        .bottom-line{
            margin: 0.1rem 0.1rem 0 0.1rem;
            border-bottom: 1px solid #f6f6f6;
        }
    }
</style>
