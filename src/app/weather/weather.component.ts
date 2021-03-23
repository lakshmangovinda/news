import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  
  constructor(private service: NewapiService, private formBuilder: FormBuilder) { }
weather:any = [];
  ngOnInit(): void {
   
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.service
    .getwether(formValues.location)
    .subscribe(data => {
      this.weather = data;
      console.log(this.weather)
    });
  }

}
