<template>
  <router-link to="/odstranenie" class="bittenButton">Bitten by a tick</router-link>
</template>

<script>
export default {};
</script>

<style>
.bittenButton {
  display: inline-block;
  padding: 12px 20px 12px 20px;
  border-radius: 100px;
  background: -moz-linear-gradient(top, #ff5959, #b62f2f);
  background: linear-gradient(to bottom, #ff5959, #b62f2f);
  font: 14px "Arvo", serif;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  max-width: 150px;
}
.bittenButton:hover,
.bittenButton:focus {
  background: #720000;
  background: -moz-linear-gradient(top, #720000, #460000);
  background: linear-gradient(to bottom, #720000, #460000);
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 599px) {
  .bittenButton {
    position: absolute;
    left: calc(50% - 85px);
    top: 85%;
  }
}

@media (min-width: 600px) {
  .bittenButton {
    position: absolute;
    bottom: 150px;
    left: 30px;
    text-align: center;
    padding: 12px 30px 12px 30px;
    font: 17px "Arvo", serif;
    max-width: none;
  }
}
</style>