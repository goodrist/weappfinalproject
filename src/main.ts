import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import { useAuthStore } from "./stores/authStore";

import { createRouter, createWebHistory } from "vue-router";
import "./assets/dashboard.css";
import router from "./router";

// Import global CSS
import './assets/dashboard.css';

// Create app
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Initialize Firebase auth listener
const authStore = useAuthStore();
authStore.init();

// Mount app
app.mount("#app");
