<template>
  <router-link to="/mapa" class="pridatButton">Ulozit</router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.pridatButton {
    position:absolute;
    bottom: 30px;
   
    display: inline-block;
    text-align: center;
    padding: 12px 80px 12px 80px;
    border-radius: 100px;
    background:white;
    font: bold 25px;
    color: rgba(63, 179, 157, 1);
    text-decoration: none;
    text-transform: uppercase;
    border:0;
}
.pridatButton:hover,
.pridatButton:focus {
    background: #720000;
    background: -moz-linear-gradient(top, #720000, #460000);
    background: linear-gradient(to bottom, #720000, #460000);
    color: #ffffff;
    text-decoration: none;
}
</style>