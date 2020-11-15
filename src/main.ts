import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fireauth from './plugins/fireauth'
import './registerServiceWorker'
import './assets/tailwind.css'

fireauth().then(() => {
  createApp(App).use(store).use(router).mount('#app')
})
