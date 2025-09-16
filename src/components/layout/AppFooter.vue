<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3 class="footer-title">{{ $t('hero.name') }}</h3>
            <p class="footer-subtitle">{{ $t('hero.title') }}</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
                <li><router-link to="/experience">{{ $t('nav.experience') }}</router-link></li>
                <li><router-link to="/contact">{{ $t('nav.contact') }}</router-link></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-social">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="GitHub" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" aria-label="Twitter" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="footer-copyright">{{ $t('footer.copyright') }}</p>
          <p class="footer-built">{{ $t('footer.builtWith') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background: $dark;
  color: $white;
  padding: $spacing-16 0 $spacing-8;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  gap: $spacing-8;
  margin-bottom: $spacing-12;
  
  @media (min-width: $breakpoint-md) {
    grid-template-columns: 1fr 2fr 1fr;
    gap: $spacing-12;
  }
}

.footer-brand {
  .footer-title {
    color: $primary;
    font-size: $font-size-2xl;
    margin-bottom: $spacing-2;
  }
  
  .footer-subtitle {
    color: $gray-light;
    margin-bottom: 0;
  }
}

.footer-links {
  display: grid;
  gap: $spacing-8;
  
  @media (min-width: $breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.footer-section {
  h4 {
    color: $white;
    font-size: $font-size-lg;
    margin-bottom: $spacing-4;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: $spacing-2;
      
      a {
        color: $gray-light;
        text-decoration: none;
        transition: color $transition-fast;
        
        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.footer-social {
  h4 {
    color: $white;
    font-size: $font-size-lg;
    margin-bottom: $spacing-4;
  }
}

.social-links {
  display: flex;
  gap: $spacing-4;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: $dark-light;
    color: $gray-light;
    border-radius: $radius-lg;
    text-decoration: none;
    transition: all $transition-fast;
    
    &:hover {
      background: $primary;
      color: $white;
      transform: translateY(-2px);
    }
    
    i {
      font-size: $font-size-lg;
    }
  }
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-2;
  padding-top: $spacing-8;
  border-top: 1px solid $dark-light;
  text-align: center;
  
  @media (min-width: $breakpoint-md) {
    flex-direction: row;
    justify-content: space-between;
  }
  
  p {
    color: $gray-light;
    margin-bottom: 0;
    font-size: $font-size-sm;
  }
}
</style>
