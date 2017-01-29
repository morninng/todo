import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  @Input() content;
  constructor() { }

  ngOnInit() {
      console.log("content component ngoninit", this.content);
  }
  ngOnChanges(){
    console.log("content component ng on change", this.content);

  }

}
