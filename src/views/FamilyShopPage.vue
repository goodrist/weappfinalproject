<template>
    <ProductGrid
        v-if="!selectedItem"
        title="Family Apparel"
        :items="familyItems.slice(0, 6)"
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
import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';

import championmompowerblendcrew from '../images/familyImages/championmompowerblendcrew.jpg';
import championmomjerseytee from '../images/familyImages/championmomjerseytee.jpg';
import ladiescoastlineepicpolo from '../images/familyImages/ladiescoastlineepicpolo.jpg';
import gvmommug from '../images/familyImages/gvmommug.jpg';
import dadtee from '../images/familyImages/dadtee.jpg';
import relaxedtwilldadhat from '../images/familyImages/relaxedtwilldadhat.jpg';
import coastlineepiczip from '../images/familyImages/coastlineepiczip.jpg';
import grandpacrecrew from '../images/familyImages/grandpacrew.jpg';
import grandmacrew from '../images/familyImages/grandmacrew.jpg';
import sistertee from '../images/familyImages/sistertee.jpg';
import brothertee from '../images/familyImages/brothertee.jpg';
import youtharmourfleecehood from '../images/familyImages/youtharmourfleecehood.jpg';


type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  colors?: string[];
  sizes?: string[];
};

const familyItems: Product[] = [
  {
    id: 'w1',
    name: 'Champion Mom Powerblend Crew',
    price: '54.99',
    image: championmompowerblendcrew,
    tag: 'Crewneck',
    colors: ['Tan'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w2',
    name: 'Champion Mom Jersey Tee',
    price: '21.99',
    image: championmomjerseytee,
    tag: 'T-Shirt',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'w3',
    name: 'Ladies Coastline Epic Polo',
    price: '66.99',
    image: ladiescoastlineepicpolo,
    tag: 'Polo',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'w4',
    name: 'GV Mom Mug 16oz',
    price: '16.99',
    image: gvmommug,
    tag: 'Mug',
  },
  {
    id: 'w5',
    name: 'Dad Tee',
    price: '24.99',
    image: dadtee,
    tag: 'T-Shirt',
    colors: ['Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'w6',
    name: 'Relaxed Twill Dad Hat',
    price: '24.99',
    image: relaxedtwilldadhat,
    tag: 'Hat',
    colors: ['Black'],
    sizes: ['One Size'],
  },
  {
    id: 'w7',
    name: 'Coastline Epic Zip Hood',
    price: '64.99',
    image: coastlineepiczip,
    tag: 'Quarter-Zip',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'w8',
    name: 'Grandpa Crew',
    price: '42.99',
    image: grandpacrecrew,
    tag: 'Crew',
    colors: ['Dark Gray'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: 'w9',
    name: 'Grandma Crew',
    price: '44.99',
    image: grandmacrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'w10',
    name: 'Sister Tee',
    price: '21.99',
    image: sistertee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'w11',
    name: 'Brother Tee',
    price: '21.99',
    image: brothertee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 'w12',
    name: 'Youth Armour Fleece Hood',
    price: '56.99',
    image: youtharmourfleecehood,
    tag: 'Hoodie',
    colors: ['Oxford'],
    sizes: ['YS', 'YM', 'YL', 'YXL']
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

