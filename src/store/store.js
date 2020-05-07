import Vue from "vue";
import Vuex from "vuex";
// import db from "../main";
import { auth } from "../main";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = { ...payload };
    },
  },
  actions: {
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
  },
});
