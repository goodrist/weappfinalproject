<template>
    <ProductGrid
        v-if="!selectedItem"
        title="Women’s Apparel"
        :items="womensItems"
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
import { ref, watch } from 'vue';
import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';
import babytee from '../images/babytee.jpg';
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
  {
    id: 'w4',
    name: 'Baby Tee',
    price: '$42.99',
    image: babytee,
    tag: 'Hoodie',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w5',
    name: 'Heavyweight Hoodie',
    price: '$54.99',
    image: './images/heavyweighthood.jpg',
    tag: 'Hoodie',
    colors: ['Heather Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w6',
    name: 'Jersey Long Sleeve Tee',
    price: '$29.99',
    image: './images/jerseylongsleevetee.jpg',
    tag: 'T-Shirt',
    colors: ['White', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'w7',
    name: 'Rise Swoosh Flex Hat',
    price: '$29.99',
    image: './images/riseswooshflexhat.jpg',
    tag: 'Hat',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'w8',
    name: 'GVSU Beanie',
    price: '$19.99',
    image: './images/gvbeanie.jpg',
    tag: 'Beanie',
    colors: ['Royal Blue'],
    sizes: ['One Size'],
  },
  {
    id: 'w9',
    name: 'JV St. Johnsbury Tote Bag',
    price: '$34.99',
    image: './images/jvstjohnsburytotebag.jpg',
    tag: 'Accessory',
    colors: ['Natural Canvas'],
    sizes: ['One Size'],
  },
  {
    id: 'w10',
    name: 'Everyday Logo Tee',
    price: '$24.99',
    image: './images/lakerstore-logo.png',
    tag: 'T-Shirt',
  },
  {
    id: 'w11',
    name: 'Game Day Hoodie',
    price: '$54.99',
    image: './images/clubfleecehood.jpg',
    tag: 'Hoodie',
  },
  {
    id: 'w12',
    name: 'Cozy Campus Crew',
    price: '$49.99',
    image: './images/phoenixfleececrew.jpg',
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
  console.log('Add to cart from Women’s:', payload);
};

</script>

