import React, { useEffect, useState } from 'react'
import { Layout, Menu, Typography } from 'antd'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { log } from '../../modules/utils'

const { Header, Content, Footer, Sider } = Layout
const { Text, Link } = Typography;
const menuItems = [
    {
        key: '/',
        path: '/',
        icon: React.createElement(UserOutlined),
        label: 'root',
    },
    {
        key: '/test/state',
        path: '/test/state',
        icon: React.createElement(UserOutlined),
        label: 'Test State',
    },
    {
        key: '/button',
        path: '/button',
        icon: React.createElement(UserOutlined),
        label: 'Button',
    },
    {
        key: '/typography',
        path: '/typography',
        icon: React.createElement(UserOutlined),
        label: 'Typography',
    },
    {
        key: '/grid',
        path: '/grid',
        icon: React.createElement(UserOutlined),
        label: 'Grid',
    },
    {
        key: '/form',
        path: '/form',
        icon: React.createElement(UserOutlined),
        label: 'Form',
    },
    {
        key: '/form-list',
        path: '/form-list',
        icon: React.createElement(UserOutlined),
        label: 'Form.List',
    },
    {
        key: '/table',
        path: '/table',
        icon: React.createElement(UserOutlined),
        label: 'Table',
    }
]

const MainLayout = withRouter((props) => {
    const { history, children, location } = props
    const [tabKey, setTabKey] = useState('/button')
    const [pathname, setPathname] = useState('/button')
    log('MainLayout.js', 'start', 0)

    useEffect(() => {
        if (pathname !== location.pathname) {
            setPathname(location.pathname)
            log('MainLayout.js', `pathname을 설정합니다. =>${location.pathname}`, 1)
        }
    })

    useEffect(() => {
        setTabKey(pathname)
        log('MainLayout.js', `tabKey를 설정합니다. =>${pathname}`, 1)
    }, [pathname])

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="logo" />
                <Menu
                    onClick={({ item, key, keyPath, domEvent }) => {
                        history.push(item.props.path)
                    }}
                    theme="dark"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    selectedKeys={tabKey}
                    items={menuItems}
                />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <Text type="success">Hello React</Text> 🍔🍟🌭🍕 
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
})
export default MainLayout
