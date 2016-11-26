import { combineReducers } from 'redux';
import {ADD_TODO, TOGGLE_TODO} from './actions';

let initialState : any = {
    todos: []
};

function todos(state = initialState, action: any) : any {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        isComplete: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, idx) => {
                    if(idx === action.id) {
                        return Object.assign({}, todo, {
                            isComplete: !todo.isComplete
                        });
                    }

                    return todo;
                })
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;