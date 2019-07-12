<template>
  <v-container grid-list-xl>
    <!-- action toolbar -->
    <v-slide-y-transition>
      <v-toolbar flat dense fixed v-show="showActionToolbar">
        <v-btn outline fab small flat @click.prevent="showActionToolbar = false">
          <v-icon dark>clear</v-icon>
        </v-btn>
      </v-toolbar>
    </v-slide-y-transition>
    <!-- cards -->
    <v-layout wrap>
      <v-flex
        v-for="card in cards"
        :key="card.id"
        @mouseover="cardHover = card.id"
        @mouseleave="cardHover = false"
        xs3
      >
        <v-badge left overlap v-model="cardHover">
          <template v-slot:badge>
            <v-icon
              dark
              small
              @click.prevent="showActionToolbar = true"
              v-show="cardHover && cardHover === card.id"
            >done</v-icon>
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
      { id: 1, title: 'Pre-fab homes Pre-fab homes Pre-fab homes', outline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true },
      { id: 2, title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { id: 3, title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false },
      { id: 4, title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false },
      { id: 5, title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { id: 6, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now() },
      { id: 7, title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now() },
      { id: 8, title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now() },
      { id: 9, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now() },
      { id: 10, title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now() },
      { id: 11, title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now() },
      { id: 12, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: true, deleteAt: Date.now() }
    ],
    cards: [],
    showActionToolbar: false,
    cardHover: false
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
