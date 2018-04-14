import {Route, Switch} from "react-router-dom"
import React, {Component} from 'react';
import LifeCycle from "@pages/lifecycle/lifecycle"
import stateProp from "@pages/stateProp/stateProp"
import Home from "@pages/home/home"

const routerList = [
    {
        path: "/",
        component: '',
        exact: true
    }, {
        path: "/stateProp",
        component: stateProp,
        exact: false
    }, {
        path: "/lifecycle",
        component: LifeCycle,
        exact: false
    }
]

class ContainerRouter extends Component {
    render() {
        return (
            <Switch>
                {routerList.map((item) => {
                    return (<Route exact={item.exact} path={item.path} component={item.component}/>)
                })
}
            </Switch>
        )
    }

}

export default ContainerRouter;