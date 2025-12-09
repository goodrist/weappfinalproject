import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import WomensShopPage from '../views/WomensShopPage.vue';
import AccessoriesProducts from '../views/AccessoriesProducts.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/women', component: WomensShopPage },
  { path: '/accessories', component: AccessoriesProducts }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
