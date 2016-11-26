import * as React from "react";
import TodoListContainer from "./components/TodoListContainer";
import NewTodo from "./components/NewTodo";

import '../../styles/components/_todo-list.scss';

export default class Home extends React.Component<void, void> {
    render() {
        return (
            <div className="c-card">
                <h1 className="c-card__title">My Todo List</h1>
                <div className="c-card__body">
                    <TodoListContainer/>
                </div>
                <div className="c-card__footer">
                    <NewTodo></NewTodo>
                </div>
            </div>
        );
    }
}