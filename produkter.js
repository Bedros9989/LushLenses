/*********************************
Produkter
**********************************/


// Initialize Vue instance
const app = Vue.createApp({
    data() {
      return {
        products: []
      }
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
  



  
  
  // Mount the Vue instance on the app element
}).mount('#app')