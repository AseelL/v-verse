import * as React from 'react'
import {
    Space,
    Tag,
    theme,
  } from "antd";
  const { useToken } = theme;
const TagBar = () => {
  const { token } = useToken();

    return (
      <Space>
        <Tag color={token.colorPrimary}>All</Tag>
        <Tag>Trending</Tag>
        <Tag>Title</Tag>
        <Tag>Title</Tag>
        <Tag>Title</Tag>
        <Tag>Title</Tag>
      </Space>
    );
  };
  export default TagBar