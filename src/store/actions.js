import {UPDATE,CHANGEROUTE} from './const'
import {Toast} from "mint-ui"
export default {
    initCar(store){
        //获取购物车
        let cars = getCar();
        store.commit(UPDATE,cars)
    },
   addGoodInfo(store,goodInfo){
       setTimeout(()=>{

        //获取localStroage购物车数据
        let cars = getCar();

        //遍历商品数据 判断是否存在 存在数量++
        let isHas = cars.some(item=>{
            if(item.goodsId === goodInfo.goodsId) {
                item.num++
                return true
            }
        })
        //不存在 创建 且num为1
        if(!isHas){
            goodInfo.num = 1;
            cars.push(goodInfo)
        }
        localStorage.cars = JSON.stringify(cars)

        store.commit(UPDATE,cars)
        Toast({
            message:"添加成功",
            duration:1000
        })
       },10)
       

   },
   reduceGood(store,goodInfo){
       //获取数据库
       let cars = getCar();

       //遍历localStroage  删除所点击的商品
       cars = cars.filter(item=>{
           if(item.goodsId === goodInfo.goodsId){
               item.num--
               if(item.num <= 0) return false
           }
           return true
       })
       localStorage.cars = JSON.stringify(cars)
       store.commit(UPDATE,cars)
       Toast({
        message:"删除成功",
        duration:1000
    })
   },
   changeRoute(store,lastroute){
        console.log('changeRoute')
        store.commit(CHANGEROUTE,lastroute)
   }
}

//获取本地存储
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}