/**
 * Created by Window on 5/15/2017.
 */
import  { Component,Input, EventEmitter , Output} from '@angular/core';
import  { Todo} from './todo';


@Component({
    selector : 'todo-item',
    template : `
                <input type="checkbox"   [(ngModel)]="todoItem.completed" (change)="onCompletionChanged()" >
                  <span [class.completed]="todoItem.completed">{{todoItem.title}}</span>  
                `,
    styles : ['.completed {text-decoration: line-through}']
})


export  class TodoItemComponent {
    @Input('data') todoItem : Todo;
    @Output() onChange : EventEmitter<any> = new EventEmitter<any>();
    constructor(){}

    onCompletionChanged(){
        //this.onChange.emit();
        this.todoItem.completed ? false : true;
    }
}