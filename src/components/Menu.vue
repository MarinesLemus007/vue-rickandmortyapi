<template>
  <div>
    <v-app-bar color="pink" dense>
      <v-app-bar-nav-icon
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Rick & Morty</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.title === 'Home' ? '/' : item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home" },
      { title: "Characters", icon: "mdi-account-group" },
      { title: "Locations", icon: "mdi-earth" },
      { title: "Episodes", icon: "mdi-movie-open" },
    ],
  })
}
</script>
