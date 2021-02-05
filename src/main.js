import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import "@/styles/index.scss";
import '@/icons' // icon
import './permission' // permission control
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
