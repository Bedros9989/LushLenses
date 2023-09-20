const counter = document.getElementById('cart-count-info')


const productListApp = Vue.createApp({
  data() {
    return {
      products: [],
      count: 0
    };
  },

  methods: {
    addToTheCart() {
      this.count++;
      counter.textContent = this.count;
    },
  },
  watch: {
    count: {
      handler() {
        localStorage.setItem('count', this.count);
      },
      deep: true
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
      const x = localStorage.getItem('count');
      this.count = x;
      counter.textContent = x;
  },

});


productListApp.mount('#app'); // Mount the Vue instance on the app element


/*
<script>
// Retrieve cart count from localStorage
const cartCount = localStorage.getItem('count');

// Update the cart count element
const cartCountElement = document.getElementById('cart-count-info');
if (cartCountElement) {
  cartCountElement.textContent = cartCount || '0';
}
</script>
*/