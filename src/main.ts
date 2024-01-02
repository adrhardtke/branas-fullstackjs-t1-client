import { createApp, markRaw } from 'vue'
import App from './App.vue'
import AxiosAdapter from './infra/AxiosAdapter'
import ServiceFactory from './factory/Service.factory'
import { createRouter, createWebHistory } from 'vue-router'
import BoardViewVue from './view/BoardView.vue'
import LoginViewVue from './view/LoginView.vue'
import { createPinia } from 'pinia'
import i18n from './plugin/i18n'

const httpClient = new AxiosAdapter()
const serviceFactory = new ServiceFactory(httpClient, 'http://localhost:8000')

const routes = [
    { path: '/', redirect: '/boards/1' },
    { path: '/boards/:idBoard', component: BoardViewVue },
    { path: '/login', component: LoginViewVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

httpClient.setRouter(router)

const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
pinia.use(({store}) => {
    store.$router = markRaw(router)
})
app.use(i18n, {
    'en': {
        'boards': 'boards'
    },
    'pt': {
        'boards': 'quadros'
    }
})
app.provide("serviceFactory", serviceFactory)
app.mount('#app')