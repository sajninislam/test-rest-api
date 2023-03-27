import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
 
  post='';
  parentPost: any[] = []; 
  text: string = '';
  constructor(){}
  ngOnInit() {
  }

  addPost(post: any){
    console.log(post);
    this.parentPost.push(post);

  }

  childEvent(data:any){
    this.text = data;
    alert( this.text)
  }
}
