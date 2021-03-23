import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private service: NewapiService) { }
  tech:any=[];
  technews:any = [];
    ngOnInit(): void {
  this.service.gettech().subscribe((data)=>{
  this.tech = data;
  this.technews = this.tech.articles;
  console.log(this.technews);
  });
    }

}
