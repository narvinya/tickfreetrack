<template>
  <p class="uvodnyText">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit
    in vulputate velit esse molestie consequat.
  </p>
</template>

<script>
export default {};
</script>

<style>
.uvodnyText {
  text-align: left;
  position: absolute;
  font-family: "Arvo", serif;
  font-size: 15px;
  top: 110px;
  margin-left: 15px;
  margin-right: 15px;
}

@media (min-width: 600px) {
  .uvodnyText {
    text-align: left;
    max-width: 250px;
    left: 30px;
    bottom: 125px;
    top:175px;
    font-size: 16px;
    margin-right: 0;
    margin-left: 0;
    position: absolute;
    padding-top: 30px;
  }
}

@media (min-width: 1000px) {
  .uvodnyText {
    left: 50px;
    font-size: 18px;
  }
}
</style>