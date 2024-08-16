import './assets/main.css'
// import '~libc-ui/src/styles/index.less';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
