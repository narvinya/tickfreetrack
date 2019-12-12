<template>
   <body>
    <div class="PozadieLes">
      <Menu />
      <Ikona />
      <Nadpis />
      <MapaObrazok />
      <ButtonPridat />
      <ButtonSpat />
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
import MapaObrazok from "@/components/MapaObrazok.vue";
import ButtonPridat from "@/components/ButtonPridat.vue";
import ButtonSpat from "@/components/ButtonSpat.vue";

export default {
components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    UvodnyText: UvodnyText,
    HomeButtonBitten: HomeButtonBitten,
    MapaObrazok: MapaObrazok,
    ButtonSpat: ButtonSpat,
    ButtonPridat: ButtonPridat,
  }
}
</script>


<style>
</style>