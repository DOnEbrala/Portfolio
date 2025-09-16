<template>
  <div class="language-switcher">
    <button 
      class="language-btn"
      @click="toggleLanguage"
      :title="currentLanguage === 'en' ? 'Switch to Georgian' : 'Switch to English'"
    >
      <i class="fas fa-globe"></i>
      <span>{{ currentLanguage.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    
    const currentLanguage = computed(() => locale.value)
    
    const toggleLanguage = () => {
      const newLocale = locale.value === 'en' ? 'ka' : 'en'
      locale.value = newLocale
      localStorage.setItem('locale', newLocale)
    }
    
    return {
      currentLanguage,
      toggleLanguage
    }
  }
}
</script>

<style lang="scss" scoped>
.language-switcher {
  position: relative;
}

.language-btn {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  padding: $spacing-2 $spacing-3;
  background: transparent;
  border: 1px solid $gray-light;
  border-radius: $radius;
  color: $dark;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  cursor: pointer;
  transition: all $transition-fast;
  
  &:hover {
    background: $primary;
    color: $white;
    border-color: $primary;
  }
  
  i {
    font-size: $font-size-sm;
  }
}
</style>

