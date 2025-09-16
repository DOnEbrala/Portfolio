import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ka from './locales/ka.json'

const messages = {
  en,
  ka
}

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
  globalInjection: true
})

export default i18n

