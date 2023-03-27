import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

@Input() childPosts: any[] = [];
data: string = 'String data gooooo...'
@Output() passedEvent = new EventEmitter();
  ngOnInit() {
  }

  passEventTest(){
    this.passedEvent.emit(this.data)
  }
}
