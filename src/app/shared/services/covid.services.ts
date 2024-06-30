import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CovidService {

    private apiUrl = 'https://covid-193.p.rapidapi.com';
    private headers = new HttpHeaders({
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '0d0eacb2fdmsh4556ebbcee64a67p1b7276jsn95d401b25b2c'
  });


  constructor(private httpClient: HttpClient) {}

  getCountries(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/countries`, { headers: this.headers })
  }

  getStatistics(country: string = 'all'): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/statistics`, {
        headers: this.headers,
        params: { country }
    });
  }
  
}