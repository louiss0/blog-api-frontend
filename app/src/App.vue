<template>
  <div id="app">
    <navbar/>
    <router-view />
  </div>
</template>

<style lang="scss">
@use "./scss/abstracts/index" as *;

@use "./scss/base/index" as *;


</style>


<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'

export default Vue.extend({
  name: "App",
  components:{
    Navbar

  }
})
</script>