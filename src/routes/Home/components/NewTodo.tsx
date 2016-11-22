import * as React from "react";

class NewTodo extends React.Component<void, void> {
    render() {
        return (
            <div className="todo-list__new todo-list__item">
                <input type="text"/>
                <button>Add</button>
            </div>
        )
    }
}

export { NewTodo }