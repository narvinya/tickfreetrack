<template>
<body>
  <div class="PozadieBiele">
    <Ikona />
    <h1>Prevencia</h1>
    <Menu />
    <div class="kontajner">
    <div class="textPrevencia">
      <p>Ku kontaktu s kliešťom môže dôjsť po celý rok, najaktívnejšie sú však počas teplejších mesiacov (apríl - september).</p>
      <h2>Predtým než pojdete von</h2>
      <p>
        Malé parazity sa vyskytujú v trávnatých porastoch s výškou od dvadsať centimetrov do jedného metra, v záhradách, v parkoch i v lesoch, ale v posledných rokoch v dôsledku klimatických zmien sa dostávajú aj do vyšších zemepisných polôh, až do nadmorskej výšky nad 1000 metrov. Striehnu na koncoch listov, na steblách tráv alebo na vetvičkách prízemných kríkov. Obľubujú najmä dubovo-hrabové lesy.
        Mnoho ľudí príde do kontaktu s klieštom aj vo svojom vlastnom dvore alebo okolí.
      </p>
      <p>
        Oblečenie a výstroj ošetrujte výrobkami obsahujúcimi 0,5% permetrínu. Permetrín je možné použiť na ošetrenie obuvi,
        odevov a kempingového náradia. 
      </p>
      <p>
        Vyhýbajte sa miestam s vyšším predpokladom výskytu kliešťov – okraje lesov, vysoké porasty tráv, krovie.
        V prírode noste vhodné oblečenie pokrývajúce čo najväčšie časti tela, hlavne dlhé nohavice, ponožky, vhodnejší je svetlý odev, na ktorom parazita skôr zbadáte.
        
V lesoch kráčajte predpovšetkým po vyšlapaných chodníkoch.
      </p>
      <h2>Po tom, ako sa vrátite domov</h2>
      <p>
       Po návrate domov si dôkladne prekontrolujte celé telo. 
Všetky nájdené kliešte by sa mali odstrániť. 
Je možné sušiť oblečenie v sušičke pri vysokej teplote 10 minút, aby ste tým zneškodnili kliešte na oblečení. 
      </p>
      <p>
Preskúmajte výstroj a domáce zvieratá. Kliešte sa môžu dostať dnu do domu na odevoch a domácich miláčikoch a neskôr sa tak prichytiť na človeka. Starostlivo prezrite domáce zvieratá, oblečenie a batohy.</p>
      <p>

Osprchujte sa hneď po tom, ako sa vrátite domov. 
Sprchovanie môže pomôcť zmyť neprichytené kliešte.
      </p>
      <p>
        Kliešť sa najčastejšie prisaje:
        <ul>
       <li>do vlasatej časti hlavy</li>
       <li>do slabín a podpazušia</li>
<li>za uši</li>
<li>do podkolennej jamky</li>
<li>na intímne miesta</li>
</ul>
      </p>
      <h2>Prírodné pesticídy a repelenty proti kliešťom</h2>
      <p>
        Before insect repellents can be sold to the public, most must be registered by the Environmental Protection Agency (EPA). EPA registration means that a product has been evaluated and approved as safe and effective for people to use on their skin when applied according to label instructions.
        Any EPA-registered product will have an EPA Registration Number on the product label.
      </p>
      <h2>Výrobky na prírodnej báze, ktoré odpudzujú alebo zabíjajú kliešte</h2>
      <h3>Active ingredient: 2-undecanone</h3>
      <p>
        EPA-registered: Yes
        Natural source: Essential oil from leaves and stems of the wild tomato plant, Lycopersicon hirsutum
        Repels: Ticks (including the blacklegged tick and the lone star tick)
        For use on: Skin, clothing, gear
        Commercially available: Yes
      </p>
      <h3>Active ingredient: Garlic Oil</h3>
      <p>
        EPA-registered: Exempt
        Natural source: Essential oil from garlic plants
        Repels: Ticks (blacklegged tick)
        For use on: Lawns and gardens
        Commercially available: Yes
      </p>
      <h3>Active ingredient: Mixed Essential Oils (rosemary, lemongrass, cedar, peppermint, thyme, and geraniol)</h3>
      <p>
        EPA-registered: Exempt
        Natural source: Essential oils from rosemary, lemongrass, thyme, and geraniol plants
        Repels: Ticks (blacklegged tick)
        For use on: For use on skin, lawns, and gardens
        Commercially available: Yes
      </p>
      <h3>Active ingredient: Nootkatone</h3>
      <p>
        EPA-registered: EPA registration filed and under review
        Natural source: Essential oils from Alaska yellow cedar trees, some herbs, and citrus fruits
        Kills and repels: Ticks (blacklegged tick) and other arthropods
        For use on: For use on skin, lawns, and gardens
        Commercially available: No
      </p>
    </div>
    </div>
  </div>
</body>
</template>

<script>
import Ikona from "@/components/Ikona.vue";
import Menu from "@/components/Menu.vue";
import Nadpis from "@/components/Nadpis.vue";
import PozadieLes from "@/components/PozadieLes.vue";
import PozadieZelene from "@/components/PozadieZelene.vue";
import PozadieBiele from "@/components/PozadieBiele.vue";
import PozadieLesSmall from "@/components/PozadieLesSmall.vue";


export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieLes: PozadieLes,
    PozadieZelene: PozadieZelene,
    PozadieBiele: PozadieBiele,
    PozadieLesSmall: PozadieLesSmall,
  
  }
};
</script>

<style>
.textPrevencia {
  padding: 15px 15px 0px 15px;
  font-size: 12px;
}


@media (min-width: 600px) {
  .textPrevencia {
    font-size: 16px;
    text-align: left;
  }
}
</style>