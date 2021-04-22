import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionweatherService {

  constructor( private httpClient:HttpClient) { }
  keyApi:string = 'appid=937924d2be534fe6059f3c8c6fbf9c72';
  enlace:string = `http://api.openweathermap.org/data/2.5/weather?${this.keyApi}&units=metric&q= `

 getClima(countryCode:string, stateCode:string){
   return this.httpClient.get(`${this.enlace}${countryCode},${stateCode}`)
 }
}
