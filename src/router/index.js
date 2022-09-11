import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: HomeView,
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children:[
      {
        path: 'products',
        name: '產品',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'carts',
        name: '購物車',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'contact',
        name: '訂購人資訊',
        component: () => import('../views/OrderContact.vue'),
      },
      {
        path: 'product/:productId',
        name: '看更多',
        component: () => import('../views/ProductMore.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: '結帳流程',
        component: () => import('../views/Checkout.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'backproducts',
        name: '管理產品',
        component: () => import('../views/back/BackProducts.vue'),
      },
      {
        path: 'order',
        name: '管理訂單',
        component: () => import('../views/back/Order.vue'),
      },
      {
        path: 'coupon',
        name: '管理優惠卷',
        component: () => import('../views/back/Coupon.vue'),
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '首頁',
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
  next()
})

export default router;
