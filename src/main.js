import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Editor from '@tinymce/tinymce-vue'

Vue.config.productionTip = false

Vue.component('tinymce-editor', Editor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
