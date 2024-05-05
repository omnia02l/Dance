import { Component } from '@angular/core';


import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  role!:string;
  constructor(private authService:AuthService) {
    this.role = this.authService.getFromLocalStorage('role')!;
  }

  logout() {
    this.authService.logout();
  }
}
