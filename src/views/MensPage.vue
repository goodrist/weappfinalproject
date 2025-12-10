<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Men’s Laker Gear</h1>
      <p>Hoodies, crews, and caps for every game day.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Men’s</a>
    </div>
  </section>

  <!-- If no item selected: show grid -->
  <ProductGrid
    v-if="!selectedItem"
    title="Featured Products"
    :items="featuredProducts"
    @select="handleSelect"
  />

  <!-- If an item is selected: show detail page -->
  <ProductDetail
    v-else
    :product="selectedItem"
    @back="selectedItem = null"
    @add-to-cart="handleAddToCart"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";

import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';

import clubfleecehood from '../images/clubfleecehood.jpg';
import heavyweighthood from '../images/heavyweighthood.jpg';
import jerseylongsleevetee from '../images/jerseylongsleevetee.jpg';


const router = useRouter();

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
  router.push("/mens-shop");
};

const featuredProducts: Product[] = [
  {
    id: 'club-fleece',
    name: 'Club Fleece Hoodie',
    price: '54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie',
    price: '54.99',
    image: heavyweighthood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'jersey-long-sleeve',
    name: 'Jersey Long Sleeve Tee',
    price: '29.99',
    image: jerseylongsleevetee,
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
];

const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

const handleAddToCart = (payload: {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}) => {
  console.log('Add to cart from Men’s:', payload);
};
</script>