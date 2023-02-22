import * as React from 'react'
import TabsSection from './Tabs'
import logo from '../../assets/logo.png'
import {
  Layout,
  Row,
  Col,
} from "antd";

const NavBar=()=>{

  return(
<Row>
    <Col span={2}>
    {/* <img src={logo} style={{width:'100px',margin:'auto 0'}}/> */}
    {/* WIP */}
    </Col>
<Col span={18}>
    
    <TabsSection />
    </Col>
    <Col span={4}></Col>
</Row>
  );
}

export default NavBar
