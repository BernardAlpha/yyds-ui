import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@yyds-ui/components/icon';
import '@yyds-ui/theme-chalk/src/index.scss'

import Input from '@yyds-ui/components/input';
import Button from '@yyds-ui/components/button';

const plugins = [
  Icon,
  Input,
  Button
];

const app = createApp(App);

plugins.forEach(plugin => app.use(plugin));

app.mount('#app');
