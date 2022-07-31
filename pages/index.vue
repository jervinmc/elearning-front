<template>
  <div>
    <hero />
    <dir>
      <about />
    </dir>
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