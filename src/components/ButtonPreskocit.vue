<template>
   <router-link to="/lokacia" class="buttonPreskocit">Preskocit</router-link>
</template>

<script>
export default {

}
</script>

<style>
.buttonPreskocit {
    position:absolute;
    bottom:30px;
    right:350px;
    display: inline-block;
    text-align: center;
    padding: 12px 80px 12px 80px;
    border-radius: 100px;
    background:white;
    font: bold 25px "Arvo", serif;
    color: rgba(63, 179, 157, 1);
    text-decoration: none;
    text-transform: uppercase;
    border:0;
}
.buttonPreskocit:hover,
.buttonPreskocit:focus {
    background: #720000;
    background: -moz-linear-gradient(top, #720000, #460000);
    background: linear-gradient(to bottom, #720000, #460000);
    color: #ffffff;
    text-decoration: none;
}
</style>