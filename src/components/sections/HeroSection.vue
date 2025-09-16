<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting fade-in-up">{{ $t('hero.greeting') }}</p>
          <h1 class="hero-name fade-in-up">{{ $t('hero.name') }}</h1>
          <h2 class="hero-title fade-in-up">{{ $t('hero.title') }}</h2>
          <p class="hero-subtitle fade-in-up">{{ $t('hero.subtitle') }}</p>
          
          <div class="hero-actions fade-in-up">
            <router-link to="/contact" class="btn btn-primary btn-lg">
              <i class="fas fa-paper-plane"></i>
              {{ $t('hero.cta') }}
            </router-link>
            <a href="/Nikoloz_Ebralidze_CV_.pdf" download class="btn btn-secondary btn-lg">
              <i class="fas fa-download"></i>
              {{ $t('hero.downloadCV') }}
            </a>
          </div>
        </div>
        
        <div class="hero-image fade-in-right">
          <div class="hero-avatar">
            <img src="@/Images/PXL_20250915_141728669~2.jpg" alt="Nikoloz Ebralidze" class="profile-image" />
            <div class="hero-avatar-bg"></div>
          </div>
        </div>
      </div>
      
      <div class="hero-scroll">
        <div class="scroll-indicator">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba($primary, 0.05) 0%, rgba($secondary, 0.05) 100%);
  position: relative;
}

.hero-content {
  display: grid;
  gap: $spacing-12;
  align-items: center;
  
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: 1fr 1fr;
    gap: $spacing-16;
  }
}

.hero-text {
  text-align: center;
  
  @media (min-width: $breakpoint-lg) {
    text-align: left;
  }
}

.hero-greeting {
  font-size: $font-size-lg;
  color: $gray;
  margin-bottom: $spacing-2;
  animation-delay: 0.1s;
}

.hero-name {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  color: $dark;
  margin-bottom: $spacing-2;
  animation-delay: 0.2s;
  
  @media (min-width: $breakpoint-md) {
    font-size: $font-size-5xl;
  }
}

.hero-title {
  font-size: $font-size-2xl;
  color: $primary;
  margin-bottom: $spacing-4;
  animation-delay: 0.3s;
  
  @media (min-width: $breakpoint-md) {
    font-size: $font-size-3xl;
  }
}

.hero-subtitle {
  font-size: $font-size-lg;
  color: $gray;
  margin-bottom: $spacing-8;
  max-width: 500px;
  animation-delay: 0.4s;
  
  @media (min-width: $breakpoint-lg) {
    margin-left: 0;
    margin-right: auto;
  }
  
  @media (max-width: $breakpoint-lg - 1px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
  animation-delay: 0.5s;
  
  @media (min-width: $breakpoint-sm) {
    flex-direction: row;
    justify-content: center;
  }
  
  @media (min-width: $breakpoint-lg) {
    justify-content: flex-start;
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  animation-delay: 0.6s;
}

.hero-avatar {
  position: relative;
  width: 300px;
  height: 300px;
  
  @media (min-width: $breakpoint-md) {
    width: 400px;
    height: 400px;
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $radius-2xl;
    box-shadow: $shadow-xl;
    position: relative;
    z-index: 2;
    transition: transform $transition;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, $primary, $secondary);
    border-radius: $radius-2xl;
    z-index: 1;
    opacity: 0.1;
  }
}

.hero-avatar-bg {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, $primary, $secondary);
  border-radius: $radius-2xl;
  opacity: 0.1;
  z-index: 0;
}

.hero-scroll {
  position: absolute;
  bottom: $spacing-8;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $gray;
  animation: bounce 2s infinite;
  cursor: pointer;
  
  i {
    font-size: $font-size-xl;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

// Animation delays for staggered effect
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
