import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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

    private apiNewsUrl = 'https://covid-19-news.p.rapidapi.com/v1/covid';
    private newsParams = new HttpParams ();
    
    private newsHeaders = new HttpHeaders({
      'x-rapidapi-key': '0d0eacb2fdmsh4556ebbcee64a67p1b7276jsn95d401b25b2c',
      'x-rapidapi-host': 'covid-19-news.p.rapidapi.com'
    })


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

  getNews(): Observable<any> {
    this.newsParams = this.newsParams.append('q', 'covid');
    this.newsParams = this.newsParams.append('lang', 'en');
    this.newsParams = this.newsParams.append('media', 'true');

    return this.httpClient.get(`${this.apiNewsUrl}`, {
      headers: this.newsHeaders,
      params: this.newsParams
    })
  }
  
}