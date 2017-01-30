import { Component, OnInit } from '@angular/core';
import {TODO} from './../../interface/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo :TODO= {content: "aaa", status:false}

  constructor() { }

  ngOnInit() {
  }

  onChecked(data){
    this.todo = {content:this.todo.content, status: data.status};
  }

  onChecked2(data){
    this.todo.status = data.status;
  }
  onUpdateContent(data){
    this.todo.content = data.content;
  }

  input_text(value){
    this.todo.content = value;
  }

}
