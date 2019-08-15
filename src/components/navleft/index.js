import React from 'react'
import {Menu, Icon} from 'antd';
import './index.less'
import MenuConfig from '../../config/nav_config'

const {SubMenu} = Menu;

export default class Navleft extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    };

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    // 导航条菜单
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }


    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>共享单车管理系统</h1>
                </div>
                <Menu theme="dark" mode="inline" className="nav_box">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}