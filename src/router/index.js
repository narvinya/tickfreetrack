import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Informacie from '../views/Informacie.vue';
import Mapa from '../views/Mapa.vue';
import OdstranenieKliesta from '../views/OdstranenieKliesta.vue';

import Odfotit from '../views/Odfotit.vue';
import NoveKliste from '../views/NoveKliste.vue';
import Prevencia from '../views/Prevencia.vue';
import PriznakyPriNakaze from '../views/PriznakyPriNakaze.vue';
import MoznostiTestovania from '../views/MoznostiTestovania.vue';
import Rizika from '../views/Rizika.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/informacie',
    name: 'informacie',
    component: Informacie
  }, {
    path: '/mapa',
    name: 'mapa',
    component: Mapa
  }, {
    path: '/odstranenie',
    name: 'odstraneniekliesta',
    component: OdstranenieKliesta
  }, 
  {
    path: '/novekliste',
    name: 'znovekliste',
    component: NoveKliste
  },
  {
    path: '/prevencia',
    name: 'prevencia',
    component: Prevencia
  },
  {
    path: '/priznaky',
    name: 'priznaky',
    component: PriznakyPriNakaze
  },
  {
    path: '/testovanie',
    name: 'moznostiTestovania',
    component: MoznostiTestovania
  },
  {
    path: '/rizika',
    name: 'rizika',
    component: Rizika
  },
  

]

const router = new VueRouter({
  routes
})

export default router
