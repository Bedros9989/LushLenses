const counter = document.getElementById('cart-count-info');

function updateCartCount(count) {
  counter.textContent = count;
  localStorage.setItem('count', count);
}

let x = localStorage.getItem('count');
if (x === null) {
  x = 0;
}
updateCartCount(x);

const productListApp = Vue.createApp({
  data() {
    return {
      products: [],
      cart: [], 
      count: x, 
    };
  },

  methods: {
    addToTheCart(product) {
      this.cart.push(product);
      this.count = this.cart.length;
      updateCartCount(this.count); 
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log(`Added to cart: ${product.name}`);
    },
  },

  mounted() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.count = this.cart.length;
      updateCartCount(this.count); 
    }

    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
  },
});

productListApp.mount('#app');