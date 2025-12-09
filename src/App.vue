<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

import { useAuthStore } from "@/stores/authStore";
const auth = useAuthStore();


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

const handleCartClick = () => {
  if (!auth.user) {
    alert("Please sign in to view your shopping bag.");
    return;
  }
  goToCart(); // allowed
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

        
        <!-- SIGN-IN / USER INFO + SIGN OUT -->
        <div>
          <!-- Loading -->
          <span v-if="auth.loading">Loading...</span>

          <!-- If NOT logged in -->
          <a
            v-else-if="!auth.user"
            href="#"
            class="signin"
            @click.prevent="auth.login"
          >
            Sign In
          </a>

          <!-- If logged in: show user -->
          <div v-else style="display: flex; align-items: center; gap: 0.5rem;">
            <img
              :src="auth.user.photoURL"
              alt="User"
              style="width: 28px; height: 28px; border-radius: 50%;"
            />
            <span>{{ auth.user.displayName }}</span>
            <button
              @click="auth.logout"
              style="background: none; border: none; color: #0032A0; cursor: pointer;"
            >
              Sign Out
            </button>
          </div>
        </div>

        <!-- CART BUTTON (protected) -->
        <a
          href="#"
          class="cart"
          @click.prevent="handleCartClick"
        >
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