import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const color = ['geekblue', 'green', 'volcano'];
const columns = [
  {
    title: '题目',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <a target="blank" href={record.address}>
        {text}
      </a>
    ),
  },
  {
    title: '难度',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: '分类',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag, key) => {
          return (
            <Tag color={color[key]} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '标记完成',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>完成</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '3. 无重复字符的最长子串',
    level: 2,
    address:
      'https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/',
    tags: ['hash', '滑动窗口'],
  },
  {
    key: '2',
    name: '88. 合并两个有序数组',
    level: 1,
    address: 'https://leetcode-cn.com/problems/merge-sorted-array/',
    tags: ['双指针', '排序'],
  },
  {
    key: '3',
    name: '165. 比较版本号',
    level: 2,
    address: 'https://leetcode-cn.com/problems/compare-version-numbers/',
    tags: ['双指针'],
  },
];

const myTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default myTable;
