import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {TODO} from './../../interface/todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() index;
  @Input() todo :TODO;
  @Output() onChecked = new EventEmitter<any>();
  @Output() onChecked2 = new EventEmitter<any>();
  @Output() onUpdateContent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log("TodoComponent ngOnInit - index", this.index)
  }

  ngOnChanges(){
    console.log("TodoComponent ngonchanges -  index:" + this.index + " - status : " + this.todo.status)
  }

  done(){
    this.onChecked.emit( {index:this.index,status:!this.todo.status});
  }

  done2(){
    this.onChecked2.emit( {index:this.index,status:!this.todo.status});
  }

  update_content(){
    this.onUpdateContent.emit({index:this.index, content:"sss"});
  }

  ngOnDestroy(){
    console.log("TodoComponent ngonDestroy -  index:" + this.index + " - status : " + this.todo.status)
  }

}
