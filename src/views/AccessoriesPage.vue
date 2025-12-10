<template>
  <!-- Hero banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Accessories</h1>
      <p>Hats, bags, and extras to complete your look.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Accessories</a>
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
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cartStore";   // ✅ ADDED CART STORE

// Images
import bowclip from '../images/accessoriesimages/bowclip.jpg';
import bluebeads from '../images/accessoriesimages/bluebeads.jpg';
import dotsock from '../images/accessoriesimages/dotsock.jpg';
import gvbandana from '../images/accessoriesimages/gvbandana.jpg';
import gvsugoldtonednecklace from '../images/accessoriesimages/gvsugoldtonednecklace.jpg';
import plushyarnsocks from '../images/accessoriesimages/plushyarnsocks.jpg';
import riseswooshflexhat from '../images/accessoriesimages/riseswooshflexhat.jpg';
import gvbeanie from '../images/accessoriesimages/gvbeanie.jpg';
import jvstjohnsburytotebag from '../images/accessoriesimages/jvstjohnsburytotebag.jpg';
import primetimehat from '../images/accessoriesimages/primetimehat.jpg';
import luxescrunchie from '../images/accessoriesimages/luxescrunchie.jpg';
import z11hat from '../images/accessoriesimages/z11hat.jpg';

// Router + Store
const router = useRouter();
const cart = useCartStore();   // ✅ CREATE CART INSTANCE

// Product type
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

// Button link
const onShopClick = () => {
  router.push("/accessories-shop");
};

// Product data
const featuredProducts: Product[] = [
  {
    id: 'bow-clip',
    name: 'Bow Clip',
    price: '12.99',
    image: bowclip,
    tag: 'hairclip',
    category: 'accessory'
  },
  {
    id: 'blue-beads',
    name: 'Blue Beads',
    price: '1.50',
    image: bluebeads,
    category: 'accessory'
  },
  {
    id: 'royal-gvbandana',
    name: 'Royal GV Bandana',
    price: '11.99',
    image: gvbandana,
    colors: ['blue'],
    sizes: ['ONESIZE'],
    category: 'accessory'
  },
  {
    id: 'club-fleece',
    name: 'Club Fleece Hoodie',
    price: '12.99',
    image: dotsock,
    tag: 'Hoodie',
    colors: ['White', 'Blue'],
    sizes: ['ONE SIZE'],
    category: 'home'
  },
  {
    id: 'gvsu-goldtoned-necklace',
    name: 'GVSU Gold Toned Necklace',
    price: '21.99',
    image: gvsugoldtonednecklace,
    category: 'accessory'
  },
  {
    id: 'johnsbury-totebag',
    name: 'Jersey Long Sleeve Tee',
    price: '29.99',
    image: jvstjohnsburytotebag,
    tag: 'Tote-Bag',
    colors: ['Black'],
    category: 'accessory'
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
    id: 'plush-yarnsock',
    name: 'Plush Yarn Sock',
    price: '19.99',
    image: plushyarnsocks,
    tag: 'plushyarnsock',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
    category: 'accessory'
  },
  {
    id: 'z11-hat',
    name: 'Z11 Hat',
    price: '29.99',
    image: z11hat,
    tag: 'hat',
    colors: ['Black'],
    sizes: ['One Size'],
    category: 'accessory'
  },
  {
    id: 'luxe-scrunchie',
    name: 'Luxe Scrunchie',
    price: '19.99',
    image: luxescrunchie,
    tag: 'scrunchie',
    colors: ['Royal Blue', 'White'],
    sizes: ['One Size'],
    category: 'accessory'
  },
  {
    id: 'primetime-hat',
    name: 'Primetime Hat',
    price: '22.99',
    image: primetimehat,
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
    category: 'accessory'
  },
];

// Selected item for detail page
const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ ADD TO CART — FIXED AND WORKING ⭐⭐⭐
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

  selectedItem.value = null;
};
</script>
