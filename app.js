console.log('Vue is loaded',Vue);

const app= Vue.createApp({
    data(){
        return{
            message: 'Hello World!',
            someone: 'world!'
        };
    }
});

app.mount('#app');