
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(text: string) {
    console.log('test');
    return { type: ADD_TODO, text };
}

export function toggleTodo(id: number) {
    return { type: TOGGLE_TODO, id };
}