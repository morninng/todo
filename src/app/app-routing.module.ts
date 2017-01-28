import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:"array-todo", loadChildren: 'app/array-todo/array-todo.module#ArrayTodoModule'},
      {path:"",component:TopComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
