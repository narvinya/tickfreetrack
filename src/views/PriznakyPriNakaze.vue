<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Príznaky pri nákaze</h1>
    <Menu />
    <div class="kontajner">
      <p class="nadpis">Druhy kliešťov:</p>
      <div class="obalkaDruhu">
        <br />
        <div @click="nastavAktualniDruh(selected.id)" class="detailDruhu">
          <div class="kartickaDruhu">
            <div class="nadpisDruhu">{{selected.nazev}}</div>
            <img v-bind:src="selected.obrazek" v-bind:alt="selected.nazev" class="obrazekKlistete" />
          </div>

          <div class="info">
            <div>
              <span class="label">Latinsky:</span>
              <span>{{selected.latinskyNazev}}</span>
            </div>
            <div>
              <span class="label">Nemoci:</span>
              <span>{{selected.nemoci}}</span>
            </div>
            <div>
              <span class="label">Info:</span>
              <span>{{selected.popisek}}</span>
            </div>
          </div>
        </div>
        <div
          v-for="druh in others"
          v-bind:key="druh.nazev"
          @click="nastavAktualniDruh(druh.id)"
          class="detailDruhu"
        >
          <div class="kartickaDruhu">
            <img v-bind:src="druh.obrazek" v-bind:alt="druh.nazev" class="obrazekKlistete" />
            <div>
              <strong>{{druh.nazev}}</strong>
            </div>
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
    Menu: Menu
  },
  data() {
    return {
      aktualniDruh: 1,
      druhyKlistat: [
        {
          id: 1,
          nazev: "Kliešť americký",
          latinskyNazev: "Amblyomma americanum",
          nemoci:
            "Ehrlichia chaffeensis, Ehrlichia ewingii - u lidi zpusobuje ehrlichiosis",
          obrazek: "https://www.cdc.gov/ticks/images/geo/lone_star_tick.jpg",
          popisek:
            "Velmi agresivní kliešť, které napadá člověka. Dospělá samice se pozná podle bílé skvrny neboli hvězdy na zádech, jeho sliny mohou být dráždivé, červené zarudnutí a nepříjemné svědění nemusí být příznakem infekce."
        },
        {
          id: 2,
          nazev: "Pijak lužný",
          latinskyNazev: "Dermacentor variabilis",
          nemoci: "Tularemia, Rocky Mountain spotted fever",
          obrazek: "https://www.cdc.gov/ticks/images/geo/american_dog_tick.jpg",
          popisek:
            "Nejvyšší riziko napadení je během jara a léta. Anglicky se mu říká psí klíště. Člověka většinou napadají dospělé samice."
        },
        {
          id: 3,
          nazev: "Hnědý kliešť psí",
          latinskyNazev: "Rhipicephalus sanguineus",
          nemoci: "Rocky Mountain spotted fever",
          obrazek: "https://www.cdc.gov/ticks/images/geo/brown_dog_tick.jpg",
          popisek:
            "Ve všech fázích vývoje tohoto druhu je primárním přenašečem pes, ale jde i na člověka nebo jiné savce."
        },
        {
          id: 4,
          nazev: "Pobrežný kliešť",
          latinskyNazev: "Amblyomma maculatum",
          nemoci: "Rickettsia parkeri rickettsiosis, a form of spotted fever.",
          obrazek: "https://www.cdc.gov/ticks/images/geo/gulf_coast_tick.jpg",
          popisek:
            "Larva a nymfa se živí na ptácích a malých hlodavcích, dospělí jedinci na jelenech a divoké zvěři. Dospělá klíšťata se spojují s přenosem  nemoci R. parkeri na člověka."
        },
        {
          id: 5,
          nazev: "Kliešť lesný",
          latinskyNazev: "Dermacentor andersoni",
          nemoci: "Rocky Mountain spotted fever, Colorado tick fever, tularemia.",
          obrazek:
            "https://www.cdc.gov/ticks/images/geo/rocky_mountain_wood_tick.jpg",
          popisek:
            "Dospělí jedinci se živí primárně na velkých savcích. Larvy a nymfy na malých hlodavcích.  Dospělí jedinci jsou primárně spojeni s přenosem patogenů na člověka."
        },
        {
          id: 6,
          nazev: "Kliešť čiernonohý záp.",
          latinskyNazev: "Ixodes pacificus",
          nemoci:
            "Anaplasmosis, Lymská borelioza. ",
          obrazek:
            "https://www.cdc.gov/ticks/images/geo/western_blacklegged_tick.jpg",
          popisek:
            "Nymfy často parazitují na ještěrkách a jiných malých živočiších, v důsledku čehož je infikovaných poměrně málo (~1%). Pokud se u člověka vyskztnou, pak ve stádiu nymfy nebo dospělé samice."
        },
         {
          id: 7,
          nazev: "Kliešť čiernonohý",
          latinskyNazev: "Ixodes scapularis",
          nemoci:
            "Borrelia burgdorferi,Lyme disease, anaplasmosis, B. miyamotoi disease, ehrlichiosis, babesiosis, Powassan virus disease ",
          obrazek:
            "https://www.cdc.gov/ticks/images/geo/blacklegged_tick.jpg",
          popisek:
            "Největčí riziko napadení exuistuje během jara, léta a podzimu. Ovšem dospělí jedinci se mohou běžně vyskytovat také v zime, pokud teploty stouplnou nad nulu. Nejčasněji napadají nymfy a dospělé samičky."
        }
      ]
    };
  },
  methods: {
    nastavAktualniDruh(id) {
      this.aktualniDruh = id;
    }
  },
  computed: {
    selected() {
      return this.druhyKlistat.find(d => d.id === this.aktualniDruh);
    },
    others() {
      return this.druhyKlistat.filter(d => d.id !== this.aktualniDruh);
    }
  }
};
</script>

<style>
.label{
  color: rgba(63, 179, 157, 1);
  font-weight: bold;
  padding-right: 10px;
}
.nadpis {
  padding: 5px 0 10px 30px;
  font-size: 20px;
}
.nadpisDruhu {
  font-size: 20px;
  font-weight: bold;
  
}
.obalkaDruhu {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 5px;
  box-shadow: 2px 2px 5px 2px rgba(63, 179, 157, 1);
  border-radius: 10px;
  background-color: whitesmoke;
}
.obrazekKlistete {
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px rgba(63, 179, 157, 1);
  margin: 5px;
}
.kartickaDruhu {
  max-width: 200px;
  margin: 30px;
  text-align: center;
}

.detailDruhu {
  display: flex;
}
.info {
  padding: 30px 15px 5px 15px;
}
</style>