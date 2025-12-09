<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Accessories</h1>
      <p>Hats, bags, and extras to complete your look.</p>

      <router-link to="/accessories" class="shop-btn">
        Shop Accessories
      </router-link>
      
    </div>
  </section>


  <ProductGrid
    v-if="!selectedItem"
    title="Accessories & Gifts"
    :items="accessoriesItems"
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

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  colors?: string[];
  sizes?: string[];
};


const accessoriesItems: Product[] = [
  {
    id: 'a1',
    name: 'Rise Swoosh Flex Hat',
    price: '$29.99',
    image: '/images/riseswooshflexhat.jpg',
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'a2',
    name: 'GVSU Beanie',
    price: '$19.99',
    image: '/images/gvbeanie.jpg',
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'a3',
    name: 'JV St. Johnsbury Tote Bag',
    price: '$34.99',
    image: '/images/jvstjohnsburytotebag.jpg',
    tag: 'Bag',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
  {
    id: 'a4',
    name: 'Game Day Tote',
    price: '$32.99',
    image: '/images/jvstjohnsburytotebag.jpg',
    tag: 'Bag',
  },
  {
    id: 'a5',
    name: 'Logo Sticker Art',
    price: '$9.99',
    image: '/images/lakerstore-logo.png',
    tag: 'Sticker',
  },
  {
    id: 'a6',
    name: 'Logo Mug Print',
    price: '$14.99',
    image: '/images/lakerstore-logo.png',
    tag: 'Drinkware',
  },
  {
    id: 'a7',
    name: 'Crew Patch Pin',
    price: '$8.99',
    image: '/images/pennantcrew.jpg',
    tag: 'Pin',
  },
  {
    id: 'a8',
    name: 'Fleece Patch Keychain',
    price: '$8.99',
    image: '/images/phoenixfleececrew.jpg',
    tag: 'Keychain',
  },
  {
    id: 'a9',
    name: 'Sparkle Laker Keychain',
    price: '$9.99',
    image: '/images/powerblendsparklescrew.jpg',
    tag: 'Keychain',
  },
  {
    id: 'a10',
    name: 'Mini Hoodie Ornament',
    price: '$12.99',
    image: '/images/clubfleecehood.jpg',
    tag: 'Decor',
  },
  {
    id: 'a11',
    name: 'Crewneck Ornament',
    price: '$12.99',
    image: '/images/heavyweighthood.jpg',
    tag: 'Decor',
  },
  {
    id: 'a12',
    name: 'Laker Long Sleeve Art',
    price: '$11.99',
    image: '/images/jerseylongsleevetee.jpg',
    tag: 'Decor',
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
  console.log('Add to cart from Accessories:', payload);
};
</script>
