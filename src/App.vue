<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          xs="12" sm="6" md="4"
          v-for="(character, index) in arrayCharacter"
          :key="index"
         >
          <v-card
          class="mx-auto mb-5"
          max-width="400">

            <v-img
              class="white--text align-end"
              height="200px"
              :src="character.image"
            >
              <v-card-title>{{character.name}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{character.origin.name}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{character.species}}</div>

              <div>{{character.status}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>
                Ver más
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-main>

    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import axios from "axios";

export default {
  name: "App",

  // components: {
  //   HelloWorld,
  // },

  data() {
    return {
      arrayCharacter:[]
    };
  },
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => 
        (this.arrayCharacter = response.data.results)
      )
  },
};
</script>
