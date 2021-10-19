import Vue from 'vue'
import Vuetify from 'vuetify'
import '@babel/polyfill'
import 'api/resource'
import store from 'store/store'
import App from 'pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
import router from "./router/router";


if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    vuetify : new Vuetify(),
    el: '#app',
    store,
    router,
    render: a => a(App)
})