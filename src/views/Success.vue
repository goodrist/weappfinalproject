<template>
  <section
    style="
      max-width: 600px;
      margin: 4rem auto;
      text-align: center;
      padding: 2rem;
    "
  >
    <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #111827;">
      🎉 Order Placed Successfully!
    </h1>

    <p style="font-size: 1rem; color: #4b5563; margin-bottom: 2rem;">
      Thank you for your purchase!  
      Your order has been saved and will be processed shortly.
    </p>

    <router-link
      to="/"
      style="
        display: inline-block;
        padding: 0.7rem 1.4rem;
        border-radius: 999px;
        background-color: #111827;
        color: white;
        font-size: 1rem;
        text-decoration: none;
      "
    >
      Continue Shopping
    </router-link>
  </section>
</template>

<script setup lang="ts">
// No script needed for this simple success page
</script>
