import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {fromArrayLike} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }
}
