import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser

  userId:number;
  constructor() {
  }

  ngOnInit(): void {
  }

  getPosts():void {
    this.userId = this.user.id
  }
}
