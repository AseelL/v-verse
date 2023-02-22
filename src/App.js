import "./App.css";

import * as React from "react";
import Mirrors from "./components/Mirrors";
import Dimensions from "./components/Dimensions";
import Friends from "./components/Friends";
import PostingSection from "./components/PostSection";
import Navbar from "./components/Navbar";
import { Layout, ConfigProvider } from "antd";
const { Content } = Layout;
// const { useToken } = theme;
// fun stuff
// style={{ backgroundImage: `linear-gradient(270deg, ${token.colorPrimary}, ${token.colorError})`}}
// const { token } = useToken();

const HomePage = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#93C850",
        },
      }}
    >
      <Layout>
        <Navbar />
        <Content style={{ maxWidth: "70%", margin: "auto" }}>
          <Mirrors />
          <Friends />
          <PostingSection />
          <Dimensions />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
