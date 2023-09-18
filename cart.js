// Import Vue 3
import { createApp } from 'vue';

// Create a new Vue app instance
const app = createApp({});

// Define a global data property for the cart count
app.config.globalProperties.cartCount = 0;

// Define a global method to increment the cart count
app.config.globalProperties.addToCart = function () {
  this.cartCount++;
};

// Mount the app to an element with ID "app" in your HTML
app.mount('#app2');