<template>
   <router-link to="/lokacia" class="seenButton">Saw a tick</router-link>
</template>

<script>
export default {

}
</script>

<style>
.seenButton {
    position:absolute;
    bottom:150px;
    right:250px;
    display: inline-block;
    text-align: center;
    padding: 12px 30px 12px 30px;
    border-radius: 100px;
    background: -moz-linear-gradient(top, #ff5959, #b62f2f);
    background: linear-gradient(to bottom, #ff5959, #b62f2f);
    font: 17px "Arvo", serif;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    border:0;
}
.seenButton:hover,
.seenButton:focus {
    background: #720000;
    background: -moz-linear-gradient(top, #720000, #460000);
    background: linear-gradient(to bottom, #720000, #460000);
    color: #ffffff;
    text-decoration: none;
}
</style>