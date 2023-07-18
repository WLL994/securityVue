import { createStore } from 'vuex'
import router from "@/router";

export default createStore({
  state: {
    hasRoutes:false,
    editableTabsValue:'/index',
    editableTabs:[
      {
        title:'首页',
        name:'/index'
      }
    ]

  },
  getters: {
    GET_TOKEN:(state)=>{
      console.log("get token")
      return window.localStorage.getItem("token")
    },
    GET_MENULIST:(state, menuList)=>{
      return JSON.parse(window.localStorage.getItem("menuList"))
    },
    GET_USERINFO:(state, userInfo)=>{
      return JSON.parse(window.localStorage.getItem("userInfo"))
    },
  },
  mutations: {
    SET_TOKEN:(state, token)=>{
      console.log("set token")
      localStorage.setItem("token",token)
    },
    SET_MENULIST:(state, menuList)=>{
      localStorage.setItem("menuList",JSON.stringify(menuList))
    },
    SET_USERINFO:(state, userInfo)=>{
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    SET_ROUTES_STATE:(state, hasRoutes)=>{
      state.hasRoutes=hasRoutes
    },
    ADD_TABS:(state, tab)=>{
      if(state.editableTabs.findIndex(e=>e.name===tab.path)===-1){
        state.editableTabs.push({
          title: tab.name,
          name:tab.path
        })
      }
      state.editableTabsValue=tab.path
    },
    RESET_TABS:(state)=>{
      state.editableTabsValue='/index';
      state.editableTabs=[
        {
          title:'首页',
          name:'/index'
        }
      ]
    },
  },
  actions: {
    //安全退出
    logout(){
      window.localStorage.clear()
      router.replace("/login")
    }
  },
  modules: {
  }
})

// export default store
