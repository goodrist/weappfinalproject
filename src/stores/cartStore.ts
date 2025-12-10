import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref<any[]>([]);

  const addToCart = (item: any) => {
    items.value.push(item);
  };

  const removeItem = (id: string) => {
    items.value = items.value.filter(i => i.id !== id);
  };

  return {
    items,
    addToCart,
    removeItem,
  };
});
