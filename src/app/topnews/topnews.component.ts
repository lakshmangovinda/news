import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css'],
})
export class TopnewsComponent implements OnInit {
  constructor(private service: NewapiService) {}
  Topnews: any = [];
  news: any = [];
  ngOnInit(): void {
    this.service.gettopnews().subscribe((data) => {
      this.news = data;
      this.Topnews = this.news.articles;
      console.log(this.Topnews);
    });
  }
}
