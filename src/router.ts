import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import WomensShopPage from '@/views/WomensShopPage.vue';
import AccessoriesProducts from '@/views/AccessoriesProducts.vue';
import MensPage from '@/views/MensPage.vue';
import WomensPage from '@/views/WomensPage.vue';
import FamilyPage from '@/views/FamilyPage.vue';
import AlumniPage from '@/views/AlumniPage.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/accessories',name: 'accessories', component: AccessoriesProducts },
  { path: '/mens', name: 'mens', component: MensPage },
  { path: '/womens', name: 'womens', component: WomensPage },
  { path: '/family', name: 'family', component: FamilyPage },
  { path: '/alumni', name: 'alumni', component: AlumniPage },
  { path: '/cart', name: 'cart', component: CartPage },
  { path: '/womens-shop', name: 'womens-shop', component: WomensShopPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
