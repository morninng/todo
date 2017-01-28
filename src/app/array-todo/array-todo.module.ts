import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTodoRoutingModule } from './array-todo-routing.module';
import { ArrayTodoComponent } from './array-todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    ArrayTodoRoutingModule
  ],
  declarations: [ArrayTodoComponent, TodosComponent, TodoComponent]
})
export class ArrayTodoModule { }
