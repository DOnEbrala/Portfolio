<template>
  <div class="contact-page">
    <section class="section hero-section">
      <div class="container">
        <div class="section-title">
          <h1>{{ $t('contact.title') }}</h1>
          <p>{{ $t('contact.subtitle') }}</p>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-info">
                  <h3>{{ $t('contact.info.email') }}</h3>
                  <a href="mailto:nikoloz@example.com">nikolozebralidze001@gmail.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-info">
                  <h3>{{ $t('contact.info.phone') }}</h3>
                  <a href="tel:+995555123456">+995 551 143 154</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-info">
                  <h3>{{ $t('contact.info.location') }}</h3>
                  <span>Tbilisi, Georgia</span>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Follow Me</h3>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/nika-ebralidze" target="_blank" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/DOnEbrala" target="_blank" aria-label="GitHub">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <h2>Send Message</h2>
              
              <div class="form-group">
                <label for="name">{{ $t('contact.form.name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  :placeholder="$t('contact.form.name')"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email">{{ $t('contact.form.email') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  :placeholder="$t('contact.form.email')"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message">{{ $t('contact.form.message') }}</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  :placeholder="$t('contact.form.message')"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
                <i class="fas fa-paper-plane"></i>
                {{ isSubmitting ? 'Sending...' : $t('contact.form.send') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        alert('Message sent successfully!')
        this.resetForm()
      } catch (error) {
        alert('Error sending message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  padding-top: 70px;
}

.hero-section {
  background: linear-gradient(135deg, rgba($primary, 0.1) 0%, rgba($secondary, 0.1) 100%);
  text-align: center;
}

.contact-content {
  display: grid;
  gap: $spacing-12;
  
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: 1fr 1fr;
    gap: $spacing-16;
  }
}

.contact-info {
  h2 {
    color: $dark;
    margin-bottom: $spacing-4;
  }
  
  > p {
    font-size: $font-size-lg;
    margin-bottom: $spacing-8;
    line-height: 1.7;
  }
}

.contact-methods {
  margin-bottom: $spacing-12;
}

.contact-method {
  display: flex;
  align-items: center;
  margin-bottom: $spacing-6;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.method-icon {
  width: 60px;
  height: 60px;
  background: $primary;
  color: $white;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: $spacing-4;
  font-size: $font-size-xl;
}

.method-info {
  h3 {
    color: $dark;
    margin-bottom: $spacing-1;
    font-size: $font-size-lg;
  }
  
  a, span {
    color: $gray;
    text-decoration: none;
    
    &:hover {
      color: $primary;
    }
  }
}

.social-links {
  h3 {
    color: $dark;
    margin-bottom: $spacing-4;
  }
}

.social-icons {
  display: flex;
  gap: $spacing-4;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: $gray-light;
    color: $gray;
    border-radius: $radius-lg;
    text-decoration: none;
    font-size: $font-size-xl;
    transition: all $transition-fast;
    
    &:hover {
      background: $primary;
      color: $white;
      transform: translateY(-2px);
    }
  }
}

.contact-form-wrapper {
  background: $white;
  padding: $spacing-8;
  border-radius: $radius-xl;
  box-shadow: $shadow-lg;
}

.contact-form {
  h2 {
    color: $dark;
    margin-bottom: $spacing-6;
    text-align: center;
  }
}

.form-group {
  margin-bottom: $spacing-6;
  
  label {
    display: block;
    color: $dark;
    font-weight: $font-weight-medium;
    margin-bottom: $spacing-2;
  }
  
  input,
  textarea {
    width: 100%;
    padding: $spacing-4;
    border: 2px solid $gray-light;
    border-radius: $radius-lg;
    font-size: $font-size-base;
    font-family: $font-family;
    transition: border-color $transition-fast;
    
    &:focus {
      outline: none;
      border-color: $primary;
    }
    
    &::placeholder {
      color: $gray;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
}

.btn {
  width: 100%;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>

