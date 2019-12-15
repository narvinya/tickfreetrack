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
        prenasec: "človek"
      },
      {
        coordinates: latLng(49.203263774123236, 16.57372355461121),
        datum: new Date(2019, 7, 3),
        note: "Kousek od biskupskeho gymnazia v Brne",
        prenasec: "človek"
      },
      {
        coordinates: latLng(49.203263774777, 16.573723599999),
        datum: new Date(2019, 7, 5),
        note: "Info",
        prenasec: "jiny"
      },
      {
        coordinates: latLng(49.194563, 16.625585),
        datum: new Date(2018, 11, 15),
        note: "Toto kliste bylo obzvlast neprijemne3",
        prenasec: "človek"
      },
      {
        coordinates: latLng(49.211577, 16.710495),
        datum: new Date(2019, 6, 5),
        note: "bez komentáře",
        prenasec: "človek"
      },
      {
        coordinates: latLng(49.215666, 16.710495),
        datum: new Date(2019, 10, 15),
        note: "Kliste se nepřisalo, ale zato jich bylo pět nebo šest najednou",
        prenasec: "pes"
      },
      {
        coordinates: latLng(48.931090561853786, 14.245518017560245),
        datum: new Date(2019, 6, 8),
        note: " ",
        prenasec: "pes"
      },
      {
        coordinates: latLng(49.245678, 16.710495),
        datum: new Date(2019, 7, 13),
        note: "poznamka ",
        prenasec: "pes"
      } ,
      {
        coordinates: latLng(49.35442662148983, 16.808738708496097),
        datum: new Date(2019, 9, 13),
        note: "Senetarov ",
        prenasec: "jiny"
      }
    ],
  },
  mutations: {
    ulozitKliste(state, payload) {
      state.klistata.push(payload);
    }
  },
})
