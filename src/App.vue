<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>itemflow</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="searchInput"
        solo
        label="Search..."
        clearable
        prepend-inner-icon="search"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon dark>add</v-icon>New Card
        </v-btn>
        <v-btn flat>
          <v-icon dark>view_carousel</v-icon>All Cards
        </v-btn>
        <v-btn flat>
          <v-icon dark>star</v-icon>Favorite
        </v-btn>
        <v-btn flat>
          <v-icon dark>delete</v-icon>Trash
        </v-btn>
        <v-btn flat>
          <v-icon dark>account_box</v-icon>Account
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      searchInput: ''
    }
  }
}
</script>
