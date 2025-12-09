<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- Left: brand -->
      <div class="footer-block">
        <img
          src="../images/lakerstore-logo.png"
          alt="GVSU Laker Store"
          class="footer-logo"
        />
        <p class="footer-text">
          GVSU Laker Store is owned and operated by Grand Valley State University.
        </p>
        <p class="footer-subtext">
          Your source for official Laker gear, spirit wear, and campus essentials.
        </p>
      </div>

      <!-- Middle: contact -->
      <div class="footer-block">
        <h4>Contact</h4>
        <p class="footer-line">1-(616)-331-2450</p>
        <p class="footer-line">
          <!-- clickable email that opens default mail app -->
          <a href="mailto:lakerstore@gvsu.edu">lakerstore@gvsu.edu</a>
        </p>
        <p class="footer-line">
          The Marketplace<br />
          10801 N Campus Dr<br />
          Allendale Charter Twp, MI 49401
        </p>
      </div>

      <!-- Right: connect -->
      <div class="footer-block">
        <h4>Connect</h4>

        <!-- “Email Us” also opens default mail app -->
        <button class="email-btn" @click="openEmail">
          Email Us
        </button>

        <div class="social-row">
          <a
            href="https://x.com/GVSU_LakerStore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GVSU Twitter"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/gvsulakerstore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GVSU Facebook"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/gvsulakerstore/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GVSU Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 GVSU LakerStore | Grand Valley State University</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const openEmail = () => {
  window.location.href = "mailto:lakerstore@gvsu.edu";
};
</script>
