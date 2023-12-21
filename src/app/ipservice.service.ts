import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpserviceService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  apikey = 'tgkU6ZyimSQKXw6qW8dkfQ==STlAWneX7F2gHrGm';
  getApi(location: any) {
    return this.http.get(
      'https://api.api-ninjas.com/v1/weather?city=' + location,
      {
        headers: {
          'X-Api-Key': this.apikey,
        },
      }
      //  headers: {
      //   'X-Api-Key': this.apikey;
      // },
    );
  }
}
