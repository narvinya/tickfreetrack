<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Riziká</h1>
    <Menu />
    <div class="kontajner">
      <div class="textRizika">
        <p>Kliešte môžu byť nositeľmi patogénov spôsobujúcich ochorenia ľudí, ako sú:</p>
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
  }
};
</script>

<style>
.textRizika {
  padding: 15px 15px 0px 15px;
  font-size: 12px;
  font-family: "Roboto Slab", serif;
}

@media (min-width: 600px) {
  .textRizika {
    font-size: 16px;
    text-align: left;
  }
}
</style>