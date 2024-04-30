import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items: MenuItem[];
  constructor() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      { label: 'My-events', icon: 'pi pi-fw pi-calendar', routerLink: ['/my-events']},
      { label: 'Training', icon: 'pi pi-fw pi-pencil',  routerLink: ['/training']},
      { label: 'My Post', icon: 'pi pi-fw pi-file', routerLink: ['/post'] },
      { label: 'All posts', icon: 'pi pi-fw pi-cog', routerLink: ['/all-post'] },
      { label: 'Profile', icon: 'pi pi-fw pi-cog', routerLink: ['/profile'] }
    ];
  }
  ngOnInit(): void {
  }

}
