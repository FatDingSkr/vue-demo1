import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入main.scss文件  all in js理念
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入swiper的css样式
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
Vue.prototype.$http = axios  // vue组件中可以通过  this.$http获取到axios

//引入mint-ui相应的组件
import { 
  Search,
  Lazyload,
  InfiniteScroll,
  Header,Button,
  Tabbar, 
  TabItem,
  Cell,
  TabContainer,
  TabContainerItem,
  Navbar
} from "mint-ui"
Vue.use(Lazyload);
Vue.use(InfiniteScroll)
Vue.component("mt-header",Header)
Vue.component("mt-button",Button)
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tabitem", TabItem);
Vue.component("mt-cell", Cell);
Vue.component("mt-navbar",Navbar)
Vue.component("mt-search", Search);
Vue.component('mt-tab-container',TabContainer)
Vue.component('mt-tab-container-item',TabContainerItem)
//import "./modules/directive"

//引入配置
//https://www.jianshu.com/p/e8e747e33ef0
//import VideoPlayer from 'vue-video-player'
//import "video.js/dist/video-js.css"
// import "vue-video-player/src/custom-theme.css"
// Vue.use(VideoPlayer)
new Vue({
  router,  //this.$route  this.$router路由的api方法
  store,   //this.$store 
  render: h => h(App)
}).$mount('#app')
