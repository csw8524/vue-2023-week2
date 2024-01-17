import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = {
  setup() {
    const text = '測試測試'

    return {
      text
    }
  }
}

createApp(app).mount('#app')