/**
 * Created by Window on 5/15/2017.
 */
import  {Component, Output , EventEmitter} from '@angular/core';



@Component({
    selector : 'todo-input',
    template : `<input type="text" [(ngModel)]="title">
                <button (click)="addNTodoItem()"> add</button>
               `

})

export class  TodoInputComponent{
    public  title : string;
    @Output() onAddTodoItem : EventEmitter<any> = new EventEmitter<any>();
    constructor(){}

    addNTodoItem(){
        this.onAddTodoItem.emit({
            title : this.title,
            completed: false
        });
        this.title = '';
    }
}