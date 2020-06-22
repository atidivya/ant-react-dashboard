import React from "react";
import "./App.css";
import { Layout, Typography, Avatar, Menu, Breadcrumb } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Slot, Bingo } from "./Games";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Layout>
          <Header style={{ padding: 10 }}>
            <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
            <Title style={{ color: "white" }} level={3}>
              WAC
            </Title>
          </Header>
          <Layout>
            <Sider>
              <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
                <Menu.Item key="Dashboard">Dashboard</Menu.Item>
                <SubMenu
                  title={
                    <span>
                      <MailOutlined />
                      <span>About Us</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key="AboutUs" title="Country">
                    <Menu.Item key="location1">Lisbon</Menu.Item>
                    <Menu.Item key="location2">Riga</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                  <Slot name="Classic Cherries" type="Slot" rtp="95%" />
                  <Bingo
                    name="2050 Bingo"
                    type="Bingo"
                    isMobileFriendly="Yes"
                  />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                WAC Dashboard ©2020 Created by Atidivya Kumar Patra
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </React.StrictMode>
  );
}

export default App;
