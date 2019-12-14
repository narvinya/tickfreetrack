import Vue from 'vue'
import Vuex from 'vuex'
import { latLng } from "leaflet";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    klistata: [
      {
        coordinates: latLng(49.185775, 16.625585),
        datum: new Date(2018, 10, 5),
        note: "Toto kliste bylo obzvlast neprijemne1",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.211577, 16.710495),
        datum: new Date(2019, 6, 5),
        note: "Toto kliste bylo obzvlast neprijemne2",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.215666, 16.710495),
        datum: new Date(2019, 10, 15),
        note: "Toto kliste bylo obzvlast neprijemne3",
        prenasec: "pes"
      }
    ],
  },
  mutations: {
    ulozitKliste(state, payload) {
      console.log('neco z mutace')
      state.klistata.push(payload);
    }
  },
})
