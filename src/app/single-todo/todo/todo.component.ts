import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TODO} from './../../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo :TODO;
  @Output() onChecked = new EventEmitter<any>();
  @Output() onChecked2 = new EventEmitter<any>();
  @Output() onUpdateContent = new EventEmitter<any>();


  constructor() { }


  ngOnInit() {
    console.log("TodoComponent ngOnInit - index")
  }

  ngOnChanges(){
    console.log("TodoComponent ngonchanges  - status : " + this.todo.status)
  }

  done(){
    this.onChecked.emit( {status:!this.todo.status});
  }

  done2(){
    this.onChecked2.emit( {status:!this.todo.status});
  }

  update_content(){
    this.onUpdateContent.emit({ content:"子供のデータ"});
  }

  ngOnDestroy(){
    console.log("TodoComponent ngonDestroy -  status : " + this.todo.status)
  }




}
