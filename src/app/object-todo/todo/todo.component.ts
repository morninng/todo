import { Component, OnInit, Input, Output , EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {TODO} from './../../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input() key;
  @Input() todo :TODO;
  @Output() onChecked = new EventEmitter<any>();
  @Output() onChecked2 = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log("TodoComponent ngOnInit - index", this.key)
  }



  ngOnChanges(){
    console.log("TodoComponent ngonchanges -  key:" + this.key + " - status : " + this.todo.status)
  }

  done(){
    this.onChecked.emit( {key:this.key,status:!this.todo.status});
  }

  done2(){
    this.onChecked2.emit( {key:this.key,status:!this.todo.status});
  }



}
