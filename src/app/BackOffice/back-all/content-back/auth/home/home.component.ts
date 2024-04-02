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
      { label: 'Training', icon: 'pi pi-fw pi-pencil',  routerLink: ['/training']},
      { label: 'Profile', icon: 'pi pi-fw pi-cog', routerLink: ['/profile'] }
    ];
  }
  ngOnInit(): void {

  }

}
