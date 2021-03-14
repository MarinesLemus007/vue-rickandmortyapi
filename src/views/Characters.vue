<template>
  <div>

    <v-container>
      <v-row class="mt-5">
        <v-col
          xs="12" sm="6" md="3"
          v-for="(character, index) in arrayCharacter"
          :key="index"
         >

          <v-card
          class="mx-auto mb-5"
          max-width="300"
          height="380"
          color="#606268"
          elevation="6"
          >

            <v-img
              class="white--text align-end"
              height="200px"
              :src="character.image"
              light
            >
            </v-img>


            <v-card-text class="text--primary">

              <div class="d-flex">
                <h3 class="white--text">{{character.name}}</h3>

                <v-icon
                v-if="character.gender === 'Male'"
                color="blue lighten-1"
                right
                small
                >
                mdi-gender-male
                </v-icon>

                <v-icon
                v-if="character.gender === 'unknown'"
                color="gray"
                right
                small
                >
                mdi-gender-male-female
                </v-icon>

                <v-icon
                v-if="character.gender === 'Female'"
                color="pink lighten-2"
                right
                small
                >
                mdi-gender-female
                </v-icon>

              </div>

              <div class="d-flex">

                <v-icon
                  v-if="character.origin.name !== 'unknown'"        
                  color="orange"
                  left
                  small
                >mdi-earth
                </v-icon>

                 <v-icon
                  v-if="character.origin.name === 'unknown'"        
                  color="gray"
                  left
                  small
                >
                mdi-help
                </v-icon>

                <h4>{{character.origin.name}}</h4>

              </div>

            <div class="d-flex">

              <v-icon
                  v-if="character.species === 'Alien'"        
                  color="green"
                  left
                  small
                >
                  mdi-alien
              </v-icon>

              <v-icon
                  v-else        
                  color="yellow lighten-2"
                  left
                  small
                >
                  mdi-account
              </v-icon>

              <h4>{{character.species}}</h4>

            </div>

            <div class="d-flex">

              <v-icon
                  v-if="character.status === 'Dead'"        
                  color="gray"
                  left
                  small
                >
                mdi-heart-off-outline
              </v-icon>

              <v-icon
                  v-if="character.status === 'Alive'"        
                  color="red lighten-2"
                  left
                  small
                >
                mdi-cards-heart
              </v-icon>

              <v-icon
                  v-if="character.status === 'unknown'"        
                  color="gray"
                  left
                  small
                >
                mdi-help
                </v-icon>

              <h4>{{character.status}}</h4>
            </div>

               <v-card-actions>
                <v-btn @click="seeMoreDetails(character.episode)" color="orange" text>
                  See More
                </v-btn>
              </v-card-actions>

            </v-card-text>

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

        <v-btn v-if="numPage <= 33" @click="getCharacter(numPage = numPage + 1)" text color="orange">
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

      <v-dialog width="310" v-model="dialog">
        <v-card color="#606268">

        <v-card-title class="headline grey lighten-2">
          Amount of episodes: {{episode}}
        </v-card-title>

        <v-divider></v-divider>
        
        <v-card-actions class="justify-space-between">

          <v-btn
            color="red lighten-2"
            dark
            @click="dialog = false, episode = null"
          >
             Closed
          </v-btn>
          
          <v-btn
            color="orange"
            outlined
            to ='/Episodes'
          >
            See Episodes
          </v-btn>

        </v-card-actions>

          
        </v-card>
      </v-dialog>

    </v-container>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'Characters',
  components: {
    // HelloWorld
  },

  data() {
    return {
      arrayCharacter:[],
      numPage:1,
      dialog: false,
      episode: null
    };
  },
  created(){
    this.getCharacter(this.numPage)
  },
  methods:{
    getCharacter(num) {
    const urlApiCharacter = `https://rickandmortyapi.com/api/character/?page=${num}`

    axios
      .get(urlApiCharacter)
      .then(response => 
        (this.arrayCharacter = response.data.results)
      )

      this.scrollTop()
  },

  scrollTop(){
    window.scrollTo(0, 0);
  },

  seeMoreDetails(ev){
    this.episode = ev.length
    this.dialog = true
  }

  }
};
</script>