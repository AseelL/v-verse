import * as React from 'react'

import {
    Card,
    Space,
    Tag,
    Row,
    Col,
  } from "antd";
  import { BsPeopleFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
const Dimension = () => {
    return (
      <Card
        style={{
          outlineColor: "primary",
          width: "40em",
          height: "20em",
          borderRadius: "15px",
          backgroundImage:
            "url(https://www.designerstoday.com/wp-content/uploads/sites/16/2020/01/ar-vr2.jpg)",
          filter: "brightness(90%)",
        }}
        bodyStyle={{
          width: "40em",
          height: "20em",
          alignItems: "space-between",
          color: "white",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col span={2}>
            <Tag color={"#F93E3E"} style={{ borderRadius: "50px" }}>
              LIVE
            </Tag>
          </Col>
          <Col span={17}></Col>
          <Col span={5}>
            <Space >
              <span>
                <BsPeopleFill /> 360
              </span>
              <span>
                <AiTwotoneHeart /> 20
              </span>
            </Space>
          </Col>
        </Row>
        <div style={{ height: "80%" }} />
  
        <Row>
          <Col>Dim .dime</Col>
        </Row>
      </Card>
    );
  };
  export default Dimension