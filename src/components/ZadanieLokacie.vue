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
          maxlength="880"
          cols="45"
          rows="6"
          wrap="hard"
          placeholder="vlozte poznamku, pokud by mohla byt uzitecna pro dalsi uzivatele. dekujeme"
        ></textarea>
      </label>

      <label class="popisek">
        Datum nalezu:
        <input type="date" :value="datum && datum.toISOString().split('T')[0]"
                   @input="datum = $event.target.valueAsDate" class="policko">
       
      </label>

      <button @click="ulozitKliste">Ulozit kliste</button>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";

export default {
  components: {},
  data() {
    return {
      prenasec: " ",
      message: "",
      datum: new Date(),
    };
  },
  methods: {
    ulozitKliste() {
      console.log("neco")
      this.$store.commit("ulozitKliste", {
        coordinates: latLng(49.185775, 16.625585),
        note: this.message,
        prenasec: this.prenasec,
        datum: this.datum
      }
      );
      this.prenasec = "";
      this.message= "";
      this.datum = "";
    }
  }
};
</script>

<style scoped>
.policko {
  padding: 10px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  
  font-size: 18px;
}
.popisek {
  margin: 0;
  padding: 10px 20px;
  
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