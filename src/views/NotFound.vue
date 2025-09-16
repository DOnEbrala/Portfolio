<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <router-link to="/" class="btn btn-primary btn-lg">
          <i class="fas fa-home"></i>
          {{ $t('common.back') }} to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, rgba($primary, 0.1) 0%, rgba($secondary, 0.1) 100%);
}

.error-code {
  font-size: 8rem;
  font-weight: $font-weight-bold;
  color: $primary;
  margin-bottom: $spacing-4;
  
  @media (min-width: $breakpoint-md) {
    font-size: 12rem;
  }
}

h1 {
  color: $dark;
  margin-bottom: $spacing-4;
}

p {
  font-size: $font-size-lg;
  color: $gray;
  margin-bottom: $spacing-8;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>

