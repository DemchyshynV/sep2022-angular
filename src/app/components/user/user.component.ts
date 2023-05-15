import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser

  isShow = false

  constructor() {
  }

  ngOnInit(): void {
  }

  showOrHide():void {
    this.isShow = !this.isShow
  }
}
