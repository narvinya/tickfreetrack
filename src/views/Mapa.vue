<template>
    <body>
    <div class="PozadieBiele">
      <Ikona />
      <Nadpis />
      <Menu />
      <MapaObrazok />
    </div>
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import MapaObrazok from "@/components/MapaObrazok.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import PozadieZelene from "@/components/PozadieZelene.vue";
import UvodnyText from "@/components/UvodnyText.vue";
import PozadieBiele from "@/components/PozadieBiele.vue";
import PozadieLes from "@/components/PozadieLes.vue";
export default {
components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    MapaObrazok: MapaObrazok,
    Menu: Menu,
    PozadieZelene: PozadieZelene,
    UvodnyText: UvodnyText,
}
}

</script>

<style>
</style>