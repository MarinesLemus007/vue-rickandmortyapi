<template>
  <v-container>
      <v-row class="justify-center mt-5"  dense>
          <v-col v-for="(episodes, index) in arrayResponseApi" :key="index" cols="12" sm="6" md="6" lg="4">
              
            <v-card
                elevation="5"
                color="#826082"
                dark
            >

                <v-card-title>
                    <h4>Episode: {{episodes.episode}}</h4>
                </v-card-title>

                <v-card-text>
                    <h5>Name: {{episodes.name}}</h5>
                    <h5>Characters: {{episodes.characters.length}}</h5>
                </v-card-text>
            
            </v-card>

          </v-col>

          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn v-if="numPage > 1" @click="previousPage(), getApiRest(fragmentUrl)" text color="orange">
            <v-icon
            small
            left
            color="orange"
            >
                mdi-chevron-left
            </v-icon>
            previous
            </v-btn>

        <div class="px-5 py-3 mx-3 secondary rounded-circle d-inline-block white--text">
          {{numPage}}
        </div>

        <v-btn v-if="numPage <= 2" @click="nextPage(), getApiRest(fragmentUrl)" text color="orange">
          Next
          <v-icon
          small
          right
          color="orange"
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from "vuex";

export default {
  name: "Episodes",

  data: () => ({
    fragmentUrl: "episode",
  }),
  computed: {
    ...mapState([
      "arrayResponseApi",
      "numPage"
    ]),
  },
  methods: {
    ...mapMutations([
      "getApiRest",
      "nextPage",
      "previousPage",
      "resetNumPage"
    ]),
  },
  mounted() {
    this.getApiRest(this.fragmentUrl);
  },
  beforeDestroy(){
    this.resetNumPage()
  }
};
</script>