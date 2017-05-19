/**
 * Created by Window on 5/15/2017.
 */
import  {Component, AfterViewInit, ViewChild, ViewChildren, QueryList} from '@angular/core';

import  { Todo } from '../item/todo';
import  { TodoInputComponent } from '../input/todo-input.component';
import  { TodoItemComponent } from '../item/todo-item.component';

@Component({
    selector: 'todo-list',
    template : `
                <p>Add new Todo item</p>
                <todo-input (onAddTodoItem)="add($event)" ></todo-input>
                <h1 *ngIf="todoItems.length > 0">This is your to do list items</h1> 
                 <ul>
                    <li *ngFor="let item of getAll()"><todo-item (onChange)="remove($event)" [data]="item"></todo-item></li>
                </ul>
                <p *ngIf="todoItems.length > 0"> Serialized Todo Items Data:   {{this.todoItemSerialized}}</p>  
                `

})


export  class TodoListComponent  implements AfterViewInit{

    @ViewChild(TodoInputComponent) inputComponent : TodoInputComponent;
    @ViewChildren(TodoItemComponent)  todoItemComponents : QueryList<TodoItemComponent>;

    public  todoItems : Todo[] = [];
    public  todoItemSerialized : String;

    constructor(){}

    ngAfterViewInit(){
        this.todoItemComponents.changes.subscribe((r) => {this.serializeTodoItems()});
    }

    serializeTodoItems(){
       setTimeout(()=>{this.todoItemSerialized = this.todoItemComponents.map(t =>  t.todoItem.title).join(','),0 });
    }

    add(todo : Todo){
        this.todoItems.push(todo);
    }
    remove(todo : Todo ){
        this.todoItems.splice(this.todoItems.indexOf(todo),1);
    }

    getAll(){
        return this.todoItems;
    }

}