import Mirror from './Mirror'
import * as React from "react";

import {
    Typography,
    Space,
  } from "antd";
  const { Title } = Typography;

const Mirrors = () => {
    return (
      <>
        <Title level={5}>Mirrors</Title>
        <div style={{overflowX:'scroll',overflowY:'hidden',display:'flex'}}>
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
          <Mirror />
        </div>
      </>
    );
  };
  export default Mirrors