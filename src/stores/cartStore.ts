import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<{
      id: string;
      name: string;
      price: number;
      size?: string;
      color?: string;
      image?: string;
      qty: number;
    }>
  }),

  actions: {
    addToCart(product: any) {
      // Example product structure
      this.items.push({
        id: product.id,
        name: product.name,
        size: product.size,
        color: product.color,
        price: product.price,
        image: product.image,
        qty: 1
      });
    },

    removeItem(id: string) {
      this.items = this.items.filter(i => i.id !== id);
    }
  },

  persist: true
});
