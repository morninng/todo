import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTodoRoutingModule } from './single-todo-routing.module';
import { SingleTodoComponent } from './single-todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    SingleTodoRoutingModule
  ],
  declarations: [SingleTodoComponent, TodosComponent, TodoComponent, ContentComponent]
})
export class SingleTodoModule { }
