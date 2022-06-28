import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Employee from '../page/Employee';
import TimeKeeping from '../page/TimeKeeping';
import axios from 'axios';
import { ROOT_API } from '../contants/api';

const { Header, Content, Footer } = Layout;

const BasicLayout = () => {
    const menu = [
        {
            name: 'Lịch',
            link: '/calendar'
        },
        {
            name: 'Tuyển dụng',
            link: '/recruitment'
        },
        {
            name: 'Nhân viên',
            link: '/employee'
        },
        {
            name: 'Chấm công',
            link: '/time-keeping'
        },
        {
            name: 'Yêu cầu',
            link: '/request'
        },
        {
            name: 'Tiền lương',
            link: '/salary'
        },
        {
            name: 'Giao việc',
            link: '/task'
        },
        {
            name: 'Thiết lập',
            childrens: [
                {
                    name: 'Công ty',
                    link: '/setting/company'
                }
            ]
        },
    ];

    useEffect(() => {
        axios.defaults.baseURL = ROOT_API;
    }, []);

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                // items={
                //     menu.map((item, index) => {
                //         return (
                //             <Link to={item.link} key={index}>{item.name}</Link>
                //         );
                //     })
                // }
                >
                    {menu.map((item, index) => {
                        if (item.childrens) {
                            return (
                                <Menu.SubMenu
                                    key={item.name}
                                    title={item.name}
                                >
                                    {item.childrens.map((o) => {
                                        return (
                                            <Menu.Item key={o.name}>
                                                <Link to={o.link}>{o.name}</Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu.SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item key={index}>
                                    <Link to={item.link}>{item.name}</Link>
                                </Menu.Item>
                            );
                        }

                    })}
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '20px 20px',
                    height: 'calc(100vh - 64px)'
                }}
            >
                <div className="site-layout-content">
                    {/* <Router> */}
                    <Switch>
                        <Route path='/employee' >
                            <Employee />
                        </Route>
                        <Route path='/time-keeping'>
                            <TimeKeeping />
                        </Route>
                    </Switch>
                    {/* </Router> */}
                </div>
            </Content>
            {/* <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer> */}
        </Layout>
    );
};

export default BasicLayout;