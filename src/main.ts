import { createApp } from 'vue'
import App from './App.vue'
import AxiosAdapter from './infra/AxiosAdapter'
import ServiceFactory from './factory/Service.factory'


const httpClient = new AxiosAdapter()
const serviceFactory = new ServiceFactory(httpClient, 'http://localhost:8000')

const app = createApp(App)
app.provide("serviceFactory", serviceFactory)
app.mount('#app')