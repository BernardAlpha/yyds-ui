import DefaultTheme from 'vitepress/theme';

import YIcon from '@yyds-ui/components/icon';
import YButton from '@yyds-ui/components/button';

import '@yyds-ui/theme-chalk/src/index.scss';

import './styles/common.scss';

const plugins = [YIcon, YButton];

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    plugins.forEach(plugin => app.use(plugin));
  }
};
