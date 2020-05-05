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
      const user_credtential = await auth.createUserWithEmailAndPassword(payload.email, payload.password)
      console.log(user_credtential)
      if (!user_credtential) {
        console.log(user_credtential)
      }
      commit("setUser", payload)
    },

    async logoutUser({ commit }) {
      const logout_the_user = await auth.signOut()
      console.log(logout_the_user)
      if (logout_the_user === undefined) {
        commit('setUser', null)
        console.log("successful logout")
      } else {
        console.log("something went wrong when u tried to logout")
      }
    }
  }
})