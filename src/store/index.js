import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayResponseApi:[],
    numPage: 1,
    urlWindow:''
  },
  mutations: {
    async getApiRest( state, fragment) {
      try{
        const urlApi = `https://rickandmortyapi.com/api/${fragment}/?page=${state.numPage}`
    
        await axios
          .get(urlApi)
          .then(response => 
            (state.arrayResponseApi = response.data.results)
      )}
      catch(error){
          console.log(error)
      }
      finally{
          window.scrollTo(0, 0);
      }
    },

    nextPage(state){
      (state.numPage = state.numPage + 1)
    },

    previousPage(state){
      (state.numPage = state.numPage - 1)
    },
    resetNumPage(state){
      (state.numPage = 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
