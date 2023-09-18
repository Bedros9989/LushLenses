import { createApp } from 'vue';



// Common cart functions
let cartCount = 0;

const addToCart = () => {
  cartCount++;
};

const getCartCount = () => {
  return cartCount;
};

// Create a Vue app
const app = createApp({
  data() {
    return {
      products: [],
      cartCount: getCartCount(), // Initialize the cart count from the common file
    };
  },
  mounted() {
    // Fetch product data from JSON file
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
      .catch(error => console.error('Error fetching products:', error));
  },
  methods: {
    addToCart() {
      // Update the cart count using the function from the common file
      addToCart();
      this.cartCount = getCartCount(); // Update the cart count in the data
      console.log('addToCart method called. New cart count:', this.cartCount);
    },
  },
});


const productListApp = Vue.createApp({
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      // Fetch product data from JSON file
      fetch('products.json')
        .then(response => response.json())
        .then(data => {
          this.products = data;
        })
        .catch(error => console.error('Error fetching products:', error));
    },
    methods: {
      addToCart() {
        // Access the cartCount property from the cartApp instance
        cartCount++; // Increment the cart count in the cartApp instance
        console.log('addToCart method called. New cart count:', cartCount);
      },
    },
  });



// Mount the Vue instance on the app element
app.mount('#app');