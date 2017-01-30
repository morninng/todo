import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() content;
  constructor() { }

  ngOnInit() {
      console.log("ContentComponent ngoninit", this.content);
  }

  ngOnChanges(){
    console.log("ContentComponent ng on change", this.content);

  }

}
