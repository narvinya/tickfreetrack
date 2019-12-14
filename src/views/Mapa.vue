<template>
  <div class="PozadieLes">
   
    <div >
     
      <Ikona />
      <Nadpis />
      <Menu />
      <buttonPridat/>
    </div>

    <div class="ramecekMapa">

      <l-map :zoom="zoom" :center="center" class="mapa">
        <l-tile-layer :url="url" :attribution="attribution" />
        
        <l-marker v-for="kliste in klistata" v-bind:key="kliste.note " :lat-lng="kliste.coordinates">
          <l-popup class="popisekKlistete">
            <div >
            
              <p v-show="showParagraph">{{kliste.note}}</p>
              <p v-show="showParagraph">{{ kliste.datum.toLocaleDateString() }}</p>
              <button>Editovat kliste</button>
            </div>
          </l-popup>
        </l-marker>

      </l-map>
    </div>
  </div>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
//import MapaObrazok from "@/components/MapaObrazok.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import ButtonPridat from '@/components/ButtonPridat.vue';

import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LIcon
} from "vue2-leaflet";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    //MapaObrazok: MapaObrazok,
    Menu: Menu,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    'buttonPridat' : ButtonPridat
  },
  data() {
    return {
      zoom: 12,
      center: latLng(49.185775, 16.625585),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      showParagraph: true
    };
  },
  computed: {
    klistata () {
      return this.$store.state.klistata
    }
  }
};
</script>

<style scoped>
.pozadiMapa {
  background-image: url(../../public/images/Pozadie.png),
    linear-gradient(90deg, rgba(63, 179, 157, 1) 0%, rgba(79, 195, 147, 1) 37%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.ramecekMapa{
  position: relative;
  margin: 0;
  padding: 0;
}
.mapa {
  position: absolute;
  top: 120px;
  height: 460px;
  width: 95%;
  margin: 20px;
  padding: 10px;
  border: 10px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
.popisekKlistete{
  color: rgb(8, 68, 52);
}
.nazevKlistete{
  font-weight: bold;
}
</style>