import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpserviceService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  apikey = 'tgkU6ZyimSQKXw6qW8dkfQ==STlAWneX7F2gHrGm';
  key = '2f29dd79e1msh12b8241940dcc09p19d791jsn3fdedeac5753';
  value = 'https://api.api-ninjas.com/v1/weather?city=';
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
