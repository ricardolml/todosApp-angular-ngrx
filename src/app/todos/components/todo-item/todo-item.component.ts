import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { AppState } from '../../../app.reducer';
import * as actions from '../../store/todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    
    @Input() todo!: Todo;
    @ViewChild('inputFisico') txtInputFisico!: ElementRef;

    chkCompletado!: FormControl;
    txtInput!: FormControl;


    edit = false;

    constructor( private store : Store<AppState>) {
       
    }

    ngOnInit(): void {
        // this.todo.completado = true;
        this.chkCompletado = new FormControl( this.todo.completado );
        this.txtInput = new FormControl( this.todo.texto , Validators.required );


        this.chkCompletado.valueChanges.subscribe( valor => this.store.dispatch( actions.toggleTodo( { id : this.todo.id } ) ) )
    }

    editar(){
        this.edit = true;
        this.txtInput.setValue( this.todo.texto );
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 1);
    }

    terminarEdicion(){
        this.edit = false;
        if( this.txtInput.invalid ) return ;
        if( this.txtInput.value === this.todo.texto ) return ;

        this.store.dispatch( actions.editTodo( { id: this.todo.id , text: this.txtInput.value } ) )
    }

    delete(){
        this.store.dispatch( actions.deleteTodo( { id : this.todo.id } ) )
    }

}
