import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Informacie from '../views/Informacie.vue';
import Mapa from '../views/Mapa.vue';
import OdstranenieKliesta from '../views/OdstranenieKliesta.vue';
import ZadatLokaciu from '../views/ZadatLokaciu.vue';
import Odfotit from '../views/Odfotit.vue';
import NoveKliste from '../views/NoveKliste.vue';
import Prevencia from '../views/Prevencia.vue';
import PriznakyPriNakaze from '../views/PriznakyPriNakaze.vue';
import PrvaPomoc from '../views/PrvaPomoc.vue';
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
    path: '/lokacia',
    name: 'zadatlokaciu',
    component: ZadatLokaciu
  }, {
    path: '/odstranenie',
    name: 'odstraneniekliesta',
    component: OdstranenieKliesta
  }, {
    path: '/foto',
    name: 'odfotit',
    component: Odfotit
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
    path: '/pomoc',
    name: 'prvaPomoc',
    component: PrvaPomoc
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
