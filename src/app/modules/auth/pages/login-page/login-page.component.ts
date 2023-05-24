import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "../../components/login-form/login-form.component";

@Component({
  selector: 'app-login-page',
  template: '',
})
export class LoginPageComponent implements OnInit {
  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.matDialog.open(LoginFormComponent, {
      disableClose:true,
      enterAnimationDuration:'2s',
      exitAnimationDuration:'2s'
    })
  }

}
