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


productListApp.mount('#app'); 


