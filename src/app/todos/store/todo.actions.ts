import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Create todo',
    props<{ text: string }>()
);

export const toggleTodo = createAction(
    '[TODO] Toggle Todo',
    props<{ id: string }>()
);

export const editTodo = createAction(
    '[TODO] Edit Todo',
    props<{ id: string , text : string}>()
);

export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: string }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props< { completado: boolean } >()
);

export const clearComplete = createAction(
    '[TODO] Clear Complete Todo'
);