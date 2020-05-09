import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";
import "@firebase/auth";
require("dotenv").config();
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: "paz-game-guides",
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
// 
auth.onAuthStateChanged((cred) => {
 
  if (cred) {
    const user = firebase.auth().currentUser;
    store.dispatch("autoSignIn", { eamil: user.email, id: user.uid });
    if (user) {
     store.dispatch("fetchingDatafromFS");
    }
  } else {
    store.dispatch("setGuides", null);  
    console.log("user logged out");
  }
});
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
