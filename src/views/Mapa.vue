<template>

  <div class="PozadieLes">
     <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div>
      <Ikona />
      <Nadpis />
      <Menu />
     
    </div>

    <div class="ramecekMapa">

      <select name="mesice" v-model="mesic" class="filtrMapa">
        <option value="1">leden</option>
        <option value="2">unor</option>
        <option value="3">brezen</option>
        <option value="4">duben</option>
        <option value="5" >kveten</option>
        <option value="6">cerven</option>
        <option value="7">cervenec</option>
        <option value="8">srpen</option>
        <option value="9">zari</option>
        <option value="10">rijen</option>
        <option value="11">listopad</option>
        <option value="12" >prosinec</option>
      </select> 

      <select name="roky" v-model="rok" class="filtrMapa">
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
      </select>
    
      <button @click="vymazatFiltr" class="filtrMapa mapaButtonReset" ><i class="fa fa-fw fa-refresh"></i><span class="buttonResetText">VYMAZAŤ FILTER</span></button>
      

      <l-map :zoom="zoom" :center="center" class="mapa">
        <l-tile-layer :url="url" :attribution="attribution" />

        <l-marker
          v-for="kliste in klistata"
          v-bind:key="kliste.note"
          :lat-lng="kliste.coordinates"
        >
          <l-popup class="popisekKlistete">
            <div>
              <p v-show="showParagraph">Komentár: {{kliste.note}}</p>
              <p v-show="showParagraph">Kliešť bol nájdený na: {{kliste.prenasec}}</p>
              <p v-show="showParagraph">Dátum pridania: {{ kliste.datum.toLocaleDateString() }}</p>
              
              <!-- <button>Editovat kliste</button> -->
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import ButtonPridat from "@/components/ButtonPridat.vue";

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
    Menu: Menu,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    buttonPridat: ButtonPridat
  },
  data() {
    return {
      zoom: 12,
      center: latLng(49.185775, 16.625585),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      showParagraph: true,
      mesic: '',
      rok: '',
    };
  },
  methods:{
    vymazatFiltr(){
      this.mesic= '';
      this.rok= '';
    }
    },
  computed: {
    klistata() {
      let klistata = this.$store.state.klistata;
      if (this.mesic) {
        klistata = klistata.filter((kliste) => kliste.datum.getMonth() === Number(this.mesic) - 1)
      }
      if (this.rok) {
        klistata = klistata.filter((kliste) => kliste.datum.getFullYear() === Number(this.rok))
      }

      return klistata
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
.ramecekMapa {
  position: relative;
  margin: 0;
  padding: 0;
}
.mapa {
  position: absolute;
  z-index:0;
  top: 120px;
  height: 550px;
  width: 93%;
  margin: 0 20px 0 0;
  padding: 10px;
  border: 10px solid rgba(63, 179, 157, 1);
  border-radius: 10px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
}
.popisekKlistete {
  color: rgb(8, 68, 52);
}
.nazevKlistete {
  font-weight: bold;
}
.filtrMapa {
  border: 1px solid rgba(63, 179, 157, 1);
  padding: 10px;
  margin: 5px;
  position: relative;
  top: 135px;
  left: 100px;
  z-index: 1000;
  
}

.mapaButtonReset {
  background-color:white;
}

.buttonResetText {
  display:inline-block;
}

@media(max-width:599px) {
  .mapa {
    top:20px;
  }

  .filtrMapa {
top:25px;
left:65px;
  }

.buttonResetText {
  display:none;
}

.mapa {
  border:none;
}

}
</style>