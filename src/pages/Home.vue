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
    <v-layout wrap>
      <!-- sort -->
      <v-flex xs12>
        <v-toolbar flat dense color="white">
          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn flat icon @click="toggleGrid">
              <v-icon :color="cardGrid === 'xs3' ? '#e8e8e8' : '' ">format_align_right</v-icon>
            </v-btn>
            <v-btn flat icon @click="sortByTitle">
              <v-icon :color="tmpCards.length === 0 ? '#e8e8e8' : '' ">sort_by_alpha</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
      <!-- cards -->
      <v-flex
        v-for="(card, index) in cards"
        :key="card.id"
        @mouseover="card.cardHover = true"
        @mouseleave="card.cardHover = false"
        :class="cardGrid"
      >
        <v-badge
          :color="card.isSelected ? 'primary' : '#e8e8e8'"
          left
          overlap
          :value="card.cardHover || card.isSelected"
          style="width: 100%"
        >
          <template v-slot:badge>
            <v-icon
              :dark="card.isSelected"
              small
              @click.prevent="toggleCardSelected(card, index)"
              v-show="card.cardHover || card.isSelected"
            >done</v-icon>
          </template>
          <ItemflowCard :card="card" :index="index"></ItemflowCard>
        </v-badge>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ItemflowCard from '../components/ItemflowCard'
export default {
  name: 'Home',
  components: {
    'ItemflowCard': ItemflowCard
  },
  data: () => ({
    source: [
      { id: '1', title: 'Z Pre-fab homes Pre-fab homes Pre-fab homes', outline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true, cardHover: false, isSelected: false },
      { id: '2', title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '3', title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '4', title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '5', title: 'Gavorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '6', title: 'DELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '7', title: 'KELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '8', title: 'QELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '9', title: 'WELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '10', title: 'JELETE Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '11', title: 'AELETE Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '12', title: 'ZELETE Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: true, deleteAt: Date.now(), cardHover: false, isSelected: false }
    ],
    cards: [],
    showActionToolbar: false,
    selectedList: [],
    toggle_multiple: [],
    tmpCards: [],
    cardGrid: 'xs3'
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
    },
    toggleGrid () {
      this.cardGrid = this.cardGrid === 'xs3' ? 'xs12' : 'xs3'
    },
    sortByTitle () {
      if (this.tmpCards.length === 0) {
        this.tmpCards = this.cards.slice(0, this.cards.length)
        this.cards = this.cards.sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        })
      } else {
        this.cards = this.tmpCards.slice(0, this.cards.length)
        this.tmpCards = []
      }
    }
  }
}
</script>
