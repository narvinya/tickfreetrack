<template>
<body>
  <div class="PozadieLesSmall">
    <Ikona />
    <h1>Odstránenie kliešťa</h1>
    <Menu />
    
    <div class="kontajner">
       <StopZnacka />
    <div class="textOdstranenie">
      <p>
        Miesto, kde sa kliešť prichytil, nie je vhodné dezinfikovať dráždivými látkami a alkoholom skôr, než sa
        ho podarí vybrať. Neodporúča sa kliešťa natierať masťami či olejom. Mohlo by to spôsobiť
        vyprázdnenie obsahu čriev kliešťa do rany a prenos baktérií alebo vírusov do krvi.
      </p>
    </div>
    <StopZnacka />
    <div class="textOdstranenie">
      <p>
        Krúživé pohyby v smere či proti smeru hodinových ručičiek sú NEVHODNÉ. Kliešť má totiž po celej dĺžke rypáčika háčiky.
        Vytáčaním kliešťa sa jeho fixačný orgán - tenký a relatívne dlhý, roztrhne a ostane v koži.
      </p>
    </div>
    <img class="odstranenieNavod" src="../../public/images/OdstranenieNavod.png" />
    <ZelenaZnacka />
    <div class="textOdstranenie">
      <p>
        Prichyteného kliešťa by sme mali odstrániť kývavým pohybom, pinzetu je potrebné pritlačiť čo najbližšie ku koži.
        Kliešťa uchopíme za tvrdú základňu hlavičky a opatrne ho ťaháme kolmo oproti koži. Súčasne kliešťa pootočíme do polkruhu
        (najviac jednu otáčku) striedavo na obe strany. Ak napriek tomu stále drží, musíme ťah proti koži zväčšovať. Napokon sa uvoľní a podarí sa vybrať ho z rany celého.
        Po odstránení očistite oblasť antiseptickým prostriedkom, ako je napríklad alkohol alebo mydlo a voda.
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
import PozadieZelene from "@/components/PozadieZelene.vue";
import PozadieLesSmall from "@/components/PozadieLesSmall.vue";
import StopZnacka from "@/components/StopZnacka.vue";
import ZelenaZnacka from "@/components/ZelenaZnacka.vue";
import ButtonDalej from "@/components/ButtonDalej.vue";

export default {
  components: {
    Ikona: Ikona,
    Nadpis: Nadpis,
    Menu: Menu,
    PozadieZelene: PozadieZelene,
    PozadieLesSmall: PozadieLesSmall,
    StopZnacka: StopZnacka,
    ZelenaZnacka: ZelenaZnacka,
    ButtonDalej: ButtonDalej,
  }
};
</script>

<style>
.textOdstranenie {
  padding: 15px 15px 0px 15px;
  font-size: 12px;
  font-family:'Roboto Slab', serif;
}

p {
  margin: 0;
}

.odstranenieNavod {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin:0;
  padding: 0;
}

@media(min-width:600px) {
  .textOdstranenie {
  font-size: 16px;
  text-align:left;
}

.kontajner {
  margin-top:120px; 
  max-width:700px
}

.odstranenieNavod {
  margin-left:20px;
}
}
</style>