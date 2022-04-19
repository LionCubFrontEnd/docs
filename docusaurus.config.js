/* eslint-disable */
const plugins = require('./src/config/plugins');
const navbarItem = require('./src/config/navbarItem');
const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: false,
  // editUrl: 'https://github.com/pateln123/digital-support-notes/tree/main',
  // showLastUpdateAuthor: true,
  // showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [pageRef],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '小狮子前端',
  tagline: 'An awesome textbook alternative, that you can contribute to! 🚀',
  url: 'https://docs.yangchaoyi.vip',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'LionCubFrontEnd', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    announcementBar: {
      id: 'beta', // Any value that will identify this message.
      content: '❤欢迎来到小狮子前端编程成长圈，学如逆水行舟，不进则退~',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: '小狮子前端',
      hideOnScroll: false,
      logo: {
        alt: '小狮子前端',
        src: '/img/lion-logo.png',
      },
      items: navbarItem,
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-home.js'),
          sidebarCollapsible: false,
          ...pageOptions,
        },
        blog: false,
      },
    ],
  ],
  plugins: plugins,
};
