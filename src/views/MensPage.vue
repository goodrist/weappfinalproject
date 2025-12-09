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
    title="Men’s Apparel"
    :items="mensItems"
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
import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';
import clubfleecehood from '../images/clubfleecehood.jpg';
import heavyweighthood from '../images/heavyweighthood.jpg';
import jerseylongsleevetee from '../images/jerseylongsleevetee.jpg';
import riseswooshflexhat from '../images/riseswooshflexhat.jpg';
import gvbeanie from '../images/gvbeanie.jpg';
import jvstjohnsburytotebag from '../images/jvstjohnsburytotebag.jpg'; 

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

const mensItems: Product[] = [
  {
    id: 'm1',
    name: 'Pennant Crew',
    price: '$49.99',
    image: pennantcrew,
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm2',
    name: 'Phoenix Fleece Crew',
    price: '$49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'm3',
    name: 'Powerblend Sparkle Crew',
    price: '$52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm4',
    name: 'Rise Swoosh Flex Hat',
    price: '$29.99',
    image: riseswooshflexhat,
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'm5',
    name: 'GVSU Beanie',
    price: '$19.99',
    image: gvbeanie,
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'm6',
    name: 'JV St. Johnsbury Tote Bag',
    price: '$34.99',
    image: jvstjohnsburytotebag,
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
  {
    id: 'm7',
    name: 'Club Fleece Hoodie',
    price: '$54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm8',
    name: 'Heavyweight Hoodie',
    price: '$54.99',
    image: heavyweighthood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm9',
    name: 'Jersey Long Sleeve Tee',
    price: '$29.99',
    image: jerseylongsleevetee,
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'm10',
    name: 'Extra Pennant Crew',
    price: '$49.99',
    image: pennantcrew,
    tag: 'Crewneck',
  },
  {
    id: 'm11',
    name: 'Extra Phoenix Fleece Crew',
    price: '$49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
  },
  {
    id: 'm12',
    name: 'Extra Sparkle Crew',
    price: '$52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
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