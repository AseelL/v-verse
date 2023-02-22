import * as React from "react";
import friend from "../../assets/friend.png";

import {
    Card,
    Avatar,
    Space,
    Typography
  } from "antd";
  const {Text} = Typography;

const Mirror = () => {
    return (
      <>
        <Card
          style={{
            outlineColor: "primary",
            minWidth: "15em",
            height: "20em",
            margin:'0.3em',
            borderRadius: "27px",
            background: "linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0.27))",
            display: "flex",
          }}
          bodyStyle={{
            alignSelf: "flex-end",
          }}
        >
          <Space size={2}>
            <Avatar size="small" src={friend} />
            <Text>username</Text>
          </Space>
        </Card>
      </>
    );
  };
  export default Mirror