<template>
  <section class="section contact-cta">
    <div class="container">
      <div class="cta-content">
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">
          <i class="fas fa-envelope"></i>
          Start a Conversation
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactCTA'
}
</script>

<style lang="scss" scoped>
.contact-cta {
  background: linear-gradient(135deg, $primary 0%, $primary-dark 100%);
  color: $white;
  text-align: center;
  
  .container {
    max-width: 800px;
  }
  
  h2 {
    color: $white;
    margin-bottom: $spacing-4;
  }
  
  p {
    font-size: $font-size-lg;
    color: rgba($white, 0.9);
    margin-bottom: $spacing-8;
  }
  
  .btn-primary {
    background: $white;
    color: $primary;
    
    &:hover {
      background: $light;
      color: $primary-dark;
    }
  }
}
</style>

