import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces';
import {urls} from '../contants';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPostByUserId(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${urls.users}/${id}/posts`)
  }
}
