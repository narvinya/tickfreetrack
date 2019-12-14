<template>
  <div>
    <div class="ramecekMapa">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution" />

        <l-marker :lat-lng="center">
          <l-popup class="popisekKlistete">
            <div>
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
    LIcon
  },
  data() {
    return {
      zoom: 12,
      center: latLng(49.2107581, 16.6188150),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      showParagraph: true,
      
    };
  },
  methods: {
    success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.center = latLng(latitude, longitude);

    },
    onError() {},
    location(){
      navigator.geolocation.getCurrentPosition(this.success, this.onError);
    }
  },
  mounted() {
    if ("geolocation" in navigator) {
      console.log("geolokace je k dispozici MapaNoveKliste.vue");
    } else {
      console.log("geolocation IS NOT available");
      return;
    }
    setTimeout(this.location, 1000)
    
  }
};
</script>


<style scoped>
.ramecekMapa {
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