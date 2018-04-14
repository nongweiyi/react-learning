import React, {Component} from 'react';
import {Layout, Menu, Icon, Button} from "antd"
import styles from "./container.css"
import "./yuireset.css"
import {BrowserRouter, NavLink} from "react-router-dom"

import menuList from "./menuList"
import ContainerRouter from "./router"
const {Sider, Content} = Layout;
const SubMenu = Menu.SubMenu,
  MenuItem = Menu.Item;

class Container extends Component {
  state = {
    defaultOpenKeys: "0"
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/* 左侧菜单 */}
          <Sider className={styles.containerSider}>
            <Menu
              defaultSelectedKeys={[this.state.defaultOpenKeys]}
              defaultOpenKeys={[this.state.defaultOpenKeys]}
              mode="inline"
              theme="dark">
              {menuList.map((item, index) => {
                return <MenuItem key={index}>
                  <NavLink
                    to={item.link}
                    onClick={this
                    .navClick
                    .bind(this, index)}>{item.label}</NavLink>
                </MenuItem>
              })
}
            </Menu>
          </Sider>
          {/* 右侧内容 */}
          <Content className={styles.containerContent}>
            <ContainerRouter/>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
  navClick = (index) => {

    this.setState({
      defaultOpenKeys: index.toString()
    })
  }
}
export default Container;
