import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayResponseApi: null,
    numPage: 1
  },
  mutations: {
    resetNumPage(state){
      (state.numPage = 1)  
    },
    nextPage(state){
      (state.numPage = state.numPage + 1)
    },
    previousPage(state){
      (state.numPage = state.numPage - 1)
    },
    async getApiRest(state, fragment) {
      try{
        const urlApi = `https://rickandmortyapi.com/api/${fragment}/?page=${state.numPage}`
        let response = await axios.get(urlApi);
      
        state.arrayResponseApi = response.data.results;
      }
      catch(error){
          console.log(error)
      }
      finally{
          window.scrollTo(0, 0);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
