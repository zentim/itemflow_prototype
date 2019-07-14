<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex xs12 sm5 offset-sm1>
        <div>
          <div>
            <v-card color="primary" class="white--text">
              <v-layout row wrap>
                <v-flex xs12 sm12 md5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="300px"
                    contain
                    class="mx-3"
                  ></v-img>
                </v-flex>
                <v-flex xs12 sm12 md7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">User Name</div>
                      <div class="mt-2 mx-5">
                        OOXXOOXX
                        <v-divider light></v-divider>
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">E-mail</div>
                      <div class="mt-2 mx-5">
                        OOXXOOXX@gmail.com
                        <v-divider light></v-divider>
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </div>
          <div class="mt-5">
            <v-btn block outline large color="primary" dark>Import</v-btn>
          </div>
          <div class="mt-3">
            <v-btn block outline large color="primary" dark>Export</v-btn>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6>
        <div style="width: 80%; margin: 0 auto">
          <div class="display-1">You've got:</div>
          <div class="headline mt-2 mx-5 px-5">XXXXXX Items</div>
          <div class="headline mt-2 mx-5 px-5">XXXXXX Flows</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({

  })
}
</script>
