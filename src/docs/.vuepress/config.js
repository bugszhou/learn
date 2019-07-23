module.exports = {
  host: 'localhost',
  base: '/',
  port: 8666,
  title: '我的学习图谱',
  description: '前端学习分享',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '知识图谱',
        collapsable: false,
        children: [
          'chapter1/',
        ],
      },
      {
        title: '我的程序猿之路',
        collapsable: false,
        children: [
          'knowledge/',
        ],
      },
      // {
      //   title: '我的技术管理之路',
      //   collapsable: false,
      //   children: [
      //     'manager/',
      //   ],
      // },
    ],
  },
};
