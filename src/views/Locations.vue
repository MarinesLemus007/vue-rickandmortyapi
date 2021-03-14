<template>

    <v-container>
      <v-row class="justify-center mt-5"  dense>
        <v-col v-for="(locations, index) in arrayLocations" :key="index" cols="12" sm="6" md="6" lg="4">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title>
             <h5>{{locations.dimension}}</h5>
            </v-card-title>

            <v-card-subtitle>
                <ul style="font-size: 0.9em">
                    <li>Name: {{locations.name}}</li>
                    <li>Residents: {{locations.residents.length}}</li>
                    <li>Type: {{locations.type}}</li>
                </ul>
           </v-card-subtitle>

          </v-card>
        </v-col>

        <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn v-if="numPage > 1" @click="getCharacter(numPage = numPage - 1)" text color="orange">
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

        <v-btn v-if="numPage <= 5" @click="getCharacter(numPage = numPage + 1)" text color="orange">
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
import axios from 'axios';

  export default {

    data: () => ({
        arrayLocations: [],
        numPage:1,
    }),
    created(){
    this.getCharacter(this.numPage)
  },
  methods:{
    getCharacter(num) {
    const urlApiCharacter = `https://rickandmortyapi.com/api/location/?page=${num}`

    axios
      .get(urlApiCharacter)
      .then(response =>
        (this.arrayLocations = response.data.results)
      )

    this.scrollTop()
  },
    scrollTop(){
    window.scrollTo(0, 0);
  },
  }
}
</script>