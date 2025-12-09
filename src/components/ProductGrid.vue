<template>
  <section class="product-page">
    <!-- Section title -->
    <h2 class="page-title">{{ title }}</h2>

    <!-- Same structure as HomePage grid -->
    <div class="product-grid">
      <div
        v-for="item in items"
        :key="item.id"
        class="product-card"
        @click="() => emit('select', item)"
        style="cursor: pointer;"
      >
        <img
          :src="item.image"
          :alt="item.name"
        />
        <p class="product-name">{{ item.name }}</p>
        <p class="product-price">{{ item.price }}</p>
        <p v-if="item.tag" class="product-tag">
          {{ item.tag }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ProductItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
};

const props = defineProps<{
  title: string;
  items: ProductItem[];
}>();

const emit = defineEmits<{
  (e: 'select', item: ProductItem): void;
}>();
</script>

<style scoped>
.product-page {
  padding: 4rem 2rem;
  text-align: center;
}

.page-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #0032a0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.product-price {
  margin-top: 0.3rem;
  font-weight: 600;
}

.product-tag {
  margin-top: 0.15rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #555;
}

img {
  min-height: 75%;
}

@media (max-width: 1200px) {
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
  }
}
@media (max-width: 800px) {
  .product-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    justify-items: center;
  }
}
</style>