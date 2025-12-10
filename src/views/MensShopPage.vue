<template>
  <ProductGrid
    v-if="!selectedItem"
    title="Men’s Apparel"
    :items="mensItems.slice(0, 6)"
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
import { useCartStore } from "../stores/cartStore";   // ⭐ REQUIRED CART STORE

// Images
import clubfleecehood from '../images/clubfleecehood.jpg';
import heavyweighthood from '../images/heavyweighthood.jpg';
import jerseylongsleevetee from '../images/jerseylongsleevetee.jpg';
import nikelegendtee from '../images/mensImages/nikelegendtee.jpg';
import athleticsofttouctee from '../images/mensImages/athleticsofttouchtee.jpg';
import adidascreatortee from '../images/mensImages/adidascreatortee.jpg';
import nikelegendtee2 from '../images/mensImages/nikelegendtee2.jpg';
import allamericantee from '../images/mensImages/allamericantee.jpg';
import nantucketfleece from '../images/mensImages/nantucketfleece.jpg';
import essentialfleecehood from '../images/mensImages/essentialfleecehood.jpg';
import hood from '../images/mensImages/hood.jpg';
import gvsuhood from '../images/mensImages/gvsuhood.jpg';

// ⭐ CART INSTANCE
const cart = useCartStore();

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

const mensItems: Product[] = [
  {
    id: 'club-fleece',
    name: 'Club Fleece Hoodie',
    price: '54.99',
    image: clubfleecehood,
    tag: 'Hoodie',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie',
    price: '54.99',
    image: heavyweighthood,
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'jersey-long-sleeve',
    name: 'Jersey Long Sleeve Tee',
    price: '29.99',
    image: jerseylongsleevetee,
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'nike-legend-tee',
    name: 'Nike Legend Tee',
    price: '42.99',
    image: nikelegendtee,
    tag: 'T-Shirt',
    colors: ['Dark Gray'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'athletic-soft-touch-tee',
    name: 'Athletic Soft Touch Tee',
    price: '39.99',
    image: athleticsofttouctee,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'adidas-creator-tee',
    name: 'Adidas Creator Tee',
    price: '42.99',
    image: adidascreatortee,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'nike-legend-tee',
    name: 'Nike Legend Tee',
    price: '42.99',
    image: nikelegendtee2,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'all-american-tee',
    name: 'All American Tee',
    price: '29.99',
    image: allamericantee,
    tag: 'T-Shirt',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'nantucket-fleece',
    name: 'Nantucket Fleece',
    price: '42.99',
    image: nantucketfleece,
    tag: 'Crewneck',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'men'
  },
  {
    id: 'wessential-fleece-hood',
    name: 'Essential Fleece Hood',
    price: '62.99',
    image: essentialfleecehood,
    tag: 'Hoodie',
    colors: ['Oatmeal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'men'
  },
  {
    id: 'hood',
    name: 'Hood',
    price: '42.99',
    image: hood,
    tag: 'Hoodie',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    category: 'men'
  },
  {
    id: 'gvsu-hood',
    name: 'GVSU Hood',
    price: '46.99',
    image: gvsuhood,
    tag: 'Hoodie',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'men'
  },
];

const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ FIXED — ADDS TO CART STORE ⭐⭐⭐
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

  selectedItem.value = null; // return to grid view
};
</script>
