import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/store/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtro/filtro.actions';

export interface AppState{
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducer:ActionReducerMap<AppState> = {
    todos : todoReducer,
    filtro: filtroReducer
}
