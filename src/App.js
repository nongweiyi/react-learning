import React, {Component} from 'react';
import {Layout} from "antd"
import "antd/dist/antd.css"
import styles from "./App.less"

import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom"
import LifeCycle from "./pages/lifecycle/lifecycle"
import stateProp from "./pages/stateProp/stateProp"
import Home from "./pages/home/home"
const {Sider, Content} = Layout;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Layout> */}
          {/* 左侧菜单 */}
          {/* <Sider className={styles.containerSider}>
            左侧菜单
            <ul>
              <li>
                <NavLink to="/stateProp">stateProp</NavLink>
              </li>
              <li>
                <NavLink to="/lifecycle">lifecycle</NavLink>
              </li>
            </ul>

          </Sider> */}
          {/* 右侧内容 */}
          {/* <Content className={styles.containerContent}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stateProp" component={stateProp}/>
              <Route path="/lifecycle" component={LifeCycle}/>
            </Switch>
          </Content> */}
        {/* </Layout> */}
        <Layout>
        <Sider>Header</Sider>
        <Content>Content</Content>
      </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
