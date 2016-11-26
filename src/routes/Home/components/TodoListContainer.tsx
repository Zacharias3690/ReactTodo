
import { connect } from 'react-redux';
import { TodoList } from './TodoList';
import * as TodoActions from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(TodoActions.toggleTodo(id));
        }
    }
}

const mapStateToProps = (state) => {
    return state.todos;
};

const TodoListContainer = connect(
    mapStateToProps
)(TodoList);

export default TodoListContainer;