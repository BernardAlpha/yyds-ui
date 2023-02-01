import { createApp } from 'vue';
import App from './app.vue';
import YIcon from '@yyds-ui/components/icon';
import '@yyds-ui/theme-chalk/src/index.scss'
const app = createApp(App);

app.use(YIcon);
app.mount('#app')