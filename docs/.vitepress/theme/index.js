import DefaultTheme from 'vitepress/theme';

import YIcon from '@yyds-ui/components/icon';

import '@yyds-ui/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(YIcon);
  }
};
