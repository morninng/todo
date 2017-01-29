import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-object-todo',
  templateUrl: './object-todo.component.html',
  styleUrls: ['./object-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
