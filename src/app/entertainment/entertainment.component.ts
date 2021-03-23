import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private service: NewapiService) { }
  entain:any=[];
  entainnews:any = [];
    ngOnInit(): void {
  this.service.getentertainment().subscribe((data)=>{
  this.entain = data;
  this.entainnews = this.entain.articles;
  console.log(this.entainnews);
  });
    }

}
