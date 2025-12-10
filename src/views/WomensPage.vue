<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Women’s Laker Gear</h1>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Women’s</a>
    </div>
  </section>

  <!-- If no item selected: show grid -->
  <ProductGrid
    v-if="!selectedItem"
    title="Women’s Apparel"
    :items="womensItems.slice(0, 3)"
    @select="handleSelect"
  />

  <!-- If an item is selected: show detail view -->
  <ProductDetail
    v-else
    :product="selectedItem"
    @back="selectedItem = null"
    @add-to-cart="handleAddToCart"
  />
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/cartStore";   // ⭐ REQUIRED
import { ref } from 'vue';
import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';
import { useRouter } from "vue-router";

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
import lakerstorelogo from '../images/lakerstore-logo.png';

const router = useRouter();
const cart = useCartStore();    // ⭐ CART INSTANCE

// Type
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

// Button click → route to full shop page
const onShopClick = () => {
  router.push("/womens-shop");
};

// Women’s product list
const womensItems: Product[] = [
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
  {
    id: 'everyday-logo-tee',
    name: 'Everyday Logo Tee',
    price: '24.99',
    image: lakerstorelogo,
    tag: 'T-Shirt',
    category: 'women'
  },
  {
    id: 'game-day-hoodie',
    name: 'Game Day Hoodie',
    price: '54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    category: 'women'
    
  },
  {
    id: 'cozy-campus-crew',
    name: 'Cozy Campus Crew',
    price: '49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    category: 'women'
  },
];

// Selecting items for detail view
const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ FIXED — Add to cart now works! ⭐⭐⭐
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

  selectedItem.value = null;  // return to grid
};
</script>
