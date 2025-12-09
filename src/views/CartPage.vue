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
      <!-- Left: cart items list -->
      <div style="flex: 2 1 60%; min-width: 260px;">
        <!-- Cart item 1 (placeholder) -->
        <div
          style="
            display: flex;
            gap: 1rem;
            padding: 1rem 0;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          "
        >
          <!-- Image placeholder -->
          <div
            style="
              width: 96px;
              height: 120px;
              background-color: #e5e7eb;
              border-radius: 8px;
            "
          ></div>

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
                GV Classic Hoodie
              </p>
              <p style="margin: 0 0 0.3rem; color: #6b7280;">
                Size: M
              </p>
              <p style="margin: 0; color: #6b7280;">
                Color: Navy / White
              </p>
              <button
                type="button"
                style="
                  margin-top: 0.6rem;
                  padding: 0;
                  border: none;
                  background: none;
                  font-size: 0.8rem;
                  color: #9ca3af;
                  cursor: default;
                "
              >
                Remove
              </button>
            </div>

            <div style="text-align: right; min-width: 70px;">
              <p style="margin: 0 0 0.4rem;">$65.00</p>
              <p style="margin: 0; font-size: 0.8rem; color: #6b7280;">
                Qty: 1
              </p>
            </div>
          </div>
        </div>

        <!-- Cart item 2 (placeholder) -->
        <div
          style="
            display: flex;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid #e5e7eb;
          "
        >
          <div
            style="
              width: 96px;
              height: 120px;
              background-color: #e5e7eb;
              border-radius: 8px;
            "
          ></div>

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
                Pennant Crew
              </p>
              <p style="margin: 0 0 0.3rem; color: #6b7280;">
                Size: S
              </p>
              <p style="margin: 0; color: #6b7280;">
                Color: Heather Grey
              </p>
              <button
                type="button"
                style="
                  margin-top: 0.6rem;
                  padding: 0;
                  border: none;
                  background: none;
                  font-size: 0.8rem;
                  color: #9ca3af;
                  cursor: default;
                "
              >
                Remove
              </button>
            </div>

            <div style="text-align: right; min-width: 70px;">
              <p style="margin: 0 0 0.4rem;">$55.00</p>
              <p style="margin: 0; font-size: 0.8rem; color: #6b7280;">
                Qty: 1
              </p>
            </div>
          </div>
        </div>

        <!-- Empty-state note your teammate can keep or swap out -->
        <p
          style="
            margin-top: 1.2rem;
            font-size: 0.85rem;
            color: #6b7280;
          "
        >
          This is a placeholder cart layout. Later, items will be loaded from the
          user’s shopping bag and quantities will be editable.
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
            <span>$120.00</span>
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.4rem;
            "
          >
            <span>Estimated Shipping</span>
            <span>$0.00</span>
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
            <span>$120.00</span>
          </div>

          <button
            type="button"
            style="
              width: 100%;
              padding: 0.7rem 1rem;
              border-radius: 999px;
              border: none;
              background-color: #111827;
              color: #ffffff;
              font-size: 0.9rem;
              cursor: default;
            "
          >
            Checkout (placeholder)
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
