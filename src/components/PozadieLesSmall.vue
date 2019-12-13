<template>
  <div class="PozadieLesSmall"></div>
</template>

<script>
export default {

}
</script>

<style>
.PozadieLesSmall {
  background-color: white;
  max-width: 1200px;
  min-height: 700px;
  box-shadow: 5px 10px;
  -webkit-box-shadow: 0px 0px 39px 35px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 0px 39px 35px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 0px 39px 35px rgba(0, 0, 0, 0.55);
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
}

@media (min-width: 600px) {
  .PozadieLesSmall {
    max-width: 1200px;
    margin-top: 100px;
    padding: 50px 50px 50px 25px;
    background-image: url(../../public/images/BackgroundLesSmallTablet.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

@media (min-width:1000px) {
.PozadieLesSmall {
    background-image: url(../../public/images/BackgroundLesSmall.png);
}
}

</style>