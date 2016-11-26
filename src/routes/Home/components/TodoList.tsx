
import * as React from 'react';
import { TodoItemProps, TodoItem } from './TodoItem';

class TodoListProps implements React.Props<TodoList> {
    todos: TodoItemProps[];
}

class TodoList extends React.Component<TodoListProps, void> {

    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((item) => {
                    return (
                        <TodoItem text={item.text} isComplete={item.isComplete}></TodoItem>
                    );
                })}
            </ul>
        )
    }
}

export { TodoList };