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
import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';

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
  alert("Men’s collection coming soon!");
};

const mensItems: Product[] = [
  {
    id: 'm1',
    name: 'Pennant Crew',
    price: '$49.99',
    image: './images/pennantcrew.jpg',
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm2',
    name: 'Phoenix Fleece Crew',
    price: '$49.99',
    image: './images/phoenixfleececrew.jpg',
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'm3',
    name: 'Powerblend Sparkle Crew',
    price: '$52.99',
    image: './images/powerblendsparklescrew.jpg',
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm4',
    name: 'Rise Swoosh Flex Hat',
    price: '$29.99',
    image: './images/riseswooshflexhat.jpg',
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'm5',
    name: 'GVSU Beanie',
    price: '$19.99',
    image: './images/gvbeanie.jpg',
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'm6',
    name: 'JV St. Johnsbury Tote Bag',
    price: '$34.99',
    image: './images/jvstjohnsburytotebag.jpg',
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
  {
    id: 'm7',
    name: 'Club Fleece Hoodie',
    price: '$54.99',
    image: './images/clubfleecehood.jpg',
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm8',
    name: 'Heavyweight Hoodie',
    price: '$54.99',
    image: './images/heavyweighthood.jpg',
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'm9',
    name: 'Jersey Long Sleeve Tee',
    price: '$29.99',
    image: './images/jerseylongsleevetee.jpg',
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'm10',
    name: 'Extra Pennant Crew',
    price: '$49.99',
    image: './images/pennantcrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'm11',
    name: 'Extra Phoenix Fleece Crew',
    price: '$49.99',
    image: './images/phoenixfleececrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'm12',
    name: 'Extra Sparkle Crew',
    price: '$52.99',
    image: './images/powerblendsparklescrew.jpg',
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