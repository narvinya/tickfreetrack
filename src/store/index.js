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
        note: "Toto kliste bylo obzvlast neprijemne",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.203263774123236, 16.57372355461121),
        datum: new Date(2019, 7, 3),
        note: "Kousek od biskupskeho gymnazia v Brne",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.194563, 16.625585),
        datum: new Date(2018, 11, 15),
        note: "Toto kliste bylo obzvlast neprijemne",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.211577, 16.710495),
        datum: new Date(2019, 6, 5),
        note: "bez komentáře",
        prenasec: "clovek"
      },
      {
        coordinates: latLng(49.215666, 16.710495),
        datum: new Date(2019, 10, 15),
        note: "Kliste se nepřisalo, ale zato jich bylo pět nebo šest najednou",
        prenasec: "pes"
      }
    ],
  },
  mutations: {
    ulozitKliste(state, payload) {
      state.klistata.push(payload);
    }
  },
})
