import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IpserviceService } from './ipservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  weatherData?: weatherData;
  apixuService: any;

  api: any;
  apiVal: any;
  public message = 'Warning';
  constructor(
    private weatherservice: WeatherService,
    private ipservice: IpserviceService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    // this.weatherservice.getweatherData('Berlin').subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.weatherData = response;
    //   },
    // });
    this.apiVal = this.formBuilder.group({ location: [''] });
  }
  sendToAPIXU(formValues: { location: any }) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe((data: weatherData | undefined) => (this.weatherData = data));
    console.log(this.weatherData);
  }

  apifind(formValues: any) {
    this.ipservice.getApi(formValues.location).subscribe((data: any) => {
      this.api = Array.of(data, formValues);
      // if (0 >= formValues.length) {
      //   alert(this.message);
      // } else {
      //   alert(this.message);
      // }

      console.log('IPADDRESS', this.api);
    });
  }
}
