<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Riziká</h1>
    <Menu />
    <div class="kontajner">
      <div class="textRizika">
        <p>Kliešte môžu byť nositeľmi patogénov spôsobujúcich ochorenia ľudí, ako sú:</p>
        <p>Kliknite nižšie pre výber a zobrazenie informácii.</p>
<div>
        <ul class="zoznamPatogen">
          <li
            v-on:click="vyberPatogen(patogen)"
            class="patogen"
            v-for="patogen in patogeny"
            v-bind:key="patogen.nazov"
          >{{patogen.nazov}}</li>
        </ul>
        </div>
        <div>
        <div class="detailPatogen" v-show="vybranyPatogen.nazov.length">
          <div class="nazovPatogen">{{vybranyPatogen.nazov}}</div>
          <div class="latinskyPatogen">{{vybranyPatogen.latinsky}}</div>
          <div class="popisPatogen">{{vybranyPatogen.popis}}</div>
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
import PozadieBiele from "@/components/PozadieBiele.vue";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    PozadieLesSmall: PozadieLesSmall,
    PozadieBiele: PozadieBiele
  },
  computed: {
    patogeny() {
      return this.data.patogeny;
    }
  },
  data: function() {
    return {
      patogeny: [
        {
          nazov: "Anaplazmóza",
          latinsky: "Anaplasma phagocytophilum",
          popis:
            "Anaplazmóza je infekcia prenášaná kliešťami Ixodes, pôvodcom ochorenia je baktéria Anaplasma phagocytophilum. Jednotlivci sú najviac ohrození v čase aktivity kliešťov, od jari do jesene. Inkubačná doba je v rozmedzí 5 - 21 dní, väčšina ochorení sa vyskytuje v období apríl-október. Klinickým prejavom je zvyčajne akútne nešpecifické ochorenie trvajúci 2 - 11 dní. U 70-95% infikovaných osôb je prítomná horúčka (> 38,5 ° C), malátnosť, myalgia a bolesti hlavy, niekedy tiež artralgia, postihnutie pečene (zvýšené pečeňové transaminázy), poruchy centrálneho nervového systému (zmätenosť, neurologické príznaky), gastrointestinálneho systému (nevoľnosť a vracanie) alebo respiračné symptómy (dýchacie ťažkosti). U menšiny pacientov sa môže objaviť vyrážka. Ochorenie môže prebehnúť aj bez klinických príznakov. V prípade, že je ochorenie sprevádzané vyrážkou, by mala byť anaplazmóza zahrnutá do diferenciálnej diagnostiky infekcií prenášaných kliešťami."
        },
        {
          nazov: "Babezióza",
          latinsky: "Babesia microti",
          popis:
            "Babezióza je ochorenie podobné malárii spôsobené parazitom, buď Babesia microti, B. duncani alebo B. divergens. U starších ľudí môze byť fatálna. Babezióza môže byť závažnejšia u pacientov s koexistujúcou lymskou boreliózou. Medzi príznaky patria: horúčka, zimnica, únava, bolesť hlavy, bolesť svalov, potenie a anémia. Testy na babeziózu: IFA (IgG a IgM) a PCR. Medzi kliešte, ktoré prenášajú babesiózu, patrí Ixodes Scapularis a Ixodes Pacificus, ktoré prenášajú aj boreliózu. Viacnásobné infekcie sa môžu prenášať z uhryznutia toho istého kliešťa. Babezióza sa môže taktiež preniesť prostredníctvom krvných transfúzií. V roku 2018 úrad FDA schválil skríning krvi pre prítomnosť Babesia microti."
        },
        {
          nazov: "Bartonelóza",
          latinsky: "Bartonella henselae",
          popis:
            "Bartonella henselae, ako jeden z druhov bartonel, spôsobuje chorobu z mačacieho škrabnutia. Z údajov zverejnených Centrom kontroly a prevenciou chorôb v Atlante vyplýva, že Bartonella henselae bola objavená v roku 1992 . Hlavným rezervoárom sú kliešť rodu Ixodes ricinus a mačky, baktérie sú na tieto zvieratá prenášané mačacími blchami. Za možný je považovaný aj prenos pri saní blchy alebo kliešťa. Po 1-7 týždňoch dochádza k zdureniu regionálne lymfatické uzliny. K systémovým príznakom patria bolesti hlavy, subfebrílie, slabosť, malátnosť, závraty, únava, bolesť kĺbov, svalov, chrbta a očí. Diagnóza je stanovovaná sérologickým preukazom špecifických protilátok IgM a IgG metódou nepriamej imunofluorescencie."
        },
        {
          nazov: "Lymská borelióza",
          latinsky: "Borrelia burgdorferi, Borrelia afzelii, Borrelia garinii",
          popis:
            "Pôvodcom lymskej boreliózy je spirochéta z rodu Borrelia, ktorá má viac než 40 druhov. Borrelia burgdorferi sensu lato je pre človeka patogénna a v Európe sa vyskytuje viacero druhov.  Klinické prejavy ochorenia sú heterogénne, multisystémové a pri opakovanej infekcii Borrelia burgdorferi sa často vzájomne prekrývajú. Medzi hlavné klinické prejavy lymskej boreliózy patria postihnutie kože, neurologické prejavy, postihnutie srdca a muskuloskeletálne prejavy. Typickým prejavom je erythema migrans (EM) na koži. Ide o erytém s častým centrálnym vyblednutím. Erytém sa objaví 3 – 30 dní po prisatí kliešťa v mieste jeho prisatia. Objaví sa bohužiaľ len v určitom percente prípadov. K dnešnému dňu neexistujú metódy, ktoré by odhalili lymskú boreliózu presne. Treba si uvedomiť, že protilátky sa na rozdiel od infekcie tvoria oneskorene, preto treba v prípade negatívneho výsledku niekedy vyšetrenie opakovať. Používa sa detekcia tvorby protilátok proti boreliovým antigénom s využitím metódy ELISA a pri nejasných výsledkoch následná konfirmácia metódou Western blot. Tieto metódy však nie sú presné a často poskytujú falošne negatívny výsledok. "
        },
        {
          nazov: "Rocky Mountain spotted fever",
          latinsky: "Rickettsia parkeri",
          popis:
            "Pôvodcom Rocky Mountain spotted fever je rickettsia. Riketsie sú gramnegatívne, nepohyblivé baktérie. Žijú intracelulárne, čiže výlučne vo vnútri zvieracích alebo ľudských buniek. Ich uprednostňovaným miestom pobytu sú črevné bunky kliešťov, roztočov, bĺch a vší. Inkubačná doba horúčky Skalistých hôr je krátka a trvá cca. tri dni až jeden týždeň. Ochorenie sa začína bolesťami hlavy, bolesťami končatín a horúčkou 40-41°C. U väčšiny postihnutých (cca. 80 %) sa objavujú masívne kožné vyrážky po celom tele. Začínajú sa väčšinou na pažiach a nohách a odtiaľ sa rozširujú na celé telo. Rovnako postihnuté sú aj dlane a chodidlá. Diagnóza ochorenia sa stanovuje pomocou sérologických krvných vyšetrení. Určité protilátky, ako napr. lgM, sú dokázateľné už po niekoľkých dňoch. Diagnóza môže byť však stanovená aj na základe vzorky tkaniva kože. Liečenie postihnutých by malo prebiehať v nemocnici a pozostáva z podávania antibiotík. Používajú sa tetracyklíny a chloramfenikol."
        },
        {
          nazov: "Tularémia",
          latinsky: "Francisella tularensis",
          popis:
            "Tularémia je ochorenie v Česku nazývané aj ako zajačia choroba. Ochorenie je vyvolané baktériou zvanou Francisella tularensis. Francisella tularensis je malá baktéria, ktorá ako jedna z mála baktérií žije uprostred buniek - ide o bunky nášho obranného systému, ktoré nielen že napadá, je v nich tiež schovaná, a teda sa zle lieči antibiotikami. Je možný prenos kliešťom z chorého zvieraťa na človeka. Samotná choroba sa prejavuje rôznymi spôsobmi podľa toho, kadiaľ sa baktérie do tela dostanú. Rozlišujeme preto formy: kožnú formu, pri ktorej Franciselly prenikajú cez ranku na koži dovnútra, kde sa množia. Zároveň sú postihnuté miestne lymfatické uzliny odvádzajúce miazgu spolu s baktériami z rany. Pridáva sa triaška, horúčka, nevoľnosť. Formy postihujúce hrdlo sa prejavuje ako angína - ak je baktéria prehltnutá, môže v čreve spôsobiť formu zažívaciu, ktorá sa vyznačuje krvácaním, vredovatením zažívacieho traktu. Pľúcna forma - vzniká po vdýchnutí nakazeného prachu napríklad pri práci so senom, slamou znečistenou močom chorých hlodavcov."
        }
      ],
      vybranyPatogen: {
        nazov: "",
        latinsky: "",
        popis: ""
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
  color: white;
  font-size: 15px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 20px;
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
  background: white;
}

.nazovPatogen {
  font-size: 17px;
}

.latinskyPatogen {
  font-style: italic;
}

.obrazokPatogen {
  max-width: 50%;
  border: solid 2px rgba(63, 179, 157, 1);
  border-radius: 20px;
}

.patogenWrap {
  display: flex;
  flex: 1;
  margin-top: 10px;
}

@media (min-width: 600px) {
  .textRizika {
    font-size: 15px;
    text-align: left;
  }

  .patogen {
    font-size: 18px;
  }

  .textRizika {
    font-size: 16px;
  }

  .patogen:hover {
    background: rgba(63, 179, 157, 1);
    color: white;
    font-size: 19px;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 20px;
  }
}
@media (min-width: 1000px) {
  .obrazokPatogen {
    max-width: 30%;
  }
}

@media(max-width:599px) {
  .detailPatogen {
    
    float:none;
  
  }
}
</style>