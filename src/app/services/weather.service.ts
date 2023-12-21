import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { weatherData } from '../models/weather.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  weatherData: any;

  // getweatherData(cityName: string): Observable<weatherData> {
  //   //:Observable <weatherData> you are create interface and name is weatherData
  //   return this.http.get<weatherData>(environment.weatherapiBaseurl, {
  //     headers: new HttpHeaders()
  //       .set(
  //         environment.XRapidAPIHostheaderName,
  //         environment.XRapidAPIHostheadervalue
  //       )
  //       .set(
  //         environment.XRapidAPIKeyheaderName,
  //         environment.XRapidAPIHostheadervalue
  //       ),
  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units', 'metric')
  //       .set('mode', 'json'),
  //   });
  // }
}
