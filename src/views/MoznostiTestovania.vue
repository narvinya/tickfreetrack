<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1 class="nadpisTestovanie">Možnosti testovania kliešťa</h1>
    <Menu />
    <img class="fotoLab" src="../../public/images/Lab.jpg" />
    <div class="textTestovanie">
      <p>
        Ak sa obávate, že kliešť mohol byť nakazený, máte v zásade dve možnosti. Tou prvou je pravidelná kontrola miesta prisatia a sledovanie príznakov infekcie. Lekár vám tiež môže vyhotoviť laboratórne testy, ktoré sú pozitívne väčšinou až za niekoľko týždňov po infekcii. Druhou možnosťou je poslať kliešťa na laboratórne vyšetrenie. Ako na to? Odstráneného kliešťa vložíte do igelitového vrecka a priložíte k nemu kúsok navlhčeného (nie mokrého) papierika alebo buničiny. Na internete alebo z odporúčania lekára či známeho si nájdete laboratórium, ktoré sa testovaním kliešťov zaoberá. Laboratóriá väčšinou vyžadujú vyplnení objednávky vyšetrenia a jej zaslanie spolu s kliešťom poštou na príslušnú adresu. Platba sa väčšinou vykonáva zaslaním peňazí na bankový účet. Informácie o výsledkoch testu vám bude oznámená najčastejšie do jedného týždňa od zaslania kliešťa. Kliešťa môžete nechať vyšetriť na prítomnosť lymskej boreliózy, kliešťovej encefalitídy, anaplazmózy, babeziózy a bartonelózy.
      </p>
    </div>
  </div>
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import PozadieLesSmall from "@/components/PozadieLesSmall.vue";
import PozadieZelene from "@/components/PozadieZelene.vue";
import PozadieBiele from "@/components/PozadieBiele.vue";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLesSmall: PozadieLesSmall,
    PozadieZelene: PozadieZelene,
    PozadieBiele: PozadieBiele
  }
};
</script>

<style>
@media (max-width: 599px) {
  /* .ikona {
    display: none;
  } */
  .nadpisTestovanie {
    font-size: 20px;
  }
}

.textTestovanie {
  padding: 15px 15px 0px 15px;
  font-size: 12px;
  font-family: "Roboto Slab", serif;
}
.fotoLab {
  max-width: 90%;
  margin-top:0;
}

@media (min-width: 600px) {
  .textTestovanie {
    font-size: 16px;
    text-align: left;
    max-width:600px;
  }

.fotoLab {
  max-width: 500px;
  margin-top: 100px;
}

}


</style>