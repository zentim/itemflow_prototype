<template>
  <v-container grid-list-xl>
    <!-- action toolbar -->
    <v-slide-y-transition>
      <v-toolbar flat dense fixed v-show="showActionToolbar">
        <v-toolbar-title>
          <v-btn outline fab small flat @click.prevent="clearSelected">
            <v-icon dark>clear</v-icon>
          </v-btn>
        </v-toolbar-title>
        <h2>{{ selectedList.length }}</h2>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn outline color="info" class="text-none">Export</v-btn>
          <v-btn outline color="error" class="text-none">Delete</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-slide-y-transition>
    <!-- cards -->
    <v-layout wrap>
      <v-flex
        v-for="(card, index) in cards"
        :key="card.id"
        @mouseover="card.cardHover = true"
        @mouseleave="card.cardHover = false"
        xs3
      >
        <v-badge
          :color="card.isSelected ? 'primary' : '#e8e8e8'"
          left
          overlap
          :value="card.cardHover || card.isSelected"
        >
          <template v-slot:badge>
            <v-icon
              :dark="card.isSelected"
              small
              @click.prevent="toggleCardSelected(card, index)"
              v-show="card.cardHover || card.isSelected"
            >done</v-icon>
          </template>
          <router-link :to="'/' + card.id" :key="card.id" tag="span" style="cursor: pointer">
            <v-card width="275px" @click="toggleCardSelected(card, index)">
              <v-card-title primary-title>
                <div style="height: 100px; width: 100%">
                  <div class="headline one-line-overflow-hidden">{{ card.title }}</div>
                  <v-divider class="mt-1 mb-3"></v-divider>
                  <div class="multi-line-overflow-hidden">{{ card.outline }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon v-show="card.cardHover">
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon v-show="card.cardHover">
                  <v-icon>share</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click.prevent="card.favorite = !card.favorite"
                  v-show="card.favorite || card.cardHover"
                >
                  <v-icon :color="card.favorite ? 'primary' : ''">favorite</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
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
      { id: 1, title: 'Pre-fab homes Pre-fab homes Pre-fab homes', outline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true, cardHover: false, isSelected: false },
      { id: 2, title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: 3, title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: 4, title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: 5, title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: 6, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 7, title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 8, title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 9, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 10, title: 'DELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 11, title: 'DELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: 12, title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: true, deleteAt: Date.now(), cardHover: false, isSelected: false }
    ],
    cards: [],
    showActionToolbar: false,
    selectedList: []
  }),
  created () {
    this.showCards()
  },
  watch: {
    $route () {
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
    },
    toggleCardSelected (card, index) {
      if (this.selectedList.length > 0) {
        event.preventDefault()
        event.stopPropagation()
      }

      this.showActionToolbar = true

      let foundIndex = this.selectedList.findIndex(element => {
        return element === card.id
      })

      if (foundIndex > -1) {
        this.selectedList = this.selectedList.filter(element => {
          return element !== card.id
        })
        this.cards[index].isSelected = false
      } else {
        this.selectedList.push(card.id)
        this.cards[index].isSelected = true
      }

      if (this.selectedList.length === 0) {
        this.showActionToolbar = false
      }
    },
    clearSelected () {
      this.showActionToolbar = false
      this.cards.forEach(element => {
        element.isSelected = false
      })
      this.selectedList = []
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
.v-card__actions {
  height: 52px;
}
</style>
