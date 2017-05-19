import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import  { HeaderComponent } from './header/header.component';
import  { FooterComponent } from './footer/footer.component';
import  { TodoListComponent } from './todo/list/todo-list.component';
import  { TodoItemComponent } from './todo/item/todo-item.component';
import  { TodoInputComponent } from './todo/input/todo-input.component';
import  { CardComponent } from  './card/card.component';
import  { TagDirectiveList } from  './directive/tag.directive';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent,TodoListComponent, TodoItemComponent, TodoInputComponent, CardComponent , TagDirectiveList 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


