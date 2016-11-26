import * as React from "react";
import { connect } from 'react-redux';
import { addTodo } from "../actions";

class NewTodo extends React.Component<void, void> {
    render() {
        let input : HTMLInputElement;

        return (
            <div className="todo-list__new todo-list__item">
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        this.props.dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }>
                    <input type="text" placeholder="Enter a new todo...." ref={ node => input = node }/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

NewTodo = connect()(NewTodo);

export default NewTodo;