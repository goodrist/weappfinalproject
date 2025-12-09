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
    title="Family & Kids"
    :items="familyItems"
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
import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import clubfleecehood from '../images/clubfleecehood.jpg';
import heavyweighthood from '../images/heavyweighthood.jpg';
import jerseylongsleevetee from '../images/jerseylongsleevetee.jpg';
import gvbeanie from '../images/gvbeanie.jpg';
import riseswooshflexhat from '../images/riseswooshflexhat.jpg';
import jvstjohnsburytotebag from '../images/jvstjohnsburytotebag.jpg';
import lakerstorelogo from '../images/lakerstore-logo.png';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';
import { useRouter } from "vue-router";
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
  router.push("/family-shop");
};

const familyItems: Product[] = [
  {
    id: 'f1',
    name: 'Youth Pennant Crew',
    price: '$39.99',
    image: pennantcrew,
    tag: 'Youth',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'f2',
    name: 'Youth Phoenix Fleece',
    price: '$39.99',
    image: phoenixfleececrew,
    tag: 'Youth',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'f3',
    name: 'Youth Hoodie',
    price: '$44.99',
    image: clubfleecehood,
    tag: 'Youth',
    colors: ['Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'f4',
    name: 'Youth Heavyweight Hoodie',
    price: '$44.99',
    image: heavyweighthood,
    tag: 'Youth',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'f5',
    name: 'Youth Long Sleeve Tee',
    price: '$24.99',
    image: jerseylongsleevetee,
    tag: 'Youth',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'f6',
    name: 'Youth Beanie',
    price: '$17.99',
    image: gvbeanie,
    tag: 'Youth',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'f7',
    name: 'Youth Flex Hat',
    price: '$21.99',
    image: riseswooshflexhat,
    tag: 'Youth',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'f8',
    name: 'Mini Tote Bag',
    price: '$24.99',
    image: jvstjohnsburytotebag,
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
  {
    id: 'f9',
    name: 'Family Game Day Tee',
    price: '$24.99',
    image: lakerstorelogo,
    tag: 'Unisex',
  },
  {
    id: 'f10',
    name: 'Family Hoodie',
    price: '$49.99',
    image: clubfleecehood,
    tag: 'Unisex',
  },
  {
    id: 'f11',
    name: 'Family Crewneck',
    price: '$47.99',
    image: powerblendsparklescrew,
    tag: 'Unisex',
  },
  {
    id: 'f12',
    name: 'Little Lakers Tee',
    price: '$21.99',
    image: jerseylongsleevetee,
    tag: 'Youth',
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
  console.log('Add to cart from Family:', payload);
};
</script>