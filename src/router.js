import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './app'
import Admin from './admin'
import Login from './page/login'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                </App>
            </HashRouter>
        )

    }
}