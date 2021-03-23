import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  constructor(private service: NewapiService) { }
  science:any=[];
  sciencenews:any = [];
    ngOnInit(): void {
  this.service.getscience().subscribe((data)=>{
  this.science = data;
  this.sciencenews = this.science.articles;
  console.log(this.sciencenews);
  });
    }

}
