import { Component, OnInit } from '@angular/core';
import {PeticionweatherService} from './peticion/peticionweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

public weather;

  constructor(public peticionweatherService:PeticionweatherService){}
  ngOnInit(){}

    getClima(countryCode,stateCode){
    this.peticionweatherService.getClima(countryCode,stateCode).subscribe(
      res =>{console.log(res)
        this.weather = res;
        ;},
      err =>{console.log(err);})
       }

      submitClima(countryCode:HTMLInputElement,stateCode:HTMLInputElement){
        this.getClima(countryCode.value,stateCode.value);
        countryCode.value="";
        stateCode.value="";
        countryCode.focus();
        return false;
      }


}
