import * as Vue from 'https://unpkg.com/vue@3.0.11/dist/vue.esm-browser.js'

const app = Vue.createApp({
    data() {
        return {
            hello_msg: 'Hello World'
        }
    },
    methods:
    {
        alert_hi() {
            alert("Hi!");
        }
    }
})
app.mount('#app')