import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services";

export const isAuthGuard: CanActivateFn = (route, state) => {
  const res = !!inject(AuthService).getAccessToken();

  if (!res){
    inject(Router).navigate(['auth','login'])
  }

  return res;
};
