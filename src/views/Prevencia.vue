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
        Je dobré vedieť, kde je možné na kliešte naraziť. Kliešte žijú v trávnatých alebo zalesnených oblastiach.
        Trávenie času mimo chôdze so psom, kempingom, záhradníctvom alebo poľovačkou by vás mohlo priviesť do tesného kontaktu s kliešťami.
        Mnoho ľudí dostáva kliešte vo svojom vlastnom dvore alebo okolí.
      </p>
      <p>
        Oblečenie a výstroj ošetrujte výrobkami obsahujúcimi 0,5% permethrinu. Permetrín je možné použiť na ošetrenie obuvi,
        odevov a kempingového náradia a počas niekoľkých praní zostane chránený.
      </p>
      <p>
        Use Environmental Protection Agency (EPA)-registered insect repellentsexternal icon containing DEET, picaridin, IR3535, Oil of Lemon Eucalyptus (OLE), para-menthane-diol (PMD), or 2-undecanone.
        Always follow product instructions. Do not use products containing OLE or PMD on children under 3 years old.
      </p>
      <p>
        Avoid Contact with Ticks
        Avoid wooded and brushy areas with high grass and leaf litter.
        Walk in the center of trails.
      </p>
      <h2>Po tom, ako sa vrátite domov</h2>
      <p>
        Check your clothing for ticks. Ticks may be carried into the house on clothing. Any ticks that are found should be removed. Tumble dry clothes in a dryer on high heat for 10 minutes to kill ticks on dry clothing after you come indoors. If the clothes are damp, additional time may be needed.
        If the clothes require washing first, hot water is recommended. Cold and medium temperature water will not kill ticks.
      </p>
      <p>Examine gear and pets. Ticks can ride into the home on clothing and pets, then attach to a person later, so carefully examine pets, coats, and daypacks</p>
      <p>
        Shower soon after being outdoors. Showering within two hours of coming indoors has been shown to reduce your risk of getting Lyme disease and may be effective in reducing the risk of other tickborne diseases.
        Showering may help wash off unattached ticks and it is a good opportunity to do a tick check.
      </p>
      <p>
        Check your body for ticks after being outdoors. Conduct a full body check upon return from potentially tick-infested areas, including your own backyard. Use a hand-held or full-length mirror to view all parts of your body. Check these parts of your body and your child’s body for ticks:
        Under the arms
        In and around the ears
        Inside belly button
        Back of the knees
        In and around the hair
        Between the legs
        Around the waist
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
       <buttonDalej />
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
  font-family: "Roboto Slab", serif;
}


@media (min-width: 600px) {
  .textPrevencia {
    font-size: 16px;
    text-align: left;
  }
}
</style>