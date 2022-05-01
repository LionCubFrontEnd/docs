const navbarItem = [
  {
    label: '首页',
    to: '/',
    activeBaseRegex: '(^/docs)',
  },
  {
    label: '里程碑',
    to: '/marker',
    activeBasePath: '/marker',
    position: 'right',
  },
  {
    label: '加入知识星球',
    to: '/zsxq',
    activeBasePath: '/zsxq',
    position: 'right',
  },
  {
    href: 'https://github.com/LionCubFrontEnd/docs',
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub repository',
  },
];

module.exports = navbarItem;
