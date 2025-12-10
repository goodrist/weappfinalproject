<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Alumni Laker Pride</h1>
      <p>Classic styles for GVSU grads and lifelong Lakers.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Alumni</a>
    </div>
  </section>

  <ProductGrid
    v-if="!selectedItem"
    title="Featured Products"
    :items="featuredProducts.slice(0, 3)"
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

// Images
import alumnihood from '../images/alumniImages/alumnihood.jpg';
import alumnisticker from '../images/alumniImages/alumnisticker.jpg';
import alumniwalldecor from '../images/alumniImages/alumniwalldecor.jpg';
import GVAlumni from '../images/alumniImages/GVAlumni.jpg';
import LadiestretchPolo from '../images/alumniImages/LadiestretchPolo.jpg';

import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cartStore";   // ✅ ADDED CART STORE

const router = useRouter();
const cart = useCartStore();    // ✅ CREATE CART INSTANCE

// Product type
type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  colors?: string[];
  sizes?: string[];
};

const onShopClick = () => {
  router.push("/alumni-shop");
};

// Featured products
const featuredProducts: Product[] = [
  {
    id: 'alumni-sticker',
    name: 'Alumni Sticker',
    price: '5.99',
    image: alumnisticker,
  },
  {
    id: 'alumni-hood',
    name: 'Alumni Hood',
    price: '39.99',
    image: alumnihood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'alumni-walldecor',
    name: 'Alumni Wall Decor',
    price: '16.00',
    image: alumniwalldecor,
  },
  {
    id: 'Gv-Alumni Mug',
    name: 'GV Alumni 20oz Mug',
    price: '18.99',
    image: GVAlumni,
  },
  {
    id: 'ladies-stretch-polo',
    name: 'Ladies Stretch Polo Shirt',
    price: '29.99',
    image: LadiestretchPolo,
    colors: ['Grey', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
];

const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ ADD TO CART — FIXED ⭐⭐⭐
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
    qty: payload.quantity
  });

  selectedItem.value = null;  // return to product grid
};
</script>
