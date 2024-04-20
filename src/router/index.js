import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'some',
    //   component: () => import('../views/main/Index.vue')
    // },
    {
      path: '/',
      name: 'products.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/product/Show.vue')
    },
    {
      path: '/products/cart',
      name: 'products.cart',
      component: () => import('../views/product/Cart.vue')
    },
    {
      path: '/products/wishlist',
      name: 'products.wishlist',
      component: () => import('../views/product/Wishlist.vue')
    },
    {
      path: '/products/compare',
      name: 'products.compare',
      component: () => import('../views/product/Compare.vue')
    },
    
  ]
})

export default router
