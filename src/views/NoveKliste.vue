<template>
  <div class="PozadieLes">
    <ikona />
    <h1>Pridať nový výskyt kliešťa</h1>
    <menicko />
    <div id="obalka">
      <div class="mapa"> <!-- mapa -->
        <div>
          <div class="ramecekMapa"> <!--ramecekMapa-->
            <l-map :zoom="zoom" :center="center" class="">
              <l-tile-layer :url="url" :attribution="attribution" />

              <l-marker :lat-lng="center">
               
              </l-marker>
            </l-map>
          </div>
        </div>
      </div>

      <div class="formular">
        
        <div>
          <p class="hlaska"> {{hlaska}} </p>
          <h2>Zadat novy vyskyt klistete</h2>
          <div class="formular1">
            <label class="popisek">
              Kdo kliste prenasel:
              <input type="text" v-model="prenasec" class="policko" />
            </label>

            <label class="popisek">
              Popis vyskytu:
              <textarea
                class="policko"
                v-model="message"
                maxlength="880"
                cols="45"
                rows="6"
                wrap="hard"
                placeholder="vlozte poznamku, pokud by mohla byt uzitecna pro dalsi uzivatele. dekujeme"
              ></textarea>
            </label>

            <label class="popisek">
              Datum nalezu:
              <input
                type="date"
                :value="datum && datum.toISOString().split('T')[0]"
                @input="datum = $event.target.valueAsDate"
                class="policko"
              />
            </label>
            
            <button @click="ulozitKliste" class="pridatButton">Ulozit kliste</button>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>


<script>
import Menu from "../components/Menu.vue";
import Ikona from "@/components/Ikona.vue";

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
    menicko: Menu,
    ikona: Ikona,
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
      center: latLng(49.2107581, 16.618815),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: true,
      prenasec: " ",
      message: "",
      datum: new Date(),
      hlaska: ''
    };
  },
  methods: {
    success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.center = latLng(latitude, longitude);
    },
    onError() {},
    location() {
      navigator.geolocation.getCurrentPosition(this.success, this.onError);
    },
    ulozitKliste() {
      console.log("neco");
      this.$store.commit("ulozitKliste", {
        coordinates: latLng(this.center),
        note: this.message,
        prenasec: this.prenasec,
        datum: this.datum,
      });
      this.prenasec = "";
      this.message = "";
      this.datum = new Date();
      this.hlaska = 'Nové klíště bylo úspšně přidáno'
    }
  },
  mounted() {
    if ("geolocation" in navigator) {
      console.log("geolokace je k dispozici MapaNoveKliste.vue");
    } else {
      console.log("geolocation IS NOT available");
      return;
    }
    setTimeout(this.location, 8000);
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
  top: 20%;
}
.ramecekMapa {
  position: absolute;
  top: 120px;
  height: 460px;
  width: 600px;
  margin: 100px 0px;
  padding: 0;
  border: 10px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
.mapa {
  
  
  height: 460px;
  width: 95%;
  margin: 20px;

}
.mapanew{
  height: 600px;
}
.policko {
  padding: 10px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-family: "Arvo", serif;
  font-size: 18px;
}
.popisek {
  margin: 0;
  padding: 10px 20px;
  font-family: "Arvo", serif;
  font-size: 18px;
  color: rgb(24, 54, 54);
}
.formular1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 50%;
}
.hlaska{
  color: red;
  padding: 10px;
}
.pridatButton {
    
    bottom: 30px;
   
    /*display: inline-block;
    text-align: center;*/
    padding: 12px 80px 12px 80px;
    border-radius: 100px;
    background:white;
    font: bold 25px "Arvo", serif;
    color: rgba(63, 179, 157, 1);
    text-decoration: none;
    text-transform: uppercase;
    border:0;
}
.pridatButton:hover {
    background: #720000;
    background: -moz-linear-gradient(top, #720000, #460000);
    background: linear-gradient(to bottom, #720000, #460000);
    color: #ffffff;
    text-decoration: none;
}
</style>