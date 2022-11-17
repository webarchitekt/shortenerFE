import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Url } from "../models/url";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UrlShortenerService {

  constructor(
    private http: HttpClient
  ) {}

  generateUrl(url: Url): Observable<Url> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<Url>(environment.backendBasePath + '/api/short', url, {'headers':headers});
  }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.backendBasePath + `/list/all`);
  }
}
