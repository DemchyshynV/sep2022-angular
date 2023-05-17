import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services';
import {IUser} from '../../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!state) {
        this.userService.getById(id).subscribe(value => this.user = value)
      } else {
        this.user = state
      }
    })
  }

}
