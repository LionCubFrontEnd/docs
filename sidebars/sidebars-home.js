module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      items: ['home/introduction'],
    },
    {
      type: 'category',
      label: 'Topics',
      items: [
        {
          type: 'link',
          label: 'Business Context',
          href: '/business/About-business',
        },
        {
          type: 'link',
          label: '设计模式',
          href: '/design-pattern/design-pattern',
        },
        {
          type: 'link',
          label: '算法',
          href: '/leet-code/leet-code',
        },
        {
          type: 'link',
          label: '面试',
          href: '/meet/meet',
        },
      ],
    },
  ],
};
