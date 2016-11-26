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

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <AppBar title="Todo App"/>
                <div className="container">
                    <Router history={browserHistory}>
                        <Route path="/" component={Home}/>
                    </Router>
                </div>
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


