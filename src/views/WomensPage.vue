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
    title="Featured Products"
    :items="featuredProducts"
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
import { ref } from 'vue';
import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';
import { useRouter } from "vue-router";

import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';


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
  router.push("/womens-shop");
};

const womensItems: Product[] = [
  {
    id: 'w1',
    name: 'Pennant Crew',
    price: '$49.99',
    image: pennantcrew,
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w2',
    name: 'Phoenix Fleece Crew',
    price: '$49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w3',
    name: 'Powerblend Sparkle Crew',
    price: '$52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
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
  console.log('Add to cart from Women’s:', payload);
};
</script>