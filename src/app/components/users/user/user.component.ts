import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUser} from '../../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  @Output()
  selectedUser = new EventEmitter<IUser>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  setSelectedUser(): void {
    this.selectedUser.emit(this.user)
  }

  getDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }
}
