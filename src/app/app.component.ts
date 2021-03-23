import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news';
  istoggel = false;
  navtoggle() {
    console.log(this.istoggel);
    this.istoggel = !this.istoggel;

    /* setTimeout(() => {
    this.istoggel = !this.istoggel
  }, 2000); */
  }
}
