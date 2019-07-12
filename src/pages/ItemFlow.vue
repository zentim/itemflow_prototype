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
          <v-layout row wrap>
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
              <tinymce-editor :init="{plugins: 'wordcount'}"></tinymce-editor>
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
    title: '',
    outline: '',
    content: ''
  })
}
</script>

<style>
.tox .tox-notification--in {
  display: none !important;
}
</style>
