import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { TechComponent } from './tech/tech.component';
import { SportComponent } from './sport/sport.component';
import { HttpClientModule } from '@angular/common/http';
import { BusinessComponent } from './business/business.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnewsComponent,
    TechComponent,
    SportComponent,
    BusinessComponent,
    ScienceComponent,
    HealthComponent,
    EntertainmentComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
