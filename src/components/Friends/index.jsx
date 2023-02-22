import * as React from 'react'
import friend from '../../assets/friend.png'
import {
    Typography,
    Avatar,
    Space,
    Badge,

  } from "antd";
  const { Title } = Typography;
const Friends = () => {
    return (
      <>
        <Space direction="vertical" style={{ alignContent: "flex-start" }}>
          <Title level={5}>Friends</Title>
          <Space wrap size={16}>
            <Badge dot status="success" offset={[-10, 10]}>
              <Avatar size={64} src={friend} />
            </Badge>
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
            <Avatar size={64} src={friend} />
          </Space>
        </Space>
      </>
    );
  };
  export default Friends