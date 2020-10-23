<template>
  <div>
    <externo />
    <div class="container">
      <div class="row" id="titulo">
        <div class="col-12">
          <h3 class="text-center">Listagem de numeros:</h3>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-2" id="azul" :key="item" v-for="item in numbersArray">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import externo from "./link";
import axios from "axios";
export default {
  name: "grid",
  components: {
    externo,
  },
  data() {
    return {
      numbersArray: [],
    };
  },
  created: function numbers() {
    axios.get("http://localhost/entrevista/axios/").then((response) => {
      /*exported app*/
      this.numbersArray = response.data;
    });
  },
};
</script>
<style >
#titulo {
  margin-top: 1rem;
}

#azul {
  background: #add8e6;
   height: 5em;
  width: 1em;
  margin: 1px;
}

</style>