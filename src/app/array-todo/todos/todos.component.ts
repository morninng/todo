import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {TODO} from './../../interface/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {


  constructor() { }

  TodoData :TODO[]= [
    {content: "aaa", status:false},
    {content: "bbb", status:false},
    {content: "ccc", status:false},
  ]

  ngOnInit() {
  }

  onChecked(data){
    const updated_todo = {content:this.TodoData[data.index].content, status: data.status};
    this.TodoData[data.index] = updated_todo;
  }

  onChecked2(data){
    this.TodoData[data.index].status = data.status;
  }


  addTodo(){
    this.TodoData.push({content:"ddd", status:false});
  }

  addTodo2(){
    this.TodoData = [... this.TodoData, {content:"eee", status:false}];
  }

}
