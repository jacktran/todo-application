import { Component , ViewChildren , AfterViewInit , QueryList } from '@angular/core';
import  { TodoListComponent } from './todo/list/todo-list.component';
import  { TodoItemComponent } from './todo/item/todo-item.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  @ViewChildren(TodoItemComponent)  todoItems : QueryList<TodoItemComponent>;
    title = 'app works!';
    public  serializedTodoList: string = '';

    ngAfterViewInit(){
        this.todoItems.changes.subscribe((r) => {this.calculateSerializedTodoList()})
    }
    calculateSerializedTodoList() {
        setTimeout(() => { this.serializedTodoList = this.todoItems.map(p => p.todoItem.title).join(', '); console.log(this.serializedTodoList)}, 0);
    }
}
