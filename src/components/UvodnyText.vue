<template>
  <p class="uvodnyText">
    Hlavnou myšlienkou tohto webu je sledovanie výskytu kliešťov v prírode. Užívateľ môže zadať lokáciu, kde prišiel do kontaktu s týmto malým nebezpečným parazitom. Vďaka tomu môžete lepšie naplánovať výlet do prírody a prípadnú prevenciu. Čím viac ľudí bude zadávať, kde sa kliešte vyskytujú, tým lepšia bude informovanosť verejnosti. Vopred Vám za všetky príspevky ďakujeme. 
  </p>
</template>

<script>
export default {};
</script>

<style>
.uvodnyText {
  text-align: left;
  position: absolute;
  
  font-size: 15px;
  top: 110px;
  margin-left: 15px;
  margin-right: 15px;
}

@media (min-width: 600px) {
  .uvodnyText {
    text-align: left;
    max-width: 250px;
    left: 30px;
    bottom: 125px;
    top:175px;
    font-size: 16px;
    margin-right: 0;
    margin-left: 0;
    position: absolute;
    padding-top: 30px;
  }
}

@media (min-width: 1000px) {
  .uvodnyText {
    left: 50px;
    font-size: 18px;
  }
}
</style>