import Vue from 'vue'
import Vuex from 'vuex'
// import db from "../main";
import { auth } from '../main'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user
  },
  mutations: {
    setUser(state, payload) {
      state.user = { ...payload }
    }
  },
  actions: {
    async signupUser({ commit }, payload) {
      try {
        // const user_credtential =
        await auth.createUserWithEmailAndPassword(payload.email, payload.password)
        // console.log(user_credtential)
        commit("setUser", payload)
      } catch (error) {
        console.log(error.message)
      }
    },

    async logoutUser({ commit }) {
      try {
        // const logout_the_user =
        await auth.signOut()
        commit('setUser', null)
        console.log("successful logout")
      } catch (error) {
        console.log(error.message)
      }
    },

    async loginUser({ commit }, payload) {
      //to be sure there is anotehr user who is logged in
      commit('setUser', null)
      try {
        // const loggedin_user = // shows user credentials 
        await auth.signInWithEmailAndPassword(payload.email, payload.password)
        // console.log(loggedin_user.user)
        commit('setUser', payload)
      } catch (error) {
        alert(error.message);
      }
    }



  }
})