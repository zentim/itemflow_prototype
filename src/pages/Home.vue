<template>
  <v-container grid-list-xl>
    <!-- action toolbar -->
    <v-slide-y-transition>
      <v-toolbar
        flat
        dense
        fixed
        v-show="showActionToolbar"
        style="background-color: white; border-bottom: 1px solid #e8e8e8"
      >
        <v-toolbar-title>
          <v-btn fab flat @click.prevent="clearSelected">
            <v-icon>clear</v-icon>
          </v-btn>
        </v-toolbar-title>
        <h2 class="hidden-sm-and-down">{{ selectedList.length }} Selected</h2>
        <h2 class="hidden-md-and-up">{{ selectedList.length }}</h2>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn outline color="info" class="text-none" @click="selectAllCard">Select All</v-btn>
          <v-btn outline color="info" class="text-none" @click="addFavoriteSelectedCard">+Favorite</v-btn>
          <v-btn outline color="info" class="text-none">Export</v-btn>

          <!-- delete dialog -->
          <v-dialog v-model="deleteDialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn
                outline
                color="error darken-1"
                v-on="on"
                class="text-none"
              >{{ $route.name !== 'Trash' ? 'Delete' : 'Revert'}}</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">{{ $route.name !== 'Trash' ? 'Delete?' : 'Revert?'}}</v-card-title>
              <v-card-text>Are you sure?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="error darken-1"
                  flat
                  @click="deleteSelectedCard(null)"
                >{{ $route.name !== 'Trash' ? 'Delete' : 'Revert'}} {{ selectedList.length }}</v-btn>
                <v-btn
                  color="grey darken-1"
                  flat
                  @click="deleteDialog = false"
                  class="text-none"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar-items>
      </v-toolbar>
    </v-slide-y-transition>

    <!-- main -->
    <v-layout wrap>
      <!-- sort -->
      <v-flex xs12>
        <v-toolbar flat dense color="white">
          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn flat icon @click="toggleGrid">
              <v-icon :color="cardGrid === 'xs6 sm3' ? '#e8e8e8' : '' ">format_align_right</v-icon>
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
          <router-link :to="'/' + card.id" :key="card.id" tag="span" style="cursor: pointer">
            <v-card
              width="100%"
              @click="toggleCardSelected(card, index)"
              :flat="!card.cardHover"
              style="border: 1px solid #e8e8e8; border-radius: 8px"
            >
              <v-card-title primary-title>
                <div style="height: 100px; width: 100%">
                  <div class="headline one-line-overflow-hidden">{{ card.title }}</div>
                  <v-divider class="mt-1 mb-3"></v-divider>
                  <div class="multi-line-overflow-hidden">{{ card.description }}</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click.stop="deleteSelectedCard(card)"
                  v-show="card.cardHover && !showActionToolbar"
                >
                  <v-icon>{{ $route.name !== 'Trash' ? 'delete' : 'restore_from_trash' }}</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click.stop="card.favorite = !card.favorite"
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
      { id: '1', title: 'Z Pre-fab homes Pre-fab homes Pre-fab homes', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true, cardHover: false, isSelected: false },
      { id: '2', title: 'Favorite road trips', description: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '3', title: 'Best airlines', description: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '4', title: 'Pre-fab homes', description: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '5', title: 'Gavorite road trips', description: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, cardHover: false, isSelected: false },
      { id: '6', title: 'DELETE Best airlines', description: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '7', title: 'KELETE Pre-fab homes', description: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '8', title: 'QELETE Favorite road trips', description: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '9', title: 'WELETE Best airlines', description: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '10', title: 'JELETE Pre-fab homes', description: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '11', title: 'AELETE Favorite road trips', description: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false, deleteAt: Date.now(), cardHover: false, isSelected: false },
      { id: '12', title: 'ZELETE Best airlines', description: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: true, deleteAt: Date.now(), cardHover: false, isSelected: false }
    ],
    cards: [],
    showActionToolbar: false,
    selectedList: [],
    tmpCards: [],
    cardGrid: 'xs6 sm3',
    // delete dialog
    deleteDialog: false
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
    selectAllCard () {
      this.selectedList = []
      this.cards.forEach(card => {
        this.selectedList.push(card.id)
        card.isSelected = true
      })
    },
    addFavoriteSelectedCard () {
      this.selectedList.forEach(id => {
        let foundIndex = this.cards.findIndex(card => {
          return card.id === id
        })
        this.cards[foundIndex].favorite = true
      })
      this.clearSelected()
    },
    clearSelected () {
      this.showActionToolbar = false
      this.cards.forEach(element => {
        element.isSelected = false
      })
      this.selectedList = []
    },
    toggleGrid () {
      this.cardGrid = this.cardGrid === 'xs6 sm3' ? 'xs12' : 'xs6 sm3'
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
    },
    deleteSelectedCard (card = null) {
      if (card) {
        this.selectedList.push(card.id)
      }

      if (this.$route.name === 'Trash') {
        this.selectedList.forEach(id => {
          let foundIndex = this.cards.findIndex(card => {
            return card.id === id
          })
          this.cards[foundIndex].deleteAt = null
        })
      } else {
        this.selectedList.forEach(id => {
          let foundIndex = this.cards.findIndex(card => {
            return card.id === id
          })
          this.cards[foundIndex].deleteAt = Date.now()
        })
      }

      this.clearSelected()
      this.showCards()
      this.deleteDialog = false
    }
  }
}
</script>
