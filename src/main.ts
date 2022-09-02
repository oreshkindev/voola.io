import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import app from './app.vue'
import router from './router'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import VueScrollTo from 'vue-scrollto'

createApp(app)
  .use(router)
  .use(
    createI18n({
      legacy: false,
      locale: 'zh-CN',
      messages,
    })
  )
  .use(VueScrollTo, {
    duration: 1000,
    easing: 'ease',
  })
  .mount('#app')
