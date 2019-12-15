<template>
<body>
    <div class="PozadieLes">
      <Ikona />
      <Nadpis />
      <Menu />
      <UvodnyText />
      <img src="../../public/images/MobilRastlina.png" class="fotkaUvod">
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
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");


@media (min-width:600px) {
  .fotkaUvod {
    display:none;
  }
}

@media (max-width:599px) {
.fotkaUvod {
  max-width:300px;
  position:absolute;
  bottom:120px;
  left:calc(50% - 150px);
}
}
</style>
