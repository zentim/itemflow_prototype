<template>
  <v-layout row wrap>
    <!-- left -->
    <v-flex d-flex xs1>
      <!-- sidebar -->
      <div style="text-align:center">
        <v-btn outline color="info" class="text-none mt-0">
          <v-icon dark>view_headline</v-icon>
        </v-btn>
        <v-btn outline color="info" class="text-none">Item</v-btn>
        <v-btn outline color="info" class="text-none">Flow</v-btn>
        <v-btn outline color="info" class="text-none">Tag</v-btn>
        <v-btn outline color="error" class="text-none">Delete</v-btn>
        <v-btn outline color="info" class="text-none">+Favorite</v-btn>
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
            <!-- outline -->
            <v-flex d-flex xs12>
              <v-list two-line>
                <template v-for="(item, index) in items">
                  <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                      <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>

                      <v-icon v-else color="yellow darken-2">star</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                </template>
              </v-list>
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
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'ItemFlow',
  components: {
    'tinymce-editor': Editor
  },
  data: () => ({
    type: 'flow',
    title: '',
    outline: '',
    content: '',
    selected: [2],
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  })
}
</script>

<style>
.tox .tox-notification--in {
  display: none !important;
}
</style>
