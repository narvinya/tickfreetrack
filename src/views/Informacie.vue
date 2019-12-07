<template>
   <body>
    <div class="PozadieLes">
      <Ikona />
      <Nadpis />
      <Menu />
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
export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieZelene: PozadieZelene,
    UvodnyText: UvodnyText
}
};
</script>

<style>
</style>