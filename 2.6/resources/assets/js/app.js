import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import App from './components/App.vue';
import SubmitTicketFormComponent from './components/SubmitTicketFormComponent.vue';


require('./bootstrap');

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VeeValidate);

const routes = [
    { path: '/createticket', component: SubmitTicketFormComponent }
];

const router = new VueRouter({routes});

const app = new Vue({
    router,
    el: '#app',
    render: f => f(App)
});
