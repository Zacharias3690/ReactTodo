import * as React from 'react';

class TodoItemProps implements React.Props<TodoItem> {
    isComplete: boolean;
    text: string;
}

class TodoItem extends React.Component<TodoItemProps, void> {
    render() {
        return (
            <li className="todo-list__item">
                <input type="checkbox" checked={this.props.isComplete}/>
                <input type="text" value={this.props.text}/>
            </li>
        )
    }
}

export { TodoItem, TodoItemProps };