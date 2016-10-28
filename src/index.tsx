import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import './styles/main.scss';

import AppBar from "./components/AppBar/AppBar"
import Home from "./routes/Home/Home";

const MOUNT_NODE = document.getElementById("root");

let render = () => {
    ReactDOM.render(
        <div>
            <AppBar title="Todo App"/>
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
            </Router>
        </div>,
        MOUNT_NODE
    );
};

if((module as any).hot) {
    (module as any).hot.accept(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();


