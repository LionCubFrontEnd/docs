const { tailwindPlugin, webpackPlugin } = require('../plugins');
const pageRef = require('../plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/pateln123/digital-support-notes/tree/main',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
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
];
module.exports = plugins;
