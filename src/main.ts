import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import { useAuthStore } from "@/stores/authStore";

import { createRouter, createWebHistory } from "vue-router";
import "./assets/dashboard.css";

// Router setup
const router = createRouter({
  history: createWebHistory(),
  routes: [], // add views later
});

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
