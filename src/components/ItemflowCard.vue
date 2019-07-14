<template>
  <router-link :to="'/' + card.id" :key="card.id" tag="span" style="cursor: pointer">
    <v-card width="100%" @click="toggleCardSelected(card, index)">
      <v-card-title primary-title>
        <div style="height: 100px; width: 100%">
          <div class="headline one-line-overflow-hidden">{{ card.title }}</div>
          <v-divider class="mt-1 mb-3"></v-divider>
          <div class="multi-line-overflow-hidden">{{ card.outline }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
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
</template>

<script>
export default {
  name: 'ItemflowCard',
  props: {
    card: {
      type: Object,
      required: true
    },
    index: {
      type: String
    }
  },
  data: () => ({

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
.v-card__actions {
  height: 52px;
}
</style>