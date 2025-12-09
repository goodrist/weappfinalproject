<template>
  <div class="accessories-page">

    <!-- Hero banner -->
    <section class="hero">
      <div class="hero-text">
        <h1>Laker Accessories</h1>
        <p>Hats, bags, and extras to complete your look.</p>

        <router-link to="/accessories" class="shop-btn">
          Shop Accessories
        </router-link>
      </div>
    </section>

    <!-- Product Grid -->
    <ProductGrid
      v-if="!selectedItem"
      title="Accessories & Gifts"
      :items="accessoriesItems"
      @select="handleSelect"
    />

    <!-- Product Detail -->
    <ProductDetail
      v-else
      :product="selectedItem"
      @back="selectedItem = null"
      @add-to-cart="handleAddToCart"
    />

  </div>
</template>
