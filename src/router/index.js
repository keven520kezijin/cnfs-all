import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

// /compute">计算
// /ecology">生态
// /browser">区块浏览器
// /partner">城市合伙人
// /login">登录

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: { title: '首页' }
    }, {
      path: '/store',
      name: 'Store',
      component: () => import('@/views/store'),
      meta: { title: '存储' }
    }, {
      path: '/partner',
      name: 'Partner',
      component: () => import('@/views/partner'),
      meta: { title: '合作伙伴' }
    }, {
      path: '/regionalAgent',
      name: 'regionalAgent',
      meta: { title: '区域代理' },
      component: () => import('@/views/regionalAgent')
    }, {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/register')
    }, {
      path: '/retrieve',
      name: 'Retrieve',
      component: () => import('@/views/retrieve')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    }, {
      path: '/password_find',
      name: 'passwordFind',
      component: () => import('@/views/passwordFind')
    }, {
      path: '/news',
      name: 'News',
      component: () => import('@/views/news/news.vue')
    }]
  },
  {
    path: '/admin',
    component: () => import('@/layout/admin.vue'),
    redirect: '/admin/userIntroduce',
    children: [{
      path: 'userIntroduce',
      name: 'UserIntroduce',
      component: () => import('@/admin/userIntroduce/userIntroduce.vue'),
      meta: { title: '首页' }
    }, {
      path: 'certification',
      name: 'Certification',
      component: () => import('@/admin/userIntroduce/certification.vue'),
      meta: { title: '实名认证' }
    }, {
      path: 'cer-person',
      name: 'cerPerson',
      component: () => import('@/admin/userIntroduce/cer-person.vue'),
      meta: { title: '个人实名认证' }
    }, {
      path: 'cer-enterprise',
      name: 'cerEnterprise',
      component: () => import('@/admin/userIntroduce/cer-enterprise.vue'),
      meta: { title: '企业实名认证' }
    // }, {
    //   path: 'ali-person-ocr',
    //   name: 'aliPersonCor',
    //   component: () => import('@/admin/userIntroduce/ali-person-ocr.vue'),
    //   meta: { title: '个人支付宝定授权认证' }
    // }, {
    //   path: 'ali-person-face',
    //   name: 'aliPersonFace',
    //   component: () => import('@/admin/userIntroduce/ali-person-face.vue'),
    //   meta: { title: '个人扫脸认证' }
    // }, {
    //   path: 'ali-company',
    //   name: 'aliCompany',
    //   component: () => import('@/admin/userIntroduce/ali-company.vue'),
    //   meta: { title: '企业支付宝定授权认证' }
    // }, {
    //   path: 'ali-corporation-ocr',
    //   name: 'aliCorporationOcr',
    //   component: () => import('@/admin/userIntroduce/ali-corporation-ocr.vue'),
    //   meta: { title: '企业法人支付宝授权认证' }
    // }, {
    //   path: 'ali-corporation-face',
    //   name: 'aliCorporationFace',
    //   component: () => import('@/admin/userIntroduce/ali-corporation-face.vue'),
    //   meta: { title: '企业法人扫脸认证' }
    }, {
      path: 'info',
      component: () => import('@/admin/information/info.vue'),
      name: 'Info',
      meta: { title: '全部信息', affix: true }
    }, {
      path: 'infoDetails',
      component: () => import('@/admin/infoDetails/infoDetails.vue'),
      hidden: true,
      name: 'InfoDetails',
      meta: { title: '信息详情', affix: true }
    }, {
      path: 'beansAccount',
      component: () => import('@/admin/beansAccount/beansAccount.vue'),
      hidden: true,
      name: 'BeansAccount',
      meta: { title: '存豆账户', affix: true }
    }, {
      path: 'panelPoint',
      component: () => import('@/admin/panelPoint/panelPoint.vue'),
      hidden: true,
      name: 'PanelPoint',
      meta: { title: '我的节点', affix: true }
    }, {
      path: 'storageService',
      component: () => import('@/admin/storageService/storageService.vue'),
      hidden: true,
      name: 'StorageService',
      meta: { title: '存储服务', affix: true }
    }, {
      path: 'partner',
      component: () => import('@/admin/partner/partner.vue'),
      hidden: true,
      name: 'Partner',
      meta: { title: '城市合伙人', affix: true }
    }, {
      path: 'news',
      component: () => import('@/admin/partner/news.vue'),
      hidden: true,
      name: 'News',
      meta: { title: '发布新闻资讯', affix: true }
    }, {
      path: 'carousel',
      component: () => import('@/admin/partner/carousel.vue'),
      hidden: true,
      name: 'Carousel',
      meta: { title: '发布轮播图', affix: true }
    }, {
      path: 'promotionReward',
      component: () => import('@/admin/partner/promotionReward.vue'),
      hidden: true,
      name: 'PromotionReward',
      meta: { title: '申请推广奖励', affix: true }
    }, {
      path: 'invite',
      component: () => import('@/admin/invite/invite.vue'),
      hidden: true,
      name: 'Invite',
      meta: { title: '我的邀请', affix: true }
    }]
  },
  {
    path: '/retrieve', // 找回密码
    name: 'Retrieve',
    component: () => import('@/views/retrieve/')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/mRegister')
  },
  {
    path: '/mlogin',
    name: 'Login',
    component: () => import('@/views/login/mLogin')
  },
  {
    path: '/regionalAgent',
    name: 'RegionalAgent',
    component: () => import('@/views/regionalAgent/mRegionalAgent')
  },
  {
    path: '/mobileHome',
    name: 'm-Home',
    component: () => import('@/views/home/mHome')
  },
  {
    path: '/mobilePartner',
    name: 'm-Partner',
    component: () => import('@/views/partner/mPartner')
  },
  {
    path: '/m-store',
    name: 'm-store',
    component: () => import('@/views/store/')
  },
  {
    path: '/p-store',
    name: 'p-store',
    component: () => import('@/views/store/store')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

// 遍历所有页面，如果没有登录，从浏览器地址栏直接输入网址进入个人中心则进入首页
router.beforeEach((to, from, next) => {
  if(to.path.indexOf('admin') == 1) {
    if(!localStorage.getItem('loginUser')) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next();
  }
})



export default router
