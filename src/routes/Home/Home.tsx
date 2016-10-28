import * as React from "react";

export default class Home extends React.Component<void, void> {
    render() {
        return (
            <div className="c-card">
                <h1 className="c-card__title">My Todo List</h1>
                <div className="c-card__body">
                    <ul className="todo-list">
                        <li className="todo-list__item">
                            <input type="checkbox"/>
                            <input type="text"/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}