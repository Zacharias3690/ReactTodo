import * as React from 'react';
import './AppBar.scss';

class AppBarProps implements React.Props<AppBar> {
    title: String;
}

export default class AppBar extends React.Component<AppBarProps, void> {
    render() {
        return (
            <div className="c-app-bar">
                <h1 className="c-app-bar__title">{this.props.title}</h1>
            </div>
        );
    };
}