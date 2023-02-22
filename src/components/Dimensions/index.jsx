import * as React from 'react'
import Dimension from './Dimension'
import TagBar from './TagBar';
import {
  Space,
  Typography
} from "antd";
const { Title } = Typography;
const Dimensions = () => {
    return (
      <div style={{overflowX:'scroll',overflowY:'hidden'}}>
        <Title level={5}>Dimensions</Title>
         <TagBar />
        <Space>
        <Dimension/>      
        <Dimension/>
        <Dimension/>
        <Dimension/>  
        </Space>
      </div>
    );
  };
  export default Dimensions