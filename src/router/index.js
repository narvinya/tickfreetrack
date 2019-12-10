import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Informacie from '../views/Informacie.vue';
import Mapa from '../views/Mapa.vue';
import OdstranenieKliesta from '../views/OdstranenieKliesta.vue';
import ZadatLokaciu from '../views/ZadatLokaciu.vue';
import Odfotit from '../views/Odfotit.vue';
import NoveKliste from '../views/NoveKliste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  }

]

const router = new VueRouter({
  routes
})

export default router
