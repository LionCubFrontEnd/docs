import { c, TAG } from './DrawRoadMap';
/**
 * 卡片x,y坐标
 * 背景颜色、宽高、标注、子树、跳转地址、字体颜色
 */
export const all = [
  {
    text: '学习路线 by 小狮子',
    x: 400,
    y: 0,
    process: 1,
  },
  {
    text: '网络',
    x: 300,
    y: 70,
    tag: TAG.recommand,
    process: 1,
  },
  {
    text: '浏览器工作原理',
    x: 400,
    y: 140,
    tag: TAG.recommand,
    process: 1,
  },
  {
    text: '待补充',
    x: 300,
    y: 210,
    process: 1,
  },
];
function getRoadmapByProcess(process) {
  return all.filter((item) => process.includes(item.process));
}
export const p1 = getRoadmapByProcess([1]);
export const p2 = getRoadmapByProcess([1, 2]);
export const p3 = getRoadmapByProcess([1, 2, 3]);
