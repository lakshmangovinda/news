import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportComponent } from './sport/sport.component';
import { TechComponent } from './tech/tech.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {path:"",component:TopnewsComponent},
  {path:"tech",component:TechComponent},
  {path:"sport",component:SportComponent},
  {path:"business",component:BusinessComponent},
  {path:"science",component:ScienceComponent},
  {path:"health",component:HealthComponent},
  {path:"Entertainment",component:EntertainmentComponent},
  {path:"weather",component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
