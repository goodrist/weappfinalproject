<template>
    <ProductGrid
        v-if="!selectedItem"
        title="Women’s Apparel"
        :items="womensItems.slice(0, 6)"
        @select="handleSelect"
    />

    <!-- If an item is selected show detail view -->
    <ProductDetail
        v-else
        :product="selectedItem"
        @back="selectedItem = null"
        @add-to-cart="handleAddToCart"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from "../stores/cartStore";   // ⭐ REQUIRED

import ProductGrid from '../components/ProductGrid.vue';
import ProductDetail from '../components/ProductDetail.vue';

// Images
import pennantcrew from '../images/pennantcrew.jpg';
import phoenixfleececrew from '../images/phoenixfleececrew.jpg';
import powerblendsparklescrew from '../images/powerblendsparklescrew.jpg';
import babytee from '../images/womensImages/babytee.jpg';
import boyfriendtee from '../images/womensImages/boyfriendtee.jpg';
import firstdowncroptop from '../images/womensImages/firstdowncroptop.jpg';
import scoopneckcroptop from '../images/womensImages/scoopneckcroptop.jpg';
import cutofftank from '../images/womensImages/cutofftank.jpg';
import uagamedaytee from '../images/womensImages/uagamedaymotiontee.jpg';
import cutofftank2 from '../images/womensImages/cutofftank2.jpg';
import comfortwashjrtee from '../images/womensImages/comfortwashjrtee.jpg';
import clotheslinecroptop from '../images/womensImages/clotheslinecroptee.jpg';

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

const womensItems: Product[] = [
  {
    id: 'pennant-crew',
    name: 'Pennant Crew',
    price: '49.99',
    image: pennantcrew,
    tag: 'Crewneck',
    colors: ['Heather Gray', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'phoenix-fleece',
    name: 'Phoenix Fleece Crew',
    price: '49.99',
    image: phoenixfleececrew,
    tag: 'Crewneck',
    colors: ['Heather Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'sparkle-crew',
    name: 'Powerblend Sparkle Crew',
    price: '52.99',
    image: powerblendsparklescrew,
    tag: 'Crewneck',
    colors: ['Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'home'
  },
  {
    id: 'baby-tee',
    name: 'Baby Tee',
    price: '42.99',
    image: babytee,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],\
    category: 'women'
  },
  {
    id: 'boyfriend-tee',
    name: 'Boyfriend Tee',
    price: '29.99',
    image: boyfriendtee,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'first-down-crop-top',
    name: 'First Down Crop Top',
    price: '26.99',
    image: firstdowncroptop,
    tag: 'Crop Top',
    colors: ['Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'scoop-neck-crop-top',
    name: 'Scoop Neck Crop Top',
    price: '34.99',
    image: scoopneckcroptop,
    tag: 'Crop Top',
    colors: ['Heather Gray', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'cut-off-tank',
    name: 'Cut Off Tank',
    price: '42.99',
    image: cutofftank,
    tag: 'T-Shirt',
    colors: ['White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'under-armour-game-day-tee',
    name: 'Under Armour Game Day Tee',
    price: '46.99',
    image: uagamedaytee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'cut-off-tank',
    name: 'Cut Off Tank',
    price: '42.99',
    image: cutofftank2,
    tag: 'T-Shirt',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'comfort-wash-jr-tee',
    name: 'Comfort Wash Jr Tee',
    price: '24.99',
    image: comfortwashjrtee,
    tag: 'Hoodie',
    colors: ['Light Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
  {
    id: 'clothesline-crop-top',
    name: 'Clothesline Crop Tee',
    price: '29.99',
    image: clotheslinecroptop,
    tag: 'Crop Top',
    colors: ['White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women'
  },
];

const selectedItem = ref<Product | null>(null);

const handleSelect = (product: Product) => {
  selectedItem.value = product;
};

// ⭐⭐⭐ ADD TO CART — NOW WORKING ⭐⭐⭐
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

  selectedItem.value = null; // return to grid
};
</script>
