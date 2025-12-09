<template>
  <section class="product-page">
    <!-- Section title -->
    <h2 class="page-title">{{ title }}</h2>

    <!-- Product Grid -->
    <div class="product-grid">
      <div
        v-for="item in items"
        :key="item.id"
        class="product-card"
        @click="emit('select', item)"
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

defineProps<{
  title: string;
  items: ProductItem[];
}>();

const emit = defineEmits<{
  select: [ProductItem];
}>();
</script>


<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  text-align: center;
}

.product-card img {
  width: 100%;
  max-width: 180px; /* LIMIT PRODUCT IMAGE SIZE */
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.product-name {
  font-weight: 600;
  margin-top: 0.5rem;
}

.product-price {
  font-size: 0.9rem;
  color: #555;
}

.product-tag {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #777;
}
</style>
