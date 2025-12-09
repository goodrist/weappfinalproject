<template>
  <!-- Hero Banner (unchanged visually) -->
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Pride Meets Everyday Style</h1>
      <p>Shop the new GVSU Athleisure Collection</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Now</a>
    </div>
  </section>

  <!-- If no product selected: show Featured grid -->
  <section v-if="!selectedProduct" class="featured">
    <h2>Featured Looks</h2>
    <div class="product-grid">
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="product-card"
        @click="() => selectProduct(product)"
        style="cursor: pointer;"
      >
        <img :src="product.image" :alt="product.name" />
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-path">test one two three</p>
        <p class="product-name">{{ product.name }}</p>
      </div>
    </div>
  </section>

  <!-- If a product is selected: show the item page -->
  <ProductDetail
    v-else
    :product="selectedProduct"
    @back="selectedProduct = null"
    @add-to-cart="handleAddToCart"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductDetail from '../components/ProductDetail.vue';
import pennantcrew from '/images/pennantcrew.jpg';
import phoenixfleececrew from '/images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '/images/powerblendsparklescrew.jpg';
import clubfleecehood from '/images/clubfleecehood.jpg';
import heavyweighthood from '/images/heavyweighthood.jpg';
import jerseylongsleevetee from '/images/jerseylongsleevetee.jpg';
import riseswooshflexhat from '/images/riseswooshflexhat.jpg';
import gvbeanie from '/images/gvbeanie.jpg';
import jvstjohnsburytotebag from '/images/jvstjohnsburytotebag.jpg';


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
  alert('Collection page coming soon!');
};

const featuredProducts: Product[] = [
  {
    id: 'pennant-crew',
    name: 'Pennant Crew',
    price: '$49.99',
    image: pennantcrew,
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'phoenix-fleece',
    name: 'Phoenix Fleece Crew',
    price: '$49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'sparkle-crew',
    name: 'Powerblend Sparkle Crew',
    price: '$52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'club-fleece',
    name: 'Club Fleece Hoodie',
    price: '$54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie',
    price: '$54.99',
    image: heavyweighthood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'jersey-long-sleeve',
    name: 'Jersey Long Sleeve Tee',
    price: '$29.99',
    image: jerseylongsleevetee,
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'rise-swoosh',
    name: 'Rise Swoosh Flex Hat',
    price: '$29.99',
    image: riseswooshflexhat,
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'gv-beanie',
    name: 'GVSU Beanie',
    price: '$19.99',
    image: gvbeanie,
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'jv-tote',
    name: 'JV St. Johnsbury Tote Bag',
    price: '$34.99',
    image: jvstjohnsburytotebag,
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
];

const selectedProduct = ref<Product | null>(null);

const selectProduct = (product: Product) => {
  selectedProduct.value = product;
};

const handleAddToCart = (payload: {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}) => {
  // For now we just log it; later we’ll plug into a real cart store.
  console.log('Add to cart:', payload);
};
</script>
