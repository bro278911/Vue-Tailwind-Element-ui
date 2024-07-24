import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import ElementPlus from 'element-plus'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, { zhTw })
app.use(router)
app.mount('#app')
