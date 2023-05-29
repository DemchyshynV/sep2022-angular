import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  name = 'Max'
  hello():void{
    console.log('hello');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
