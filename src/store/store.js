import Vue from "vue";
import Vuex from "vuex";
// import db from "../main";
import { auth } from "../main";
import { db } from "../main";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    guides: [],
  },
  getters: {
    user: (state) => state.user,
    guides: (state) => state.guides,
    guide: (state) => (guideItem) => {
      return state.guides.find((gI) => gI.id === guideItem.id);
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = { ...payload };
    },
    setGuide(state, payload) {
      state.guides.push(payload);
    },
    setGuides(state, payload) {
      state.guides = { ...payload };
    },
  },
  actions: {
    async fetchingDatafromFS({ commit }) {
      try {
        const snapShot = await db.collection("guides").get();
        const tempGuidesList = [];
        snapShot.docs.forEach((doc) => {
          tempGuidesList.push({
            title: doc.data().title,
            body: doc.data().body,
          });
        });
        commit("setGuides", tempGuidesList);
      } catch (error) {
        console.log(error);
      }
    },

    async signupUser({ commit }, payload) {
      try {
        let credential = await auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        );

        let newUser = {
          id: credential.user.uid,
          email: credential.user.email,
        };
        commit("setUser", newUser);
      } catch (error) {
        console.log(error.message);
      }
    },

    async logoutUser({ commit }) {
      try {
        const user = await auth.signOut();
        commit("setUser", null);
        console.log("successful logout", user);
      } catch (error) {
        console.log(error.message);
      }
    },

    async loginUser({ commit }, payload) {
      //to be sure there is anotehr user who is logged in
      commit("setUser", null);
      try {
        let credential = await auth.signInWithEmailAndPassword(
          payload.email,
          payload.password
        );
        console.log(credential);
        let loggedInUser = {
          id: credential.user.uid,
          email: credential.user.email,
        };
        commit("setUser", loggedInUser);
      } catch (error) {
        alert(error.message);
      }
    },

    autoSignIn({ commit }, payload) {
      commit("setUser", payload);
    },

    createAGuide({ commit }, payload) {
      commit("setGuide", payload);
    },
  },
});
