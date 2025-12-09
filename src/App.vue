<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import '@/assets/dashboard.css';
import { useAuthStore } from "./stores/authStore";
const auth = useAuthStore();

import router from './router';

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();


// Footer component
import FooterBar from './components/FooterBar.vue';
import HeaderBar from './components/HeaderBar.vue';

const isScrolled = ref(false);

// Scroll styling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
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
  <header>
    <HeaderBar />
  </header>

  <!-- PAGE CONTENT -->
  <main>
    <router-view />
  </main>

  <!-- FOOTER (hidden on Cart page) -->
  <FooterBar v-if="route.name !== 'cart'" />
</template>