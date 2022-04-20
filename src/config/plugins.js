const { tailwindPlugin, webpackPlugin } = require('../plugins');
const pageRef = require('../plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: false,
  // editUrl: 'https://github.com/pateln123/digital-support-notes/tree/main',
  // showLastUpdateAuthor: true,
  // showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [pageRef],
};

const plugins = [
  tailwindPlugin,
  webpackPlugin,
  ['docusaurus-plugin-sass', {}],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/business',
      routeBasePath: 'business',
      id: 'business',
      sidebarPath: require.resolve('./sidebarAutoGen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/design-pattern',
      routeBasePath: 'design-pattern',
      id: 'design-pattern',
      sidebarPath: require.resolve('./sidebarAutoGen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/leet-code',
      routeBasePath: 'leet-code',
      id: 'leet-code',
      sidebarPath: require.resolve('./sidebarAutoGen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/meet',
      routeBasePath: 'meet',
      id: 'meet',
      sidebarPath: require.resolve('./sidebarAutoGen.js'),
      ...pageOptions,
    },
  ],
];
module.exports = plugins;
