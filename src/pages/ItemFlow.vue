<template>
  <v-layout row wrap>
    <!-- left -->
    <v-flex d-flex xs1>
      <!-- sidebar -->
      <div style="text-align:center">
        <v-btn outline color="info" class="text-none mt-0">
          <v-icon dark>view_headline</v-icon>
        </v-btn>
        <v-btn outline color="info" class="text-none" @click="type='item'">Item</v-btn>
        <v-btn outline color="info" class="text-none" @click="type='flow'">Flow</v-btn>
        <v-btn outline color="info" class="text-none" @click="type='tag'">Tag</v-btn>
        <v-btn outline color="info" class="text-none">+Favorite</v-btn>
        <v-btn outline color="error" class="text-none">Delete</v-btn>
      </div>
    </v-flex>
    <!-- center -->
    <v-flex xs10>
      <v-layout row wrap>
        <!-- title -->
        <v-flex d-flex xs12>
          <v-text-field label="Title..." solo outline flat hide-details></v-text-field>
        </v-flex>
        <v-flex d-flex xs12>
          <!-- type: item -->
          <v-layout row wrap v-show="type === 'item'">
            <!-- outline -->
            <v-flex d-flex xs2>
              <v-textarea
                v-model="outline"
                auto-grow
                outline
                label="Outline..."
                hide-details
                rows="25"
              ></v-textarea>
            </v-flex>
            <!-- content -->
            <v-flex d-flex xs10>
              <tinymce-editor :init="{plugins: 'wordcount', height: '100%'}"></tinymce-editor>
            </v-flex>
          </v-layout>
          <!-- type: flow -->
          <v-layout row wrap v-show="type === 'flow'">
            <v-flex d-flex xs12>
              <v-list two-line>
                <draggable v-model="myArray">
                  <transition-group>
                    <div v-for="(item, index) in items" :key="item.id">
                      <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                        <v-list-tile-content>
                          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                          <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                          <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                          <v-icon
                            v-if="selected.indexOf(index) < 0"
                            color="grey lighten-1"
                          >star_border</v-icon>

                          <v-icon v-else color="yellow darken-2">star</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                    </div>
                  </transition-group>
                </draggable>
              </v-list>
            </v-flex>
          </v-layout>
          <!-- type: tag -->
          <v-layout row wrap v-show="type === 'tag'">
            <!-- tag_from -->
            <v-flex d-flex xs6>
              <v-card>
                <template>
                  <v-toolbar flat dark>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>From</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-combobox
                    v-model="chips_from"
                    :items="chipsItems_from"
                    label="From"
                    chips
                    clearable
                    solo
                    multiple
                    flat
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :selected="data.selected"
                        close
                        @input="remove_chips_from(data.item)"
                        color="primary"
                        outline
                      >
                        <strong>{{ data.item }}</strong>&nbsp;
                      </v-chip>
                    </template>
                  </v-combobox>
                </template>
              </v-card>
            </v-flex>
            <!-- tag_to -->
            <v-flex d-flex xs6>
              <v-card>
                <template>
                  <v-toolbar flat dark>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>To</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-combobox
                    v-model="chips_to"
                    :items="chipsItems_to"
                    label="To"
                    chips
                    clearable
                    solo
                    multiple
                    flat
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :selected="data.selected"
                        close
                        @input="remove_chips_to(data.item)"
                        color="primary"
                        outline
                      >
                        <strong>{{ data.item }}</strong>&nbsp;
                      </v-chip>
                    </template>
                  </v-combobox>
                </template>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- right -->
    <v-flex d-flex xs1>
      <div style="text-align:center">
        <v-btn outline color="info" class="text-none mt-0">
          <v-icon dark>search</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'ItemFlow',
  components: {
    draggable,
  },
  data: () => ({
    type: 'item',
    title: '',
    // item
    outline: '',
    content: '',
    // flow
    selected: [2],
    items: [
      {
        id: '9',
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        id: '10',
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        id: '11',
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        id: '12',
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        id: '13',
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ],
    // tag
    chips_from: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
    chipsItems_from: ['Streaming', 'Eating'],
    chips_to: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
    chipsItems_to: ['Streaming', 'Eating']
  }),
  methods: {
    // flow
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
    // tag
    remove_chips_from (item) {
      this.chips_from.splice(this.chips_from.indexOf(item), 1)
      this.chips_from = [...this.chips_from]
    },
    remove_chips_to (item) {
      this.chips_to.splice(this.chips_to.indexOf(item), 1)
      this.chips_to = [...this.chips_to]
    }
  }
}
</script>

<style>
.tox .tox-notification--in {
  display: none !important;
}
</style>
