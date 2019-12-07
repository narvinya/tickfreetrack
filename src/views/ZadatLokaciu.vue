<template>
   <body>
    <div class="PozadieLes">
      <Ikona />
      <Nadpis />
      <MapaObrazok />
      <ButtonPridat />
      <ButtonSpat />
      <!-- SPYTAT SA AKO ZAROVNAT NASPAT H1 BEZ TOHO ABY SA TO POSUNULO V OSTATNYCH VIEWS -->
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
import HomeButtonSeen from "@/components/HomeButtonSeen.vue";
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
    HomeButtonSeen: HomeButtonSeen,
    HomeButtonBitten: HomeButtonBitten,
    MapaObrazok: MapaObrazok,
    ButtonSpat: ButtonSpat,
    ButtonPridat: ButtonPridat,
  }
}
</script>


<style>
</style>