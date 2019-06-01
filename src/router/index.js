import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from "./home"
import friends from "./friends"
import car from "./car"
import mine from "./mine"
import goodsdetail from './goodsdetail'
import message from './message'
import price from './price'
import sales from './sales'
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,friends,car,mine,goodsdetail,message,price,sales
  ]
})
