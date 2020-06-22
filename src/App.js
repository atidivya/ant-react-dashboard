import React from "react";
import "./App.css";
import { Layout, Typography, Avatar, Menu, Breadcrumb, Tree } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Slot, Bingo } from "./Games";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;
const { TreeNode } = Tree;

function App() {
  let bestSlot = new Slot("classic-cherries", "Slot", "95%");
  let bestBingo = new Bingo("2050 Bingo", "Bingo", "Yes");

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
                  <Tree key="0" showLine defaultSelectedKeys={["0-0-0"]}>
                    <TreeNode title={bestSlot.getName()} key="0-0-0">
                      <TreeNode
                        title={"Slot -" + bestSlot.getName()}
                        key="0-0-0-1"
                      />
                      <TreeNode
                        title={"RTP-" + bestSlot.getRtp()}
                        key="0-0-0-2"
                      />
                    </TreeNode>

                    <TreeNode title={bestBingo.getName()} key="0-0-1">
                      <TreeNode
                        title={"Bingo -" + bestBingo.getName()}
                        key="0-0-1-1"
                      />
                      <TreeNode
                        title={
                          "Mobile Friendly -" + bestBingo.getMobileFriendly()
                        }
                        key="0-0-1-2"
                      />
                    </TreeNode>
                  </Tree>
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
