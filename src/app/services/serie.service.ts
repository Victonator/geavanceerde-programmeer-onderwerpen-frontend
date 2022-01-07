import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) { }

  url = "https://edge-service-server-victonator.cloud.okteto.net"

  getSeries(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(this.url + "/series/all");
  }

  getSerieByName(name: string): Observable<Serie> {
    console.log('service')
    console.log(name)
    return this.httpClient.get<Serie>(this.url + "/series/" + name + '/characters');
  }
}
