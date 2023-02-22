import * as React from 'react'
import home from "../../assets/Home";
import merketplace from "../../assets/merketplace";
import metaverse from "../../assets/metaverse";
import calendar from "../../assets/calendar";
import {
  Tabs,
} from "antd";

import pi from "../../assets/pi";
import Icon from "@ant-design/icons";
const NavBar=()=>{
  const items = [
    {
      key: '1',
      label: <Icon component={home}/>,
      children: [],
    },
    {
      key: '2',
      label: <Icon component={metaverse}/>,
      children: [],
    },
    {
      key: '3',
      label: <Icon component={pi}/>,
      children: [],
    },
    {
      key: '4',
      label: <Icon component={calendar}/>,
      children: [],
    },
    {
      key: '5',
      label: <Icon component={merketplace}/>,
      children: [],
    },
  ];
  return(<>
       <Tabs defaultActiveKey="1" items={items} style={{display:'flex',justifyContent:'center'}} />
  </>

  );
}

export default NavBar