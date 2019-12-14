<template>
   <body>
    <div class="PozadieLesSmall">
    <Ikona />
    <h1>Príznaky pri nákaze</h1>
    <Menu />
    <div class="kontajner">
      <div class="textRizika">
        <p>Druhy kliešťov:</p>
  
        <div v-for="druh in druhyKlistat" v-bind:key="druh.nazev" @click="nastavAktualniDruh(druh.id)">
          <div > 
            <img v-bind:src="druh.obrazek" v-bind:alt="druh.nazev" class="obrazekKlistete">
          </div>
          <div><strong>Nazev:</strong> {{druh.nazev}} </div>

          <div v-show="aktualniDruh===druh.id">
          <div><strong>Latinsky:</strong> {{druh.latinskyNazev}} </div>
          <div><strong>Nemoci:</strong> {{druh.nemoci}} </div>
          <div><strong>Info:</strong> {{druh.popisek}} </div>
          </div>
        </div>
        
        

        
        </div>
      </div>
    </div>
  
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";


export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
  
  },
  data(){
    return{
      aktualniDruh: 1,
      druhyKlistat: [
        {
          id: 1,
          nazev: "Kliešť americký",
          latinskyNazev: 'Amblyomma americanum',
          nemoci : 'Ehrlichia chaffeensis, Ehrlichia ewingii - u lidi zpusobuje ehrlichiosis',
          obrazek: "https://www.cdc.gov/ticks/images/geo/lone_star_tick.jpg",
          popisek: "Velmi agresivní kliešť, které napadá člověka. Dospělá samice se pozná podle bílé skvrny neboli hvězdy na zádech, jeho sliny mohou být dráždivé, červené zarudnutí a nepříjemné svědění nemusí být příznakem infekce."
        },
        {
          id: 2,
          nazev: "Pijak lužný",
          latinskyNazev: 'Amblyomma americanum',
          nemoci : 'Tularemia, Rocky Mountain spotted fever',
          obrazek: "https://www.cdc.gov/ticks/images/geo/american_dog_tick.jpg",
          popisek: "Nejvyšší riziko napadení je během jara a léta. Anglicky se mu říká psí klíště. Člověka většinou napadají dospělé samice."
        }

      ]
}},
methods:{
  nastavAktualniDruh(id){
    this.aktualniDruh = id
  }
}
}
</script>

<style>
.obrazekKlistete{
  border-radius: 51%;
}
</style>