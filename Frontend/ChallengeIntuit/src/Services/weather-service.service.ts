import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iweather } from '../Interfaces/iweather';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private client: HttpClient) { }
  public async GetData(search: string):Promise<Observable<iweather>>{
    return this.client.get<iweather>(environment.url + "?key=" + environment.api_key + "&q=" + search + "&aqi=no");
  }
}
