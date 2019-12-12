<template>
<body>
    <div class="PozadieLes">
      <Ikona />
      <Nadpis />
      <Menu />
      <UvodnyText />
      <HomeButtonBitten />
    </div>
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import PozadieLes from "@/components/PozadieLes.vue";
import PozadieZelene from "@/components/PozadieZelene.vue";
import UvodnyText from "@/components/UvodnyText.vue";
import HomeButtonBitten from "@/components/HomeButtonBitten.vue";
export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    UvodnyText: UvodnyText,
    HomeButtonBitten: HomeButtonBitten,

  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Arvo&display=swap");
</style>
