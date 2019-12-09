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
        
        <l-marker v-for="(kliste, index) in klistata" v-bind:key="index " :lat-lng="withIcon">
          <l-popup class="popisekKlistete">
            <div >
              <strong>Kliste 1</strong>
              <p v-show="showParagraph">Toto kliste bylo obzvlast neprijemne</p>
              <button>Editovat kliste</button>
            </div>
          </l-popup>
        </l-marker>

     
       <l-marker :lat-lng="kliste2">
         <!--  <l-icon
          icon-url="public/images/Map-Marker-icon-green.png"
          /> -->
          <l-popup>
            <div>
              Custom icon
              <p v-show="showParagraph">Tady bude popis klistete</p>
            </div>
          </l-popup>
        </l-marker> 

      </l-map>
    </div>
  </div>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import MapaObrazok from "@/components/MapaObrazok.vue";
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
    MapaObrazok: MapaObrazok,
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

      klistata: [
        {
          lat: 49.206807,
          lng: 16.607908
        },
        {
          lat: 49.211577,
          lng: 16.710495
        },
        {
          lat: 49.215666,
          lng: 16.710495
        }
      ],
      withPopup: latLng(49.206807, 16.607908),
      kliste2: latLng(49.211577, 16.710495),
      withIcon: latLng(49.215666, 16.710495),
      showParagraph: true
    };
  }
};
</script>

<style >
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
  height: 400px;
  width: 95%;
  margin: 20px;
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