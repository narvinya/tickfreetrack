<template>
 <body>
    <div class="PozadieBiele">
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
import PozadieBiele from "@/components/PozadieBiele.vue"

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    PozadieBiele: PozadieBiele,
  }
}
</script>

<style>

</style>