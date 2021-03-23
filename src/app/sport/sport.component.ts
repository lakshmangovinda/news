import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private service: NewapiService) { }
sport:any=[];
sportnews:any = [];
  ngOnInit(): void {
this.service.getsports().subscribe((data)=>{
this.sport = data;
this.sportnews = this.sport.articles;
console.log(this.sportnews);
});
  }


}
