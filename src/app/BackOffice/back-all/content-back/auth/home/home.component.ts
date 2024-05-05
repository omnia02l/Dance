
import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { UserDTO } from "../../../../../core/models/userDTO";
import { AccountService } from "../../../../../core/services/account.service";
import {AuthService} from "../../../../../core/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  principal!: UserDTO;
  role!:string;
  items: MenuItem[];

  constructor(private accountService: AccountService,private authService:AuthService) {
    this.getPrincipal();

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
    // Autres initialisations si nécessaires
  }

  getPrincipal() {
    this.accountService.getPrincipal().subscribe({
      next: (data) => {
        this.principal = data;
      }
    });
  }
  logout() {
    this.authService.logout();

  }

}
