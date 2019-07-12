<template>
  <v-container grid-list-xl>
    <v-toolbar flat dense fixed v-show="showToolbarAction">
      <v-btn outline fab small flat @click.prevent="showToolbarAction = false">
        <v-icon dark>clear</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout wrap>
      <v-flex v-for="card in cards" :key="card.title" xs3>
        <v-badge left overlap>
          <template v-slot:badge>
            <v-icon dark small @click.prevent="showToolbarAction = true">done</v-icon>
          </template>
          <v-card :to="card.title" width="275px">
            <v-card-title primary-title>
              <div style="height: 100px; width: 100%">
                <div class="headline one-line-overflow-hidden">{{ card.title }}</div>
                <v-divider class="mt-1 mb-3"></v-divider>
                <div class="multi-line-overflow-hidden">{{ card.outline }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click.prevent="card.favorite = !card.favorite">
                <v-icon :color="card.favorite ? 'primary' : ''">favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-badge>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    source: [
      { title: 'Pre-fab homes Pre-fab homes Pre-fab homes', outline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false },
      { title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now() },
      { title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: true, deleteAt: Date.now() }
    ],
    cards: [],
    showToolbarAction: true
  }),
  created () {
    this.showCards()
  },
  watch: {
    $route (to, from) {
      this.showCards()
    }
  },
  methods: {
    showCards () {
      if (this.$route.name === 'Home') {
        this.cards = this.source.filter(card => !card.deleteAt)
      }
      if (this.$route.name === 'Favorite') {
        this.cards = this.source.filter(card => card.favorite && !card.deleteAt)
      }
      if (this.$route.name === 'Trash') {
        this.cards = this.source.filter(card => !!card.deleteAt)
      }
    }
  }

}
</script>

<style scoped>
.one-line-overflow-hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.multi-line-overflow-hidden {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
