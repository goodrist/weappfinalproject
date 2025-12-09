<template>
    <div class="shop-page">
        <h1>Women's</h1>
        <div class="shop-grid-content">
            <div class="shop-grid-item" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="">
                <h2>{{ product.name }}</h2>
                <p>Price: ${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import TestImg from '/images/Test-Img.png';
export default {
    name: 'ShopPage',
    setup() {
        const products = ref([
            { id: 1, name: 'Shirt 1', price: 29.99, image: TestImg },
            { id: 2, name: 'Shirt 2', price: 49.99, image: TestImg },
            { id: 3, name: 'Shirt 3', price: 19.99, image: TestImg },
            { id: 4, name: 'Shirt 4', price: 99.99, image: TestImg },
            { id: 5, name: 'Shirt 5', price: 29.99, image: TestImg },
            { id: 6, name: 'Shirt 6', price: 49.99, image: TestImg },
            { id: 7, name: 'Shirt 7', price: 19.99, image: TestImg },
            { id: 8, name: 'Shirt 8', price: 99.99, image: TestImg },
            { id: 9, name: 'Shirt 9', price: 29.99, image: TestImg },
            { id: 10, name: 'Shirt 10', price: 49.99, image: TestImg },
            { id: 11, name: 'Shirt 11', price: 19.99, image: TestImg },
            { id: 12, name: 'Shirt 12', price: 99.99, image: TestImg }
        ]);

        return {
            products
        };
    },
};
</script>


<style>

:root {
    --clr-background: #fff;
    --clr-accent: hsl(233 100% 26.9%);
    --clr-text: hsl(21 9.3% 5.8%);
    --clr-text-light: hsl(21 4.4% 19.7%);
    --clr-shadow: hsla(0, 0%, 91%, 0.75);
}

.shop-page {
    padding: 5%;
    background-color: var(--clr-background);
}

h1 {
    text-align: center;
    margin-bottom: 2%;
}

.shop-grid-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.shop-grid-item {
    background-color: var(--clr-background);
    border-radius: 10px;
    padding: .6%;
    margin: 2%;
    text-align: center;
    cursor: pointer;
    transition: transform 0.5s;
    box-shadow: 0px 0px .5rem var(--clr-shadow);
}

.shop-grid-item:hover {
    transform: scale(101%, 101%);
    box-shadow: 0px 0px 1rem var(--clr-shadow);
}

img {
    max-width: 90%;
}

@media screen and (max-width: 1300px) {
    .shop-grid-content {
        grid-template-columns: repeat(3, 1fr);
    }
    
}

@media screen and (max-width: 1000px) {
    .shop-grid-content {
        grid-template-columns: repeat(2, 1fr);
    }
    
}

@media screen and (max-width: 600px) {
    .shop-grid-content {
        grid-template-columns: 1fr;
    }
    
}




</style>