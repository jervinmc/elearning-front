<template>
  <div>
    <v-img src="/images/back.png" class="d-flex justify-center align-center px-16" height="100vh">
    <hero />
    </v-img>
  </div>
</template>

<script>
import About from '../components/home/About.vue'
import Hero from '../components/home/Hero.vue'
export default {
  components: { Hero, About  },

}
</script>

<style>

</style>