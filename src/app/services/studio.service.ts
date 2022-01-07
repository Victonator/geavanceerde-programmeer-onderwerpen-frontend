import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serie} from "../models/serie";
import {Studio} from "../models/studio";

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor(private httpClient: HttpClient) { }

  url = "https://edge-service-server-victonator.cloud.okteto.net/"

  getStudios(): Observable<Studio[]> {
    return this.httpClient.get<Studio[]>(this.url + "studios/all");
  }

  getStudioByName(name: string): Observable<Studio> {
    return this.httpClient.get<Studio>(this.url + "studio/" + name + '/series');
  }
}
