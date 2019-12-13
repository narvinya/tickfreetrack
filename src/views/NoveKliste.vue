<template>
  <div class="PozadieLes">
    <ikona />
    <h1>Pridať nový výskyt kliešťa</h1>
    <menicko />
    <div id="obalka">
      <div class="mapa">
        <mapa />
      </div>

      <div class="formular">
        Souradnice: {{lat}}, {{lng}}
        <noveKliste />
        <ulozit />
      </div>
    </div>
  </div>
</template>


<script>
import Menu from "../components/Menu.vue";
import ZadanieLokacie from "@/components/ZadanieLokacie.vue";
import Ulozit from "@/components/Ulozit.vue";
import MapaNoveKliste from "@/components/MapaNoveKliste.vue";
import Ikona from "@/components/Ikona.vue";

if ("geolocation" in navigator) {
  console.log("geolokace je k dispozici");
} else {
  console.log("geolocation IS NOT available");
}
function geoFindMe() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

export default {
  components: {
    noveKliste: ZadanieLokacie,
    menicko: Menu,
    ulozit: Ulozit,
    mapa: MapaNoveKliste,
    ikona: Ikona,
  },
  props: {
    prenasec: String,
    message: String
  },
  data() {
    return {
      lat: "",
      lng: ""
    };
  },
  computed: {
    ziskatLokaci() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    }
  }
};
</script>

<style scoped>
.formular {
  position: absolute;
  background-image: linear-gradient(#f8ce82, #f4af6a);
  background-size: cover;
  background-position: center;
  margin: 40px 20px 30px 30px;
  padding-top: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-family: "Arvo", serif;
  font-size: 25px;
  text-align: center;
  color: rgb(24, 54, 54);
  left: 50%;
  top:20%;
}

.mapa {
  position: absolute;
  left: 0%;
 
}
</style>