import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children:[
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'carts',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/ProductMore.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Checkout.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'backproducts',
        component: () => import('../views/back/BackProducts.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/back/Order.vue'),
      },
      {
        path: 'coupon',
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
