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
    title="Alumni Collection"
    :items="alumniItems"
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

const onShopClick = () => {
  alert('Alumni collection coming soon!');
};

const alumniItems: Product[] = [
  {
    id: 'al1',
    name: 'Alumni Pennant Crew',
    price: '$52.99',
    image: '../images/pennantcrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'al2',
    name: 'Alumni Phoenix Fleece',
    price: '$52.99',
    image: '../images/phoenixfleececrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'al3',
    name: 'Alumni Sparkle Crew',
    price: '$54.99',
    image: '../images/powerblendsparklescrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'al4',
    name: 'Alumni Club Fleece Hoodie',
    price: '$59.99',
    image: '../images/clubfleecehood.jpg',
    tag: 'Hoodie',
  },
  {
    id: 'al5',
    name: 'Alumni Heavyweight Hoodie',
    price: '$59.99',
    image: '../images/heavyweighthood.jpg',
    tag: 'Hoodie',
  },
  {
    id: 'al6',
    name: 'Alumni Long Sleeve Tee',
    price: '$29.99',
    image: '../images/jerseylongsleevetee.jpg',
    tag: 'T-Shirt',
  },
  {
    id: 'al7',
    name: 'Alumni Flex Hat',
    price: '$27.99',
    image: '../images/riseswooshflexhat.jpg',
    tag: 'Hat',
  },
  {
    id: 'al8',
    name: 'Alumni Beanie',
    price: '$21.99',
    image: '../images/gvbeanie.jpg',
    tag: 'Beanie',
  },
  {
    id: 'al9',
    name: 'Alumni Tote Bag',
    price: '$36.99',
    image: '../images/jvstjohnsburytotebag.jpg',
    tag: 'Accessory',
  },
  {
    id: 'al10',
    name: 'Alumni Logo Tee',
    price: '$26.99',
    image: '../images/lakerstore-logo.png',
    tag: 'T-Shirt',
  },
  {
    id: 'al11',
    name: 'Alumni Spirit Crew',
    price: '$52.99',
    image: '../images/pennantcrew.jpg',
    tag: 'Crewneck',
  },
  {
    id: 'al12',
    name: 'Alumni Pride Hoodie',
    price: '$59.99',
    image: '../images/clubfleecehood.jpg',
    tag: 'Hoodie',
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
  console.log('Add to cart from Alumni:', payload);
};
</script>