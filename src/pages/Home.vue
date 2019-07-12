<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex v-for="card in cards" :key="card.title" xs3>
        <v-card to="{ card.title }">
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
              <v-icon :color="card.favorite ? 'yellow darken-2' : ''">favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    cards: [
      { title: 'Pre-fab homes Pre-fab homes Pre-fab homes', outline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit distinctio, eos, labore inventore molestias recusandae quae velit quod ea est nulla! Et minima quae quo dolor quos perferendis, accusantium voluptatum.', favorite: true },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false },
      { title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false },
      { title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false },
      { title: 'Pre-fab homes', outline: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', favorite: false },
      { title: 'Favorite road trips', outline: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', favorite: false },
      { title: 'Best airlines', outline: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', favorite: false }
    ]
  })
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
