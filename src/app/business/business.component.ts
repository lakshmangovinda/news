import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private service: NewapiService) {}
  bussiness: any = [];
  bussinessnews: any = [];
  ngOnInit(): void {
    this.service.getbusiness().subscribe((data) => {
      this.bussiness = data;
      this.bussinessnews = this.bussiness.articles;
      console.log(this.bussinessnews);
    });
  }
}
