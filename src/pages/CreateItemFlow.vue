<template>
  <v-layout row wrap>
    <!-- left -->
    <v-flex d-flex xs1>
      <!-- sidebar -->
      <div>
        <v-btn outline color="info" class="text-none">
          <v-icon dark>view_headline</v-icon>
        </v-btn>
        <v-btn outline color="info" class="text-none">Item</v-btn>
        <v-btn outline color="info" class="text-none">Flow</v-btn>
        <v-btn outline color="info" class="text-none">Tag</v-btn>
        <v-btn outline color="error" class="text-none">Delete</v-btn>
      </div>
    </v-flex>
    <!-- center -->
    <v-flex xs10>
      <v-layout row wrap>
        <!-- title -->
        <v-flex d-flex xs12>
          <v-text-field label="Title" solo outline flat hide-details></v-text-field>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <!-- outline -->
            <v-flex d-flex xs2>
              <v-card color="indigo" dark>
                <v-card-text>one</v-card-text>
              </v-card>
            </v-flex>
            <!-- content -->
            <v-flex d-flex xs10>
              <v-card color="indigo" dark>
                <v-card-text>one</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- right -->
    <v-flex d-flex xs1>
      <v-card color="blue lighten-2" dark>
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateItemFlow',
  data: () => ({

  })
}
</script>

<style>
</style>
