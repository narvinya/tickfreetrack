<template>
  <div>
<div class="ramecekMapa">
      <l-map :zoom="zoom" :center="center" >
        <l-tile-layer :url="url" :attribution="attribution" />
        
        <l-marker :lat-lng="withIcon">
          <l-popup class="popisekKlistete">
            <div >
              <strong>Nove kliste</strong>
              <p v-show="showParagraph">Toto kliste bylo obzvlast neprijemne</p>
              <button>Editovat kliste</button>
            </div>
          </l-popup>
        </l-marker>

      </l-map>
    </div>

  </div>
</template>

<script>

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
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
},
data() {
    return {
      zoom: 12,
      center: latLng(49.185775, 16.625585),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(49.206807, 16.607908),
      kliste2: latLng(49.211577, 16.710495),
      withIcon: latLng(49.215666, 16.710495),
      showParagraph: true
    };
}
}
</script>

<style scoped>
.ramecekMapa{
  position: absolute;
  top: 120px;
  height: 460px;
  width: 600px;
  margin: 25px;
  padding: 0;
  border: 10px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
.mapa {
  position: absolute;
  top: 120px;
  height: 460px;
  width: 95%;
  margin: 20px;
  
  border: 10px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
</style>