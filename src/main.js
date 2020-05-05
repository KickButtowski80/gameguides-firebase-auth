import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";
import "firebase/firestore";
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: "vue-calendar-it",
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();

require('dotenv').config()
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
