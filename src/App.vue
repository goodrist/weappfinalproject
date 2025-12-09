<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Page imports
import HomePage from './views/HomePage.vue';
import MensPage from './views/MensPage.vue';
import WomensPage from './views/WomensPage.vue';
import FamilyPage from './views/FamilyPage.vue';
import AccessoriesPage from './views/AccessoriesPage.vue';
import AlumniPage from './views/AlumniPage.vue';
import CartPage from './views/CartPage.vue';

// Footer component
import FooterBar from './components/FooterBar.vue';

// Page type
type PageKey =
  | 'home'
  | 'mens'
  | 'womens'
  | 'family'
  | 'accessories'
  | 'alumni'
  | 'cart';

const currentPage = ref<PageKey>('home');
const isScrolled = ref(false);

// Map of pages
const pageMap: Record<PageKey, any> = {
  home: HomePage,
  mens: MensPage,
  womens: WomensPage,
  family: FamilyPage,
  accessories: AccessoriesPage,
  alumni: AlumniPage,
  cart: CartPage,
};

const currentPageComponent = computed(() => pageMap[currentPage.value]);

// Scroll styling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Navigation
const navigateTo = (page: PageKey) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const goToCart = () => {
  navigateTo('cart');
};

// Mount listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- HEADER -->
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="top-bar">
      <div class="right-icons">
        <!-- Sign In now also goes to Cart -->
        <a href="#" class="signin" @click.prevent="goToCart">Sign In</a>
        <a href="#" class="cart" @click.prevent="goToCart">
          <img src="/images/cart-icon.png" alt="Shopping Cart" />
        </a>
      </div>
    </div>

    <div class="logo-container">
      <img
        src="/images/lakerstore-logo.png"
        alt="GVSU LakerStore Logo"
        class="logo-img"
      />
    </div>

    <nav class="nav-menu">
      <ul>
        <li><a href="#" @click.prevent="navigateTo('home')">Home</a></li>
        <li><a href="#" @click.prevent="navigateTo('mens')">Men’s</a></li>
        <li><a href="#" @click.prevent="navigateTo('womens')">Women’s</a></li>
        <li><a href="#" @click.prevent="navigateTo('family')">Family</a></li>
        <li>
          <a href="#" @click.prevent="navigateTo('accessories')">Accessories</a>
        </li>
        <li><a href="#" @click.prevent="navigateTo('alumni')">Alumni</a></li>
      </ul>
    </nav>
  </header>

  <!-- PAGE CONTENT -->
  <main>
    <component :is="currentPageComponent" />
  </main>

  <!-- FOOTER (hidden on Cart page) -->
  <FooterBar v-if="currentPage !== 'cart'" />
</template>

<style scoped>
/* HEADER LAYOUT */
.navbar {
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  background: white;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.right-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.logo-container {
  margin: 0.5rem 0;
}

/* FIX HUGE LOGO */
.logo-img {
  max-width: 250px;
  height: auto;
  display: block;
}

/* FIX HUGE CART ICON */
.cart img {
  width: 40px;
  height: auto;
  display: block;
}

/* NAVIGATION */
.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 1rem;
  display: flex;
  gap: 1.5rem;
}

.nav-menu a {
  text-decoration: none;
  color: #0032a0;
  font-weight: 600;
}

/* PAGE CONTENT LAYOUT */
main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
