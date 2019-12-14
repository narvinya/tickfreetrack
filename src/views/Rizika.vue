<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Riziká</h1>
    <Menu />
    <div class="kontajner">
      <div class="textRizika">
        <p>Kliešte môžu byť nositeľmi patogénov spôsobujúcich ochorenia ľudí, ako sú:</p>
        
        <ul class="zoznamPatogen">
          <li
            v-on:click="vyberPatogen(patogen)"
            class="patogen"
            v-for="patogen in patogeny"
            v-bind:key="patogen.nazov"
          >{{patogen.nazov}}
          </li>
        </ul>
        <div class="detailPatogen">
        <div class="nazovPatogen">{{vybranyPatogen.nazov}}</div>
        <div class="latinskyPatogen">{{vybranyPatogen.latinsky}}</div>
        <div class="popisPatogen">{{vybranyPatogen.popis}}</div>
        <div class="patogenWrap">
        <img :src="vybranyPatogen.obrazok" class="obrazokPatogen" />
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
import PozadieLes from "@/components/PozadieLes.vue";
import PozadieZelene from "@/components/PozadieZelene.vue";
import PozadieLesSmall from "@/components/PozadieLesSmall.vue";


export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    PozadieLesSmall: PozadieLesSmall,
   
  },
  computed: {
    patogeny() {
      return this.data.patogeny;
    }
  },
  data: function() {
    return {
      patogeny: [
        {nazov:"Anaplazmóza",
        latinsky:"Anaplasma phagocytophilum",
        obrazok: "",
        popis:"Anaplazmóza je infekcia prenášaná kliešťami Ixodes, pôvodcom ochorenia je baktéria Anaplasma phagocytophilum. Jednotlivci sú najviac ohrození v čase aktivity kliešťov, od jari do jesene. Inkubačná doba je v rozmedzí 5 - 21 dní, väčšina ochorení sa vyskytuje v období apríl-október. Klinickým prejavom je zvyčajne akútne nešpecifické ochorenie trvajúci 2 - 11 dní. U 70-95% infikovaných osôb je prítomná horúčka (> 38,5 ° C), malátnosť, myalgia a bolesti hlavy, niekedy tiež artralgia, postihnutie pečene (zvýšené pečeňové transaminázy), poruchy centrálneho nervového systému (zmätenosť, neurologické príznaky), gastrointestinálneho systému (nevoľnosť a vracanie) alebo respiračné symptómy (dýchacie ťažkosti). U menšiny pacientov sa môže objaviť vyrážka. Ochorenie môže prebehnúť aj bez klinických príznakov. V prípade, že je ochorenie sprevádzané vyrážkou, by mala byť anaplazmóza zahrnutá do diferenciálnej diagnostiky infekcií prenášaných kliešťami."
        },
        {
          nazov: "Babezióza",
          latinsky: "Babesia microti",
          obrazok: "https://upload.wikimedia.org/wikipedia/commons/5/52/Babiesa_spp.jpg",
          popis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad, rem doloribus pariatur quis quas itaque ullam odit autem veritatis. Nam, earum. Fugit modi rerum facilis voluptates tenetur officia deserunt repellendus, consequuntur iste praesentium repellat, quidem quas delectus, dicta quisquam"
        },
        {
          nazov: "Bartonellosis",
          latinsky: "Bartonella henselae",
          obrazok: "",
          popis: "Bartonella henselae, ako jeden z druhov bartonel, spôsobuje chorobu z mačacieho škrabnutia. Z údajov zverejnených Centrom kontroly a prevenciou chorôb v Atlante vyplýva, že Bartonella henselae bola objavená v roku 1992 . Hlavným rezervoárom sú kliešť rodu Ixodes ricinus a mačky, baktérie sú na tieto zvieratá prenášané mačacími blchami. Za možný je považovaný aj prenos pri saní blchy alebo kliešťa. Po 1-7 týždňoch dochádza k zdureniu regionálne lymfatické uzliny. K systémovým príznakom patria bolesti hlavy, subfebrílie, slabosť, malátnosť, závraty, únava, bolesť kĺbov, svalov, chrbta a očí. Diagnóza je stanovovaná sérologickým preukazom špecifických protilátok IgM a IgG metódou nepriamej imunofluorescencie.",
        },
        {
          nazov: "Bourbon Virus",
          latinsky: "Bourbon virus",
          obrazok: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad, rem doloribus pariatur quis quas itaque ullam odit autem veritatis. Nam, earum. Fugit modi rerum facilis voluptates tenetur officia deserunt repellendus, consequuntur iste praesentium repellat, quidem quas delectus, dicta quisquam",
        },
        {
          nazov: "Ehrlichióza",
          latinsky: "Ehrlichia chaffeensis",
          obrazok: "",
        },
        {
          nazov: "Lymská borelióza",
          latinsky: "Borrelia burgdorferi, Borrelia afzelii, Borrelia garinii", 
          obrazok: "",
        },
        {
          nazov: "Rickettsia",
          latinsky: "Rickettsia parkeri",
          obrazok: "",
        },
        {
          nazov: "Tularemia",
          latinsky: "Francisella tularensis",
          obrazok: "",
        }
      ],
      vybranyPatogen: {
        nazov: "Babezióza",
        latinsky: "",
        obrazok: "",
        popis:"",
      }
    };
  },

  methods: {
    vyberPatogen: function(patogen) {
      this.vybranyPatogen = patogen;
    }
  }
};
</script>

<style>
.textRizika {
  padding: 15px 15px 0px 15px;
  font-size: 15px;
  font-family: "Roboto Slab", serif;
  
 
}

.patogen {
  list-style-type: none;
  font-size: 15px;
}

.patogen:hover {
  background: rgba(63, 179, 157, 1);
  color:white;
  font-size:16px;
  padding:0 10px;
  cursor:pointer;
  border-radius:20px;
}

.zoznamPatogen li {
  float: left;
  clear: left;
}

.detailPatogen {
  margin-top: 10px;
  font-size: 15px;
  float: left;
  clear: left;
  border: solid 2px rgba(63, 179, 157, 1);
  border-radius: 20px;
  padding: 10px;
  background:white;
}

.nazovPatogen {
  font-size:17px;
 
}

.latinskyPatogen {
  
  font-style: italic;
}

.obrazokPatogen {
  max-width:50%;
  border: solid 2px  rgba(63, 179, 157, 1);
  border-radius: 20px;
}

.patogenWrap {
  display:flex;
  flex:1;
  margin-top:10px;
}



@media (min-width: 600px) {
  .textRizika {
    font-size: 15px;
    text-align: left;
  }
}
  @media (min-width: 1000px) {
 .obrazokPatogen {
  max-width:30%;
 
}
}
</style>