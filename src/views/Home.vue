<template>
  <div class="home">
    <HeroSection />
    <ContactCTA />
  </div>
</template>

<script>
import HeroSection from '../components/sections/HeroSection.vue'
import ContactCTA from '../components/sections/ContactCTA.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ContactCTA
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 70px; // Account for fixed header
}
</style>
