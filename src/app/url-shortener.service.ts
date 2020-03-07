import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
      endpoint = 'https://www.googleapis.com/urlshortener/v1/url';
  constructor(private http: HttpClient) { }

  shortenURL(url: string) {
        const headers = new HttpHeaders;
        headers.append('Content-Type', 'application/json');

        const data = {
              longUrl: url
        };

        return this.http.post(this.endpoint, data, {headers: headers});
  }
}
