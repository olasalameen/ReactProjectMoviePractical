import React, { Component } from 'react';
import { Router, Switch } from 'react-router';
import AppRoute from '../layouts/AppRoute';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages';
import Details from '../pages/details';

export default class app extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // auth: sessionStorage.getItem("wm.auth") !== null ? JSON.parse(sessionStorage.getItem("wm.auth")) : {}
        };
    }

    render() {
        const { history } = this.props;

        return (
            <Router history={history}>
                <Switch>
                    <AppRoute exact path="/" component={Login} layout={LoginLayout} />
                    <AppRoute exact path="/search/:search" component={Login} layout={LoginLayout} />
                    <AppRoute exact path="/movie/:id" component={Details} layout={LoginLayout} />
                 
                </Switch>

            </Router>
        )
    }
}
