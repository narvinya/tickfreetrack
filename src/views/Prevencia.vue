<template>
<body>
  <div class="PozadieLesSmall">
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
          Oblečenie a výstroj ošetrujte výrobkami obsahujúcimi 0,5% permethrinu. Permethrin je možné použiť na ošetrenie obuvi,
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
          Preskúmajte výstroj a domáce zvieratá. Kliešte sa môžu dostať dnu do domu na odevoch a domácich miláčikoch a neskôr sa tak prichytiť na človeka. Starostlivo prezrite domáce zvieratá, oblečenie a batohy.
          Osprchujte sa hneď po tom, ako sa vrátite domov.
          Sprchovanie môže pomôcť zmyť neprichytené kliešte.
        </p>
        <p>Kliešť sa najčastejšie prisaje do vlasatej časti hlavy, do slabín a podpazušia, za uši, do podkolennej jamky a na intímne miesta.</p>
        <h2>Výrobky na prírodnej báze, ktoré odpudzujú alebo zabíjajú kliešte</h2>
        <h3>Účinná látka: 2-undekanon</h3>
        <p>
          Éterický olej z listov a stoniek rastliny divých paradajok, Lycopersicon hirsutum.
          Je možné použiť na pokožku, odev, výstroj.
        </p>
        <h3>Účinná látka: cesnakový olej</h3>
        <p>
          Éterický olej z cesnakových rastlín.
          Použitie: Trávniky a záhrady
        </p>
        <h3>Účinná látka: Zmiešané éterické oleje (rozmarín, citrónová tráva, céder, mäta pieporná, tymián a geraniol)</h3>
        <p>Možné použiť na pokožku, trávniky a záhrady. Komerčne dostupné.</p>
        <h3>Účinná látka: Nootkatone</h3>
        <p>
          Éterické oleje z cedrových stromov Aljašky, niektoré byliny a citrusové plody
          Použitie na pokožku, trávnik a záhradu
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
    PozadieLesSmall: PozadieLesSmall
  }
};
</script>

<style>
.textPrevencia {
  padding: 15px 15px 0px 15px;
  font-size: 12px;
}

.listKliestPrisatie li {
  float: left;
  clear: left;
}

@media (min-width: 600px) {
  .textPrevencia {
    font-size: 16px;
    text-align: left;
  }
}
</style>