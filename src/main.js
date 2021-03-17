import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueParticles from 'vue-particles'  
Vue.use(VueParticles) 

Vue.config.productionTip = false

import {Swiper as SwiperClass, Pagination, Mousewheel, Autoplay} from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])
// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

AOS.init()

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  //进度条消失
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
