const counter = document.getElementById('cart-count-info')
let x = localStorage.getItem('count');
if (x === null) {
  x = 0;
}

counter.textContent = x;

const productListApp = Vue.createApp({
  data() {
    return {
      products: [],
      cart: [], // Array to store selected products
      count: 0
    };
  },

  methods: {
    addToTheCart(product) {
      // Add the selected product to the cart array
      this.cart.push(product);
      
      // Update the count based on the length of the cart array
      this.count = this.cart.length;
      counter.textContent = this.count;

      // Store the cart array in local storage as a JSON string
      localStorage.setItem('cart', JSON.stringify(this.cart));

      console.log(`Added to cart: ${product.name}`);
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

    // Retrieve the cart array from local storage and parse it
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.count = this.cart.length;
      counter.textContent = this.count;
    }

    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
      .catch(error => console.error('Error fetching products:', error));

    let x = localStorage.getItem('count');
    if (x === null) {
      x = 0;
    }
    this.count = x;
    counter.textContent = x;
  },

});

productListApp.mount('#app');