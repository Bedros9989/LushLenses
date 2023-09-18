let cartCount = 0;



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
      cartCount++; 
      console.log('addToCart method called. New cart count:', cartCount);

    },
  },
});


productListApp.mount('#app'); // Mount the Vue instance on the app element

const cartApp = Vue.createApp({
  data() {
    return {
      cartCount: cartCount 
    };
  },
});

cartApp.mount('#cartApp'); // Mount the Vue instance on the app2 element
