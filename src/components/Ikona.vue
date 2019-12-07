<template>
  <img class="ikona" src="../../public/images/Logo.png" />
</template>

<script>
export default {

}
</script>

<style>
.ikona {
  max-width: 50px;
  display:block;
  margin-left:15px;
  padding-top:15px;
  float:left;
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