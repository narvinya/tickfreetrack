<template>
  <div>
    <h2>Zadat novy vyskyt klistete</h2>
    <div class="formular1">
      <label class="popisek">
        Kdo kliste prenasel:
        <input type="text" v-model="prenasec" class="policko" />
      </label>
     
      <label class="popisek">
        Popis vyskytu:
        <textarea
          class="policko"
          v-model="message"
          maxlength="880"  cols="45" rows="6" wrap="hard"
          placeholder="vlozte poznamku, pokud by mohla byt uzitecna pro dalsi uzivatele. dekujeme"
        ></textarea>

        

      </label>
      
      <label class="popisek">Datum nalezu:
        <input type="date" v-model="datum" class="policko" />
      </label>
      
    </div>
  </div>
</template>

<script>


export default {
  components:{
    
  },
  data() {
    return {
      prenasec: " ",
      message: "",
      datum: "2.3.2019"
    };
  }
};
</script>

<style scoped>
.policko {
  padding: 10px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-family: "Arvo", serif;
  font-size: 18px;
}
.popisek {
  margin: 0;
  padding: 10px 20px;
  font-family: "Arvo", serif;
  font-size: 18px;
  color: rgb(24, 54, 54);
}
.formular1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 50%;
}
</style>