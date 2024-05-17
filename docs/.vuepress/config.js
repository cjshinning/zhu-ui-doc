module.exports = {
  title: 'zhu-ui',
  description: 'ui 库',
  dest: './build',
  port: 1234,
  themeConfig: {
    nav: [{
      text: '主页',
      link: '/'
    }],
    sidebar: {
      '/components/': [{
        collapse: true,
        children: [
          'button'
        ]
      }]
    }
  }
}