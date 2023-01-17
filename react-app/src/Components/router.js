import React from 'react';
import { Switch, Route } from "react-router-dom";
import Products from './products';
import Main from './Views/Main';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </div>
    )
}

function Users() {
    return <h2>Users</h2>;
}

export default Router;