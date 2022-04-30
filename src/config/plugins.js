const path = require('path');
const { tailwindPlugin, webpackPlugin } = require('../plugins');
const pageRef = require('../plugins/pageRef');
const sidebarConfigArr = require('../../sidebarConfig');

const pageOptions = {
  sidebarCollapsible: false,
  // editUrl: 'https://github.com/pateln123/digital-support-notes/tree/main',
  // showLastUpdateAuthor: true,
  // showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [pageRef],
};

const sidebarConfig = sidebarConfigArr.map((item) => {
  return [
    '@docusaurus/plugin-content-docs',
    {
      path: `docs/${item.id}`,
      routeBasePath: `${item.id}`,
      id: `${item.id}`,
      sidebarPath: require.resolve('./sidebarAutoGen.js'),
      ...pageOptions,
    },
  ];
});

const plugins = [
  path.resolve(__dirname, './../plugins/plugin-baidu-analytics'),
  path.resolve(__dirname, './../plugins/plugin-baidu-push'),
  tailwindPlugin,
  webpackPlugin,
  ['docusaurus-plugin-sass', {}],
  ...sidebarConfig,
];
module.exports = plugins;
