<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
          class="display-1 font-weight-bold text-none"
        >ItemFlow</router-link>
      </v-toolbar-title>

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
        <v-btn flat to="new">
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      searchInput: ''
    }
  }
}
</script>
