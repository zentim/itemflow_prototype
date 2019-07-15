<template>
  <v-app style="background-color: white">
    <v-toolbar flat dense style="background-color: white; border-bottom: 1px solid #e8e8e8">
      <!-- logo -->
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
          class="display-1 font-weight-bold text-none"
        >ItemFlow</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn icon flat to="/">
          <v-icon dark>home</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <!-- search -->
      <div
        style="width: 600px; border: 1px solid #e8e8e8"
        v-show="$route.name === 'Home' || $route.name === 'Favorite' || $route.name === 'Trash'"
      >
        <v-text-field
          v-model="searchInput"
          solo
          label="Search..."
          clearable
          prepend-inner-icon="search"
          flat
        ></v-text-field>
      </div>

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <!-- nav -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="new">
          <v-icon dark>add</v-icon>New Card
        </v-btn>
        <v-btn flat to="/">
          <v-icon dark>view_carousel</v-icon>All Cards
        </v-btn>
        <v-btn flat to="favorite">
          <v-icon dark>favorite</v-icon>Favorite
        </v-btn>
        <v-btn flat to="trash">
          <v-icon dark>delete</v-icon>Trash
        </v-btn>
        <v-btn flat to="account">
          <v-icon dark>account_box</v-icon>Account
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-btn icon flat to="new">
          <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn icon flat to="/">
          <v-icon dark>view_carousel</v-icon>
        </v-btn>
        <v-btn icon flat to="favorite">
          <v-icon dark>favorite</v-icon>
        </v-btn>
        <v-btn icon flat to="trash">
          <v-icon dark>delete</v-icon>
        </v-btn>
        <v-btn icon flat to="account">
          <v-icon dark>account_box</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- main -->
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
<style>
.v-input__slot {
  margin-bottom: 0;
}
</style>
