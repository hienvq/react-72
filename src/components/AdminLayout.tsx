import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "User Management",
      onClick: () => {
        navigate("/admin/user");
      },
    },
    {
      key: "2",
      icon: React.createElement(ShopOutlined),
      label: "Product Management",
      onClick: () => {
        navigate("/admin/product");
      },
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            borderBottom: "1px solid #f5f5f5",
          }}
        >
          <Button type="primary" danger>
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>HienVQ</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
