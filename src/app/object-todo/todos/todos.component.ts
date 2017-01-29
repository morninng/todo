import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

  constructor() { }

  TodoData = {
    id_1:{content:"aaa", status:false},
    id_2:{content:"bbb", status:false},
    id_3:{content:"bbb", status:false}
  }


  ngOnInit() {
  }

  onChecked(data){
    this.TodoData[data.key] = Object.assign({},this.TodoData[data.key],{status:data.status} );
  }

  onChecked2(data){
    let updated_object = {};
    updated_object[data.key] = Object.assign({},this.TodoData[data.key],{status:data.status} )
    this.TodoData = Object.assign({}, this.TodoData ,updated_object )
  }

  add_todo(){
    const key = this.generate_id();
    let new_object = {};
    new_object[key] = {content:"eee", status:false};
    this.TodoData = Object.assign({}, this.TodoData ,new_object )
  }

  add_todo2(){
    const key = this.generate_id();
    this.TodoData[key]  = {content:"fff", status:false};
  }


  private generate_id(){
    return Date.now();
  }
  

}

