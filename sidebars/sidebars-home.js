const sidebarConfigArr = require('../sidebarConfig');

const topicsArr = sidebarConfigArr.map(item=>{
  return {
    type: 'link',
    label: item.name,
    href: `/${item.id}/index`
  }
})

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
      items: topicsArr
    },
  ],
};
