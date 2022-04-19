import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
];

export const todoReducer = createReducer(
    initialState,
    on(actions.createTodo, (state , { text }) => [ ...state,  new Todo(text) ] ),
    on(actions.deleteTodo, (state , { id }) => state.filter( todo => todo.id !== id ) ) ,
    on(actions.toggleAll, ( state, { completado } ) => state.map( todo => ( { ...todo, completado } ) ) ) ,
    on(actions.clearComplete, ( state ) => state.filter( todo => !todo.completado) ) ,

    on(actions.toggleTodo, (state , { id }) =>  {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    completado:  !todo.completado
                }
            }else{
                return todo;
            }
        })
    } ),

    on(actions.editTodo, (state , { id, text }) =>  {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    texto: text
                }
            }else{
                return todo;
            }
        })
    } ),
);