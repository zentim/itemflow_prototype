<template>
  <v-layout row wrap>
    <!-- left -->
    <v-flex d-flex xs1>
      <v-card color="purple" dark>
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
    <!-- center -->
    <v-flex d-flex xs10>
      <v-layout row wrap>
        <!-- title -->
        <v-flex d-flex xs12>
          <v-card color="indigo" dark>
            <v-card-text>one</v-card-text>
          </v-card>
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
