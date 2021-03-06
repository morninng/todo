import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:"todos", component: TodosComponent},
      {path:"", component: TodosComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ArrayTodoRoutingModule { }
