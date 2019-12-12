<template>
<body>
    <div class="PozadieTyrkysove">
         <ObrazokDievcaFoti />
      <IkonaBiela />
      <NadpisBiely />
      <ButtonOdfotit />
      <ButtonPreskocit />
    </div>
    </body>
</template>

<script>
import IkonaBiela from "@/components/IkonaBiela.vue";
import Menu from "@/components/Menu.vue";
import NadpisBiely from "@/components/NadpisBiely.vue";
import PozadieLes from "@/components/PozadieLes.vue";
import PozadieTyrkysove from "@/components/PozadieTyrkysove.vue";
import UvodnyText from "@/components/UvodnyText.vue";
import HomeButtonBitten from "@/components/HomeButtonBitten.vue";
import ButtonOdfotit from "@/components/ButtonOdfotit.vue";
import ObrazokDievcaFoti from "@/components/ObrazokDievcaFoti.vue";
import ButtonPreskocit from "@/components/ButtonPreskocit.vue";

export default {
components: {
    IkonaBiela: IkonaBiela,
    NadpisBiely: NadpisBiely,
    Menu: Menu,
    PozadieLes: PozadieLes,
    UvodnyText: UvodnyText,
    HomeButtonBitten: HomeButtonBitten,
    ButtonOdfotit: ButtonOdfotit,
    ObrazokDievcaFoti: ObrazokDievcaFoti,
    PozadieTyrkysove: PozadieTyrkysove,
    ButtonPreskocit: ButtonPreskocit,
  }
}
</script>

<style>

</style>