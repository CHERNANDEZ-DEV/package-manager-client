'use client';
import './globals.css'
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: 'dashboard', icon: <UserOutlined />, label: 'Dashboard' },
  { key: 'orders', icon: <VideoCameraOutlined />, label: 'Solicitar orden' },
  { key: 'history', icon: <UploadOutlined />, label: 'Historial de ordenes' },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body>
        <Layout className="h-screen">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {items.map(({ key, icon, label }) => (
                <Menu.Item key={key} icon={icon}>
                  <Link href={`/content/${key}`}>{label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '24px 16px 24px' }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
                className="h-full"
              >
                {children}
              </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer> */}
          </Layout>
        </Layout>
      </body>
    </html>
  );
};

export default AppLayout;

