import { createStore } from 'vuex'

const store = createStore({
  state: {

  },
  getters: {
    GET_TOKEN:state=>{
      console.log("get token")
      return localStorage.getItem("token")
    }
  },
  mutations: {
    SET_TOKEN:(state, token)=>{
      console.log("set token")
      localStorage.setItem("token",token)
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
