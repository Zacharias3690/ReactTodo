import * as React from "react";
import { TodoList } from "./components/TodoList";
import { TodoItemProps } from "./components/TodoItem";
import { NewTodo } from "./components/NewTodo";

import '../../styles/components/_todo-list.scss';


class HomeProps implements React.Props<Home> {
    todoItems: TodoItemProps[];
    route: any;
}

class TodoItem {
    text: String;
    isComplete: Boolean;
}

export default class Home extends React.Component<HomeProps, void> {
    render() {
        return (
            <div className="c-card">
                <h1 className="c-card__title">My Todo List</h1>
                <div className="c-card__body">
                    <TodoList todoItems={this.props.route.todoItems}></TodoList>
                </div>
                <div className="c-card__footer">
                    <NewTodo></NewTodo>
                </div>
            </div>
        );
    }
}