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
