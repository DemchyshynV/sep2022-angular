import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPagination} from "../interfaces/pagination.interface";
import {ICar} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IPagination<ICar>> {
    return this.httpClient.get<IPagination<ICar>>(urls.cars.full, {params: {page}})
  }

  getById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(urls.cars.byId(id))
  }
}
