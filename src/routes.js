import React from "react";
import {Switch, Route} from "react-router-dom";

import Board from "./Views/Board/Board";
import Chat from "./Views/Chat/Chat";
import Login from "./Views/Login/Login";

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/chat" component={Chat} />
    </Switch>
)