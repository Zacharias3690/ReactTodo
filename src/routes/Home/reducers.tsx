import { combineReducers } from 'redux';
import { ADD_TODO, addTodo } from './actions';

let initialState = {
    todos: []
}

function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    isComplete: false
                }
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;