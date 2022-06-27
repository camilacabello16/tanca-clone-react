import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Employee from '../page/Employee';
import TimeKeeping from '../page/TimeKeeping';

const { Header, Content, Footer } = Layout;

const BasicLayout = () => {
    const menu = [
        {
            name: 'Nhân viên',
            link: '/employee'
        },
        {
            name: 'Chấm công',
            link: '/time-kepping'
        },
    ]

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={
                        menu.map((item, index) => {
                            return (
                                <Link to={item.link} key={index}>{item.name}</Link>
                            );
                        })
                    }
                />
            </Header>
            <Content
                style={{
                    padding: '20px 20px',
                    height: 'calc(100vh - 64px)'
                }}
            >
                <div className="site-layout-content">
                    <Router>
                        <Switch>
                            <Route path='/employee' >
                                <Employee />
                            </Route>
                            <Route path='/time-keeping'>
                                <TimeKeeping />
                            </Route>
                        </Switch>
                    </Router>
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