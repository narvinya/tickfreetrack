<template>
  <router-link to="/noveKliste" class="pridatButton">Pridat novy vyskyt klistete</router-link>
</template>

<script>
export default {

}
</script>

<style>
.pridatButton {
  text-align: center;
  min-width: 80px;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 100px;
  background: -moz-linear-gradient(
    top,
    rgba(63, 179, 157, 1),
    rgba(38, 109, 96)
  );
  background: linear-gradient(
    to bottom,
    rgba(63, 179, 157, 1),
    rgb(38, 109, 96)
  );
  font: 14px 'Roboto Slab', serif;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
}

.pridatButton:hover,
.pridatButton:focus {
  background: #720000;
  background: -moz-linear-gradient(top, #720000, #460000);
  background: linear-gradient(to bottom, #720000, #460000);
  color: #ffffff;
  text-decoration: none;
}

@media (min-width: 600px) {
 
}
</style>