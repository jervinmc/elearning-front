<template>
  <div>
    <v-img src="/images/backgrounds.png"  height="100vh"  width="100vw">
    <hero />
    <div>
      <about />
    </div>
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