<template>

  <router-link to="/lokacia" class="buttonDalej">Ďalej</router-link>
 
</template>

<script>
export default {};
</script>

<style>
.buttonDalej {
  margin: 15px 0 15px calc(50% - 60px);
  text-align: center;
  min-width: 80px;
  display: inline-block;
  padding: 12px 20px 12px 20px;
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
  font: 14px "Arvo", serif;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
}

.buttonDalej:hover,
.buttonDalej:focus {
  background: #720000;
  background: -moz-linear-gradient(top, #720000, #460000);
  background: linear-gradient(to bottom, #720000, #460000);
  color: #ffffff;
  text-decoration: none;
}

@media (min-width: 600px) {
  .buttonDalej {
    margin: 20px 0 0 35%;
  }
}
</style>