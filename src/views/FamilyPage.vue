<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Family Laker Gear</h1>
      <p>Match with the whole crew on game day.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Family</a>
    </div>
  </section>

  <ProductGrid
    v-if="!selectedItem"
    title="Featured Products"
    :items="featuredProducts"
    @select="handleSelect"
  />

  <ProductDetail
    v-else
    :product="selectedItem"
    @back="selectedItem = null"
    @add-to-cart="handleAddToCart"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cartStore";   // ⭐ REQUIRED FOR CART

// Images
import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';
import clubfleecehood from '../images/clubfleecehood.jpg';
import heavyweighthood from '../images/heavyweighthood.jpg';
import jerseylongsleevetee from '../images/jerseylongsleevetee.jpg';
import riseswooshflexhat from '../images/riseswooshflexhat.jpg';
import gvbeanie from '../images/gvbeanie.jpg';
import jvstjohnsburytotebag from '../images/jvstjohnsburytotebag.jpg';

// Router + Cart Store
const router = useRouter();
const cart = useCartStore();   // ⭐ CART INSTANCE

// Types
type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  colors?: string[];
  sizes?: string[];
  category: string;
};

// Shop button route
const onShopClick = () => {
  router.push("/family-shop");
};

// Featured Products
const featuredProducts: Product[] = [
  {
    id: 'pennant-crew',
    name: 'Pennant Crew',
    price: '49.99',
    image: pennantcrew,
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'phoenix-fleece',
    name: 'Phoenix Fleece Crew',
    price: '49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'sparkle-crew',
    name: 'Powerblend Sparkle Crew',
    price: '52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'club-fleece',
    name: 'Club Fleece Hoodie',
    price: '54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie',
    price: '54.99',
    image: heavyweighthood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'jersey-long-sleeve',
    name: 'Jersey Long Sleeve Tee',
    price: '29.99',
    image: jerseylongsleevetee,
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'rise-swoosh',
    name: 'Rise Swoosh Flex Hat',
    price: '29.99',
    image: riseswooshflexhat,
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
    category: 'home'
  },
  {
    id: 'gv-beanie',
    name: 'GVSU Beanie',
    price: '19.99',
    image: gvbeanie,
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
    category: 'home'
  },
  {
    id: 'jv-tote',
    name: 'JV St. Johnsbury Tote Bag',
    price: '34.99',
    image: jvstjohnsburytotebag,
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
    category: 'home'
  },
];

// Handle selection
const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ ADD TO CART — FIXED & WORKING ⭐⭐⭐
const handleAddToCart = (payload: {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}) => {

  cart.addToCart({
    id: payload.product.id,
    name: payload.product.name,
    price: Number(payload.product.price),
    image: payload.product.image,
    color: payload.color,
    size: payload.size,
    qty: payload.quantity,
  });

  selectedItem.value = null;  // Return to grid after adding
};
</script>
