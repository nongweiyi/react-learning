import React, {Component} from 'react';
import {Layout} from "antd"
import "antd/dist/antd.css"
import {Route, Router} from "react-router"
import {BrowserRouter, Switch, NavLink} from "react-router-dom"

const {Header, Sider, Content, Footer} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        {/* 左侧菜单 */}
        <Sider>
          左侧菜单 {/* <Router> */}

          {/* <NavLink to="">例子</NavLink> */}
          {/* </Router> */}

        </Sider>
        {/* 右侧内容 */}
        <Content>
          右侧内容 {/* <BrowserRouter>
              <Switch>
                <Route exact path="/"/>
              </Switch>
            </BrowserRouter> */}
        </Content>
      </Layout>
    );
  }
}

export default App;
