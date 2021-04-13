import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'homepage';
  constructor(router: Router) {}
}
export class ToolbarOverviewExample {}
export class MenuIconsExample {}
export class CardFancyExample {}