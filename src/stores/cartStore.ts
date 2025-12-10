import { defineStore } from "pinia";
import { ref, watch } from "vue";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuthStore } from "./authStore";

export const useCartStore = defineStore("cartStore", () => {
  const auth = useAuthStore();

  // In-memory cart
  const items = ref<any[]>([]);

  // Firestore listener unsubscribe function
  let unsubscribe: any = null;

  // ---------------------------
  // LOAD CART WHEN USER LOGS IN
  // ---------------------------
  watch(
    () => auth.user,
    async (user) => {
      if (!user) {
        items.value = [];
        if (unsubscribe) unsubscribe();
        return;
      }

      const cartRef = collection(db, "users", user.uid, "cart");

      // Real-time Firestore sync
      unsubscribe = onSnapshot(cartRef, (snapshot) => {
        items.value = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      });
    },
    { immediate: true }
  );

  // ---------------------------
  // ADD ITEM
  // ---------------------------
  const addToCart = async (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    color: string;
    size: string;
    qty: number;
  }) => {
    if (!auth.user) return alert("You must sign in to add items to your cart.");

    const userId = auth.user.uid;

    // unique key based on item + variations
    const docId = `${item.id}_${item.size}_${item.color}`;

    await setDoc(doc(db, "users", userId, "cart", docId), item);
  };

  // ---------------------------
  // REMOVE ITEM
  // ---------------------------
  const removeItem = async (id: string) => {
    if (!auth.user) return;

    const userId = auth.user.uid;
    await deleteDoc(doc(db, "users", userId, "cart", id));
  };

  // ---------------------------
  // CLEAR CART
  // ---------------------------
  const clearCart = async () => {
    if (!auth.user) return;

    const userId = auth.user.uid;
    const cartRef = collection(db, "users", userId, "cart");
    const docs = await getDocs(cartRef);

    docs.forEach((d) => deleteDoc(doc(db, "users", userId, "cart", d.id)));
  };

  return {
    items,
    addToCart,
    removeItem,
    clearCart,
  };
});
