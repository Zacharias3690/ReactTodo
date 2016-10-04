import * as React from "react";
import * as ReactDOM from "react-dom";

import './styles/main.scss';

import AppBar from "./components/AppBar/AppBar"


const MOUNT_NODE = document.getElementById("root");

let render = () => {
    ReactDOM.render(
        <div>
            <AppBar title="TODO App"/>
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


