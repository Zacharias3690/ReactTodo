import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore } from "redux";
import todoApp from "./reducers";
import { Provider } from "react-redux";

import './styles/main.scss';

import AppBar from "./components/AppBar/AppBar"
import Home from "./routes/Home/Home";

const MOUNT_NODE = document.getElementById("root");

let store = createStore(todoApp);

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
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
        </Provider>,
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


