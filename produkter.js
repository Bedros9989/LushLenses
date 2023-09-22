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


