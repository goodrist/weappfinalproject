import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import WomensShopPage from '@/views/WomensShopPage.vue';
import MensPage from '@/views/MensPage.vue';
import WomensPage from '@/views/WomensPage.vue';
import FamilyPage from '@/views/FamilyPage.vue';
import AlumniPage from '@/views/AlumniPage.vue';
import CartPage from '@/views/CartPage.vue';
import FamilyShopPage from '@/views/FamilyShopPage.vue';  
import AlumniShopPage from '@/views/AlumniShopPage.vue';
import AthleisureShopPage from '@/views/AthleisureShopPage.vue';
import MensShopPage from '@/views/MensShopPage.vue';
import AccessoriesPage from '@/views/AccessoriesPage.vue';
import AccessoriesShopPage from '@/views/AccessoriesShopPage.vue';
import SuccessPage from '@/views/Success.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/accessories', name: 'accessories', component: AccessoriesPage },
  { path: '/mens', name: 'mens', component: MensPage },
  { path: '/womens', name: 'womens', component: WomensPage },
  { path: '/family', name: 'family', component: FamilyPage },
  { path: '/alumni', name: 'alumni', component: AlumniPage },
  { path: '/cart', name: 'cart', component: CartPage },

  { path: '/womens-shop', name: 'womens-shop', component: WomensShopPage },
  { path: '/athleisure', name: 'athleisure-shop', component: AthleisureShopPage },
  { path: '/family-shop', name: 'family-shop', component: FamilyShopPage },
  { path: '/alumni-shop', name: 'alumni-shop', component: AlumniShopPage },
  { path: '/mens-shop', name: 'mens-shop', component: MensShopPage },
  { path: '/accessories-shop', name: 'accessories-shop', component: AccessoriesShopPage },

  // ⭐ SUCCESS PAGE MUST BE ABOVE THE WILDCARD
  { path: '/success', name: 'success', component: SuccessPage },

  // Catch-all route — MUST stay last
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
