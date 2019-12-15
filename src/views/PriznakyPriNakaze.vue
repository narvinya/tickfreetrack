<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Príznaky pri nákaze</h1>
    <Menu />
    <div class="kontajner">
      <h2 class="nadpisDruhyKliestov">Druhy kliešťov</h2>
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
              <span class="label">Ochorenia:</span>
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
        <ButtonDalej link="/rizika" />
      </div>
    </div>
  </div>
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import ButtonDalej from "@/components/ButtonDalej.vue";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    ButtonDalej: ButtonDalej
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
            "Ehrlichia chaffeensis, Ehrlichia ewingii - u ľudí spôsobuje ehrlichiózu",
          obrazek: "https://www.cdc.gov/ticks/images/geo/lone_star_tick.jpg",
          popisek:
            "Veľmi agresívny kliešť, ktorý napadá človeka. Dospelú samicu je možné spoznať podľa bielej škvrny alebo hviezdy na chrbtovej časti, sliny kliešťa môžu byť dráždivé, červené začervenanie a nepríjemné svrbenie nemusí byť príznakom infekcie."
        },
        {
          id: 2,
          nazev: "Pijak lužný",
          latinskyNazev: "Dermacentor variabilis",
          nemoci: "Tularémia, Rocky Mountain spotted fever",
          obrazek: "https://www.cdc.gov/ticks/images/geo/american_dog_tick.jpg",
          popisek:
            "Najvyššie riziko napadnutia je počas jari a leta. Anglicky se mu hovorí psí kliešť. Človeka väčšinou napadajú dospelé samice."
        },
        {
          id: 3,
          nazev: "Hnedý kliešť psí",
          latinskyNazev: "Rhipicephalus sanguineus",
          nemoci: "Rocky Mountain spotted fever",
          obrazek: "https://www.cdc.gov/ticks/images/geo/brown_dog_tick.jpg",
          popisek:
            "Vo všetkých fázach vývoja tohoto druhu je primárnym prenášačom pes, môže však ohrozovať i človeka alebo iného cicavca."
        },
        {
          id: 4,
          nazev: "Pobrežný kliešť",
          latinskyNazev: "Amblyomma maculatum",
          nemoci: "Rickettsia parkeri rickettsiosis, spotted fever.",
          obrazek: "https://www.cdc.gov/ticks/images/geo/gulf_coast_tick.jpg",
          popisek:
            "Larva a nymfa sa živia na vtákoch a malých hlodavcoch, dospelí jedinci na jeleňoch a divokej zveri. Dospelé kliešte sa spájajú s prenosom choroby R. Parker na človeka."
        },
        {
          id: 5,
          nazev: "Kliešť lesný",
          latinskyNazev: "Dermacentor andersoni",
          nemoci: "Rocky Mountain spotted fever, tularémia.",
          obrazek:
            "https://www.cdc.gov/ticks/images/geo/rocky_mountain_wood_tick.jpg",
          popisek:
            "Dospelé jedince sa živia primárne na veľkých cicavcoch. Larvy a nymfy na malých hlodavcoch. Dospelé jedince sú primárne spojené s prenosom patogénov na človeka."
        },
        {
          id: 6,
          nazev: "Kliešť čiernonohý záp.",
          latinskyNazev: "Ixodes pacificus",
          nemoci: "Anaplazmóza, lymská borelióza. ",
          obrazek:
            "https://www.cdc.gov/ticks/images/geo/western_blacklegged_tick.jpg",
          popisek:
            "Nymfy často parazitujú na jaštericiach a iných malých živočíchoch, v dôsledku čoho je infikovaných pomerne málo (~ 1%). Ak sa u človeka vyskytnú, potom v štádiu nymfy alebo dospelej samice."
        },
        {
          id: 7,
          nazev: "Kliešť čiernonohý",
          latinskyNazev: "Ixodes scapularis",
          nemoci: "Lymská borelióza, anaplazmóza, ehrlichióza, babesióza",
          obrazek: "https://www.cdc.gov/ticks/images/geo/blacklegged_tick.jpg",
          popisek:
            "Nejväčšie riziko napadnutia exuistuje počas jari, leta a jesene. Avšak dospelí jedinci sa môžu bežne vyskytovať tiež aj v zime, pokiaľ teploty stúpnu nad nulu. Najčastejšie napádajú nymfy a dospelé samičky."
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
.label {
  color: rgba(63, 179, 157, 1);
  font-weight: bold;
  padding-right: 10px;
}

.nadpisDruhyKliestov {
  text-align: center;
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