import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    klistata: [
      {
        lat: 49.206807, 
        lng: 16.607908,
        datum: new Date(2018, 10, 5),
        
      },
      {
        lat: 49.211577,
        lng: 16.710495,
        datum: new Date(2019, 6, 5)
      },
      {
        lat: 49.215666,
        lng: 16.710495,
        datum: new Date(2019, 10, 15)
      }
    ]
  },
  mutations: {
  },
  
})
