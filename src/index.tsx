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
            <div className="container">
                <Router history={browserHistory}>
                    <Route path="/" component={Home} todoItems={[
                    { text: 'test1', isComplete: false },
                    { text: 'test2', isComplete: true },
                    { text: 'test3', isComplete: false }
                    ]}/>
                </Router>
            </div>
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


