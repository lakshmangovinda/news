import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewapiService {
  topnewsurl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  techapi =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  business =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  sports =
    'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  science =
    'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  health =
    'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  entertainment =
    'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c4fa459f278c40ae8dee5feaff6325c6';
  constructor(private http: HttpClient) {}
  gettopnews() {
    return this.http.get(this.topnewsurl);
  }

  gettech() {
    return this.http.get(this.techapi);
  }
  getsports() {
    return this.http.get(this.sports);
  }
  getbusiness() {
    return this.http.get(this.business);
  }
  getscience() {
    return this.http.get(this.science);
  }
  gethealth() {
    return this.http.get(this.health);
  }
  getentertainment() {
    return this.http.get(this.entertainment);
  }
  getwether(location) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=8521c0a47c5304c510b7769b7b99127f&query=${location}`
    );
  }
}
