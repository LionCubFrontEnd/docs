/**
 * 填写 docs 文件夹名，自动生成对应目录---命名规范例：leet-code
 * 生成顺序按照数组排列来
 * 添加目录 icon 地址：https://react-icons.github.io/react-icons/icons?name=fc
 */

const {
  FcIdea,
  FcCalendar,
  FcInspection,
  FcBarChart,
} = require('react-icons/fc');

const sidebarConfigArr = [
  {
    id: 'design-pattern',
    name: '设计模式',
    icon: FcIdea,
  },
  {
    id: 'leet-code',
    name: 'leet-code',
    icon: FcInspection,
  },
  {
    id: 'interview',
    name: '面试',
    icon: FcCalendar,
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: FcBarChart,
  },
];

module.exports = sidebarConfigArr;
