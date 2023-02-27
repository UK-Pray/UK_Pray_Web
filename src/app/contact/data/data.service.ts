import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrayerWarrior } from './prayer-warrior';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private root: string;
  private corsHeaders: Headers;

  constructor(private http: HttpClient) { 
    this.root = 'https://notification-service.ukpray.com';
    this.corsHeaders = new Headers({
    'Access-Control-Allow-Origin': "https://ukpray.com",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Expose-Headers": "Set-Cookie",
    "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token, X-Requested-With, Accept, Expires, Last-Modified, Cache-Control",
    "Access-Control-Allow-Methods": "GET, POST",

  });}

  getStates(): Observable<string[]> {
    return of([
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
      'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
      'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
      'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
      'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ]);
  }


  postPrayerWarriorForm(prayerWarrior: PrayerWarrior) : Observable<any> {

    return this.http.post("https://notification-service.ukpray.com/notification/prayer-partner", prayerWarrior)
  }
}
