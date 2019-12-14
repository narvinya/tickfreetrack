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
import PatogenZoznam from "@/components/PatogenZoznam.vue";
import PatogenDetail from "@/components/PatogenDetail.vue";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    PozadieLesSmall: PozadieLesSmall,
    PatogenDetail: PatogenDetail
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
        popis:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad, rem doloribus pariatur quis quas itaque ullam odit autem veritatis. Nam, earum. Fugit modi rerum facilis voluptates tenetur officia deserunt repellendus, consequuntur iste praesentium repellat, quidem quas delectus, dicta quisquam"
        },
        {
          nazov: "Babezióza",
          latinsky: "Babesia microti",
          obrazok: "wikipedia.org/wiki/Babesia#/media/File:Babiesa_spp.jpg",
          popis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad, rem doloribus pariatur quis quas itaque ullam odit autem veritatis. Nam, earum. Fugit modi rerum facilis voluptates tenetur officia deserunt repellendus, consequuntur iste praesentium repellat, quidem quas delectus, dicta quisquam"
        },
        {
          nazov: "Bartonellosis",
          latinsky: "Bartonella henselae",
          obrazok: "",
          obrazok: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad, rem doloribus pariatur quis quas itaque ullam odit autem veritatis. Nam, earum. Fugit modi rerum facilis voluptates tenetur officia deserunt repellendus, consequuntur iste praesentium repellat, quidem quas delectus, dicta quisquam",
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
}

.nazovPatogen {
  font-size:17px;
  text-align:center;
}



.latinskyPatogen {
  text-align:center;
  font-style: italic;
}





@media (min-width: 600px) {
  .textRizika {
    font-size: 15px;
    text-align: left;
  }
}
</style>