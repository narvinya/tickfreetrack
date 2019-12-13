<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1 class="nadpisTestovanie">Možnosti testovania kliešťa</h1>
    <Menu />
    <img class="fotoLab" src="../../public/images/Lab.jpg" />
    <div class="textTestovanie">
      <p>
        There are places where the public can have ticks tested to see if they contain the Lyme bacteria, Borrelia burgdorferi, or to see if they contain other disease organisms which can infect humans or other animals. There are generally charges for these services.
        LDA does not make recommendations about whether people should have ticks tested, reliability of tick testing, or whether people should wait for the results before seeking/getting treatment. Those are decisions that need to be made after reviewing material on the topic and discussing the benefits/risks with a professional.
        Check with the labs for proper packaging and mailing of the ticks, the types of organisms tested for and the associated costs (e.g., Lyme disease, anaplasmosis, ehrlichiosis)
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
@media (max-width: 600px) {
  .ikona {
    display: none;
  }
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
  max-width: 100%;
}

@media (min-width: 600px) {
  .textTestovanie {
    font-size: 16px;
    text-align: left;
    max-width:600px;
  }
}

.fotoLab {
  max-width: 500px;
  margin-top: 100px;
}
</style>