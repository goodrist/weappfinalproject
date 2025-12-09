<template>
  <section class="product-detail">
    <button class="back-btn" @click="emit('back')">
      ← Back to shop
    </button>

    <div class="detail-layout">
      <!-- Left: big product image -->
      <div class="detail-image-wrapper">
        <img :src="product.image" :alt="product.name" />
      </div>

      <!-- Right: info + options -->
      <div class="detail-info">
        <h2 class="detail-name">{{ product.name }}</h2>
        <p class="detail-price">{{ product.price }}</p>
        <p v-if="product.tag" class="detail-tag">{{ product.tag }}</p>

        <!-- Color -->
        <div class="detail-field">
          <label>Color</label>
          <select v-model="selectedColor">
            <option
              v-for="color in availableColors"
              :key="color"
              :value="color"
            >
              {{ color }}
            </option>
          </select>
        </div>

        <!-- Size -->
        <div class="detail-field">
          <label>Size</label>
          <select v-model="selectedSize">
            <option disabled value="">Select a size</option>
            <option
              v-for="size in availableSizes"
              :key="size"
              :value="size"
            >
              {{ size }}
            </option>
          </select>
        </div>

        <!-- Quantity -->
        <div class="detail-field">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            v-model.number="quantity"
          />
        </div>

        <button class="detail-add-btn" @click="onAddToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  colors?: string[];
  sizes?: string[];
};

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  back: [];
  'add-to-cart': [
    {
      product: Product;
      color: string;
      size: string;
      quantity: number;
    }
  ];
}>();

const selectedColor = ref('');
const selectedSize = ref('');
const quantity = ref(1);

const availableColors = computed(() => {
  return props.product.colors && props.product.colors.length
    ? props.product.colors
    : ['Royal Blue'];
});

const availableSizes = computed(() => {
  return props.product.sizes && props.product.sizes.length
    ? props.product.sizes
    : ['XS', 'S', 'M', 'L', 'XL'];
});

const onAddToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size before adding to cart.');
    return;
  }

  emit('add-to-cart', {
    product: props.product,
    color: selectedColor.value || availableColors.value[0],
    size: selectedSize.value,
    quantity: quantity.value || 1,
  });

  alert(
    `${quantity.value} × ${props.product.name} (${selectedSize.value}) added to cart (demo).`
  );
};
</script>

<style scoped>
.product-detail {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;
}

.back-btn {
  border: none;
  background: none;
  color: #0032a0;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.detail-image-wrapper {
  background: #fff;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.detail-image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.detail-info {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.detail-name {
  font-size: 1.8rem;
  margin: 0;
}

.detail-price {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem 0;
}

.detail-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #6b7280;
}

.detail-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.detail-field label {
  font-size: 0.85rem;
  font-weight: 500;
}

.detail-field select,
.detail-field input {
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 0.9rem;
  min-width: 140px;
}

.detail-add-btn {
  margin-top: 1.2rem;
  align-self: flex-start;
  background-color: #0032a0;
  color: #fff;
  border: none;
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

.detail-add-btn:hover {
  opacity: 0.92;
}

@media (max-width: 850px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
}
</style>
