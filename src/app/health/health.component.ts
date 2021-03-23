import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../api/newapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor(private service: NewapiService) {}
  health: any = [];
  healthnews: any = [];
  ngOnInit(): void {
    this.service.gethealth().subscribe((data) => {
      this.health = data;
      this.healthnews = this.health.articles;
      console.log(this.healthnews);
    });
  }
}
