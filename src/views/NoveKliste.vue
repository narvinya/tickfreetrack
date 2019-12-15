<template>
  <div class="PozadieLesSmall">
    <ikona />
    <h1>Pridať nový výskyt</h1>
    <menicko />
    <div class="mapaWrapper">
      <div class="mapa">
        <div>
          <div class="ramecekMapa">
            <l-map :zoom="zoom" :center="center" class @update:center="newLocation">
              <l-tile-layer :url="url" :attribution="attribution" />

              <l-marker :lat-lng="center"></l-marker>
            </l-map>
          </div>
        </div>
      </div>

      <div class="formular">
        <div>
          <p class="hlaska">{{hlaska}}</p>
          <h3 class="nadpisH3">Pridať nový výskyt kliešťa</h3>
          <div>
            <label class="popisek">
              Kto kliešťa prenášal:
              <span>(človek, pes, ...)</span>
              <br>
              <input type="radio" id="one" value="človek" v-model="prenasec" />
              <label class="radLabel" for="one">Človek</label>
              
              <input type="radio" id="two" value="pes" v-model="prenasec" />
              <label class="radLabel" for="two">Pes</label>
             
              <input type="radio" id="three" value="jiny" v-model="prenasec" />
              <label class="radLabel" for="three">Jiný</label>
            </label>
          </div>
          <label class="popisek">
            Popis výskytu:
            <textarea
              class="policko"
              v-model="message"
              maxlength="880"
              cols="45"
              rows="6"
              wrap="hard"
              placeholder="Vložte poznámku, pokiaľ by mohla byť užitočná pre ďalších užívateľov. Ďakujeme."
            ></textarea>
          </label>

          <label class="popisek">
            <div>Dátum nálezu:</div>
            <input
              type="date"
              :value="datum && datum.toISOString().split('T')[0]"
              @input="datum = $event.target.valueAsDate"
              class="policko"
            />
          </label>
          <div class="buttonWrap">
            <button @click="ulozitKliste" class="pridatButton" v-show="!hlaska">Uložiť</button>
            <ButtonDalej v-show="hlaska" link="/priznaky" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Menu from "../components/Menu.vue";
import Ikona from "@/components/Ikona.vue";
import ButtonDalej from "@/components/ButtonDalej.vue";
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
    ButtonDalej: ButtonDalej,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon
  },

  data() {
    return {
      zoom: 17,
      center: latLng(49.2107581, 16.618815),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: true,
      prenasec: " ",
      message: "",
      datum: new Date(),
      hlaska: ""
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
      this.$store.commit("ulozitKliste", {
        coordinates: latLng(this.center),
        note: this.message,
        prenasec: this.prenasec,
        datum: this.datum
      });
      this.prenasec = "";
      this.message = "";
      this.datum = new Date();
      this.hlaska = "Nový kliešť bol úspešne pridaný";
    },
    newLocation(x) {
      this.center = latLng(x);
    }
  },
  mounted() {
    if ("geolocation" in navigator) {
    } else {
      return;
    }
    setTimeout(this.location, 1000);
  }
};
</script>

<style scoped>
.radLabel{
  padding-left: 10px;
  padding-right: 10px;

}
.formular {
  top: 120px;
  height: 490px;
  background-image: linear-gradient(#f8ce82, #f4af6a);
  background-size: cover;
  background-position: center;
  margin: 70px 10px 30px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 25px;
  color: rgb(24, 54, 54);
  padding: 0 30px 15px 30px;
  
}
.ramecekMapa {
  top: 120px;
  height: 490px;
  width: 600px;
  padding: 0;
  border: 7px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
.mapa {
  height: 460px;
}
.mapanew {
  height: 600px;
}
.policko {
  padding: 10px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 85%;
  font-size: 18px;
}
.popisek {
  margin: 0;
  padding: 10px 0;

  font-size: 18px;
  color: rgb(24, 54, 54);
}

.hlaska {
  color: rgba(63, 179, 157, 1);
  padding-top: 10px;
  font-size: 16px;
}

.nadpisH3 {
  margin: 5px 15px 10px 0px;
}
.buttonWrap {
  margin-top: 10px;
}

.mapaWrapper {
  display: flex;
  align-items: center;
  margin-top: 100px;
  justify-content: space-between;
}

@media (max-width: 1100px) {
  .mapaWrapper {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 135px;
  }

  .formular {
    margin: 45px 20px 20px 0px;
    max-width: 585px;
    box-sizing: border-box;
  }

  .ramecekMapa {
    max-width: 600px;
    box-sizing: border-box;
  }
}
@media (max-width: 650px) {
  .ramecekMapa {
    width: 565px;
    border: 0;
  }
}

@media (max-width: 599px) {
  .mapaWrapper {
    margin-top: 35px;
  }
  .ramecekMapa {
    width: 585px;
  }
}

@media (max-width: 500px) {
  .ramecekMapa {
    width: 400px;
  }
}

@media (max-width: 400px) {
  .ramecekMapa {
    width: 350px;
  }
}
</style>