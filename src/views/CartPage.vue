<template>
  <section class="featured">
    <h2>Shopping Bag</h2>

    <div
      style="
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        gap: 2rem;
        align-items: flex-start;
        flex-wrap: wrap;
      "
    >
      <!-- Cart items -->
      <div style="flex: 2 1 60%; min-width: 260px;">
        <div
          v-for="item in cart.items"
          :key="item.id"
          style="
            display: flex;
            gap: 1rem;
            padding: 1rem 0;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          "
        >
          <!-- Product Image -->
          <div
            style="
              width: 96px;
              height: 120px;
              background-color: #e5e7eb;
              border-radius: 8px;
            "
          >
            <img
              v-if="item.image"
              :src="item.image"
              alt=""
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
            />
          </div>

          <!-- Item info + price -->
          <div
            style="
              flex: 1;
              display: flex;
              justify-content: space-between;
              gap: 1rem;
              font-size: 0.9rem;
            "
          >
            <div>
              <p style="margin: 0 0 0.3rem; font-weight: 500;">
                {{ item.name }}
              </p>

              <p v-if="item.size" style="margin: 0 0 0.3rem; color: #6b7280;">
                Size: {{ item.size }}
              </p>

              <p v-if="item.color" style="margin: 0; color: #6b7280;">
                Color: {{ item.color }}
              </p>

              <button
                type="button"
                @click="cart.removeItem(item.id)"
                style="
                  margin-top: 0.6rem;
                  padding: 0;
                  border: none;
                  background: none;
                  font-size: 0.8rem;
                  color: #9ca3af;
                  cursor: pointer;
                "
              >
                Remove
              </button>
            </div>

            <div style="text-align: right; min-width: 70px;">
              <p style="margin: 0 0 0.4rem;">{{ item.price.toFixed(2) }}</p>
              <p style="margin: 0; font-size: 0.8rem; color: #6b7280;">
                Qty: {{ item.qty }}
              </p>
            </div>
          </div>
        </div>

        <p
          v-if="cart.items.length === 0"
          style="margin-top: 1.2rem; font-size: 0.85rem; color: #6b7280;"
        >
          Your cart is empty.
        </p>
      </div>

      <!-- Right: order summary -->
      <div
        style="
          flex: 1 1 260px;
          max-width: 320px;
          width: 100%;
        "
      >
        <div
          style="
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            padding: 1.5rem 1.4rem;
            background-color: #f9fafb;
            font-size: 0.9rem;
          "
        >
          <h3 style="margin: 0 0 1rem; font-size: 1rem;">Order Summary</h3>

          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.4rem;
            "
          >
            <span>Subtotal</span>
            <span>{{ subtotal.toFixed(2) }}</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.4rem;
            "
          >
            <span>Estimated Shipping</span>
            <span>0.00</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.9rem;
              font-size: 0.8rem;
              color: #6b7280;
            "
          >
            <span>Taxes</span>
            <span>Calculated at checkout</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              margin: 0.7rem 0 1.1rem;
              font-weight: 600;
            "
          >
            <span>Total</span>
            <span>{{ subtotal.toFixed(2) }}</span>
          </div>

          <button
            type="button"
            @click="handleFakeCheckout"
            style="
              width: 100%;
              padding: 0.7rem 1rem;
              border-radius: 999px;
              border: none;
              background-color: #111827;
              color: #ffffff;
              font-size: 0.9rem;
              cursor: pointer;
            "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase/firebase";

// Load cart store
const cart = useCartStore();

// Reactive subtotal
const subtotal = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)
);

// Fake checkout handler
async function handleFakeCheckout() {
  console.log("CHECKOUT CLICKED");

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("Please sign in before checking out.");
    return;
  }

  const order = {
    userId: user.uid,
    items: cart.items,
    total: subtotal.value,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "orders"), order);
    console.log("Order saved");
  } catch (err) {
    console.error("Checkout failed:", err);
    alert("Could not complete checkout. Check console.");
    return;
  }

  // Clear cart
  cart.clearCart?.();

  // Redirect to success page
window.open("payment-success.html", "_blank");

}
</script>
