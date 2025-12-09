<template>
    <div class="shop-page">
        <h1>Accessories</h1>

        <div class="shop-grid-content">

            <div 
                class="shop-grid-item"
                v-for="product in products"
                :key="product.id"
            >
                <img :src="product.image" alt="">
                <h2>{{ product.name }}</h2>
                <p>Price: ${{ product.price }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import { ref } from "vue";


import HatImg from "/images/riseswooshflexhat.jpg";
import BeanieImg from "/images/gvbeanie.jpg";
import ToteImg from "/images/jvstjohnsburytotebag.jpg";
import LogoImg from "/images/lakerstore-logo.png";
import PinImg from "/images/pennantcrew.jpg";
import KeychainImg from "/images/phoenixfleececrew.jpg";
import HoodieImg from "/images/clubfleecehood.jpg";
import LongSleeveImg from "/images/jerseylongsleevetee.jpg";

export default {
    name: "AccessoriesProducts",
    setup() {

        const products = ref([
            { id: 1, name: "Rise Swoosh Flex Hat", price: 29.99, image: HatImg },
            { id: 2, name: "GVSU Beanie", price: 19.99, image: BeanieImg },
            { id: 3, name: "JV St. Johnsbury Tote Bag", price: 34.99, image: ToteImg },
            { id: 4, name: "Game Day Tote", price: 32.99, image: ToteImg },
            { id: 5, name: "Logo Sticker Art", price: 9.99, image: LogoImg },
            { id: 6, name: "Logo Mug Print", price: 14.99, image: LogoImg },
            { id: 7, name: "Crew Patch Pin", price: 8.99, image: PinImg },
            { id: 8, name: "Fleece Patch Keychain", price: 8.99, image: KeychainImg },
            { id: 9, name: "Sparkle Laker Keychain", price: 9.99, image: KeychainImg },
            { id: 10, name: "Mini Hoodie Ornament", price: 12.99, image: HoodieImg },
            { id: 11, name: "Crewneck Ornament", price: 12.99, image: HoodieImg },
            { id: 12, name: "Laker Long Sleeve Art", price: 11.99, image: LongSleeveImg },
        ]);

        return {
            products,
        };
    },
};
</script>

<style scoped>
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
    color: var(--clr-accent);
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

/* --- Responsive layout --- */
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
