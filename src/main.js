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
  // consider to put menu opration over here
  // user is logged in can see stuff
  // user is logged out can see login logout
  if (cred) {
    const user = firebase.auth().currentUser;
    store.dispatch("autoSignIn", { email: user.email, id: user.uid });

    if (user) {
      store.dispatch("fetcinguserBioFromFS", user);
      store.dispatch("fetchingGuidesfromFS");
    }
  } else {
    // how to clear setGuides so it will not be accessable in client's
    // borwser console

    store.dispatch("setGuides", []);

    console.log("user logged out");
  }
});
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
