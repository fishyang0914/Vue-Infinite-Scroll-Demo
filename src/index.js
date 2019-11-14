import '@babel/polyfill';
import 'es6-promise';
import 'es6-object-assign';
import Vue from 'vue'
import App from 'App';
import store from './store';
import './scss/global/global.scss';

new Vue({
    el: '#app',
    store,
    render: h=>h(App),
}); 