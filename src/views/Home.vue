<template>
    <div>

    <v-container>
        <v-row class="mt-5" >
            <v-col>
                <div class="xs-column text-xs-align-center d-md-flex justify-center">
                    <img
                    style="max-width: 300px; height: auto;"
                    src="../assets/img_rickandmorty_text.png"
                    >
                
                    <img
                    style="max-width: 300px; height: auto;"
                    src="../assets/img_rickandmorty.png"
                    >
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="xs-column text-xs-align-center d-sm-flex align-center justify-center">
                    <h1 class="white--text">See all about:</h1>

                    <v-btn class="mx-2" to="/Characters" color="pink" dark small>
                        Characters
                    </v-btn>

                    <v-btn class="mr-2" to="/Locations" color="pink" dark small>
                        Locations
                    </v-btn>

                    <v-btn class="mt-xxs" to="/Episodes" color="pink" dark small>
                        Episodes
                    </v-btn>
                </div>

            </v-col>
        </v-row>
    </v-container>

    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
    })
}
</script>

<style>
@media only screen and (max-width: 960px) {
    .text-xs-align-center{
        text-align:center
    }
}

@media only screen and (max-width: 350px) {
    .mt-xxs{
        margin-top: 10px;
    }
}
</style>