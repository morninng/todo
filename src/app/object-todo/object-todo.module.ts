import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module'

import { ObjectTodoRoutingModule } from './object-todo-routing.module';
import { ObjectTodoComponent } from './object-todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ObjectTodoRoutingModule
  ],
  declarations: [ObjectTodoComponent, TodosComponent, TodoComponent]
})
export class ObjectTodoModule { }
