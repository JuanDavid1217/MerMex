/* import { createRouter, createWebHistory } from 'vue-router' */
import { createRouter, createWebHashHistory } from 'vue-router'
import { currentPage } from '@/services/GeneralService';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {page: 1}
  },
  {
    path: '/get-a-quote',
    name: 'get-a-quote',
    component: () => import('../views/QuoteView.vue'),
    meta: {page: 2.1}
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import('../views/ShippingView.vue'),
    meta: {page: 2.2}
  },
  {
    path: '/tracking',
    name: "tracking",
    component: () => import('../views/TrackingView.vue'),
    meta: {page: 3}
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  /* history: createWebHistory(process.env.BASE_URL), */
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      /*behavior: 'smooth'*/
    };
  }
})

router.beforeEach((to, _, next) => {
  if (to.meta?.page) {
    currentPage.value = to.meta.page;
  }else{
    currentPage.value = 0;
  }
  next();
});

export default router
