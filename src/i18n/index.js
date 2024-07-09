import { createI18n } from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

const datetimeFormats = {
  en: {
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
}

const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard',
    },
    percent: {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  datetimeFormats,
  numberFormats,
})

export default i18n
