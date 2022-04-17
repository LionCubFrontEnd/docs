const navbarItem = [
  {
    label: 'Home',
    to: '/',
    activeBaseRegex: '(^/docs)',
  },
  {
    type: 'dropdown',
    label: 'Notes',
    position: 'left',
    items: [],
  },
  {
    href: 'https://github.com/LionCubFrontEnd/docs',
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub repository',
  },
];

module.exports = navbarItem;
