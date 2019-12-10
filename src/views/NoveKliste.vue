<template>
<div  class="PozadieLes">
   <menicko/>
    <div id="obalka">
        <div >
            <mapa class="mapa"/>
        </div>

        <div class="formular">
           Souradnice: {{lat}}, {{lng}}
            <noveKliste/>
            <ulozit/>
        </div>
    </div>
  </div>
</template>


<script>
import Menu from '../components/Menu.vue'
import ZadanieLokacie from '@/components/ZadanieLokacie.vue'
import Ulozit from '@/components/Ulozit.vue'
import MapaNoveKliste from '@/components/MapaNoveKliste.vue'

if ("geolocation" in navigator) {
  console.log('geolokace je k dispozici')
} else {
  console.log('geolocation IS NOT available')
}



export default {
    components:{
        'noveKliste': ZadanieLokacie,
        'menicko' : Menu,
        'ulozit': Ulozit,
        'mapa' : MapaNoveKliste,
    },
    props:{
        prenasec: String,
        message: String
    },
    data(){
        return{
        lat: '',
        lng: '',
        }
    },
    computed:{
    ziskatLokaci(){
        navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    
}); this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    }
}
}
</script>

<style scoped>
.formular {
    background-image: 
      linear-gradient(#F8CE82 , #F4AF6A);
    background-size: cover;
    background-position: center;
    margin: 40px 20px 30px 30px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    border-radius: 10px;
    font-family: "Arvo", serif;
    font-size: 25px;
    text-align:center;
    color: rgb(24, 54, 54);
}
#obalka{
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
}
.mapa{
    margin-top: 0px;
}
</style>