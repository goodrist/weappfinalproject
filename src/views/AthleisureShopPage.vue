<template>
    <ProductGrid
        v-if="!selectedItem"
        title="Athleisure"
        :items="athleticItems.slice(0, 6)"
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

import basketballtee from '../images/athleisureImages/basketballtee.jpg';
import crosscountrytee from '../images/athleisureImages/crosscountrytee.jpg';
import footballtee from '../images/athleisureImages/footballtee.jpg';
import golftee from '../images/athleisureImages/golftee.jpg';
import lacrossetee from '../images/athleisureImages/lacrossetee.jpg';
import soccertee from '../images/athleisureImages/soccertee.jpg';
import softballtee from '../images/athleisureImages/softballtee.jpg';
import swimdivetee from '../images/athleisureImages/swimdivetee.jpg';
import tennistee from '../images/athleisureImages/tennistee.jpg';
import trackfieldtee from '../images/athleisureImages/trackfieldtee.jpg';
import volleyballtee from '../images/athleisureImages/volleyballtee.jpg';
import wrestlingtee from '../images/athleisureImages/wrestlingtee.jpg';


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

const athleticItems: Product[] = [
  {
    id: 'w1',
    name: 'c',
    price: '$21.99',
    image: basketballtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w2',
    name: 'Cross Country Tee',
    price: '$21.99',
    image: crosscountrytee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w3',
    name: 'Football Tee',
    price: '$21.99',
    image: footballtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w4',
    name: 'Golf Tee',
    price: '$21.99',
    image: golftee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w5',
    name: 'Lacrosse Tee',
    price: '$21.99',
    image: lacrossetee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  
  {
    id: 'w6',
    name: 'Soccer Tee',
    price: '$21.99',
    image: soccertee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w7',
    name: 'Softball Tee',
    price: '$21.99',
    image: softballtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w8',
    name: 'Swim & Dive Tee',
    price: '$21.99',
    image: swimdivetee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w9',
    name: 'Tennis Tee',
    price: '$21.99',
    image: tennistee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w10',
    name: 'Track & Field Tee',
    price: '$21.99',
    image: trackfieldtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w11',
    name: 'Volleyball Tee',
    price: '$21.99',
    image: volleyballtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
  },
  {
    id: 'w12',
    name: 'Wrestling Tee',
    price: '$21.99',
    image: wrestlingtee,
    tag: 'T-Shirt',
    colors: ['Oxford'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'athleisure'
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