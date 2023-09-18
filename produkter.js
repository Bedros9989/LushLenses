const counter = document.getElementById('cart-count-info')
let count = 0;

const productListApp = Vue.createApp({
  data() {
    return {
      products: [],
    };
  },

  methods: {
    addToTheCart() {
      count++;
      counter.textContent = count;
    },
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

});


productListApp.mount('#app'); // Mount the Vue instance on the app element

