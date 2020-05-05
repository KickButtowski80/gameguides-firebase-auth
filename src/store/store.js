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
    setAnUser(state, payload) {
      state.user = { ...payload }
    }
  },
  actions: {
    async signupAnUser({ commit }, payload) {
      const user_credtential = await auth.createUserWithEmailAndPassword(payload.email, payload.password)
      console.log(user_credtential)
      if(!user_credtential){
        console.log(user_credtential)
      }
      commit("setAnUser", payload)
    }
  }
})