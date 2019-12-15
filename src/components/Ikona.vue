<template>
  <img class="ikona" src="../../public/images/Logo.png" />
</template>

<script>
export default {

}
</script>

<style>
.ikona {
  position:absolute;
  max-width: 40px;
  display:block;
  float:left;
  top:15px;
  right:82%;
}

@media (min-width: 600px) {

  .ikona {
    max-width: 60px;
    top: 45px;
    left: 60px;
    padding-top:0;
    position:absolute;
  }
}
</style>