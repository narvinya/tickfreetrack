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
  max-width: 50px;
  display:block;
  float:left;
  top:12px;
  right:80%;
}

@media (min-width: 600px) {

  .ikona {
    max-width: 60px;
    top: 45px;
    right: 60px;
    padding-top:0;
    position:absolute;
  }
}
</style>