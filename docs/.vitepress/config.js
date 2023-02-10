module.exports = {
  title: 'YYDS-UI',
  description: 'Just playing around.',
  lang: 'en-US',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message:
        'Design by YYDS-TEAM in Shenzhen. Release under the MIT License.',
      copyright: 'Copyright ©2023 YYDS-TEAM'
    },
    // show search box
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' },
      { text: 'GitHub', link: 'https://github.com/BernardAlpha/yyds-ui' }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [{ text: 'icon', link: '/component/icon' }]
        }
      ]
    }
  }
};
