<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ScrollToTop
  }
}
</script>

<style lang="scss">
.main-content {
  min-height: calc(100vh - 140px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

