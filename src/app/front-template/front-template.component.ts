
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserDTO } from 'src/app/core/models/userDTO';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-front-template',
  templateUrl: './front-template.component.html',
  styleUrls: ['./front-template.component.css']
})
export class FrontTemplateComponent {

  principal!: UserDTO;
  items: MenuItem[];
  constructor( private accountService: AccountService)
  {
    this.getPrincipal();

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      { label: 'My-events', icon: 'pi pi-fw pi-calendar', routerLink: ['/my-events']},
      { label: 'Training', icon: 'pi pi-fw pi-pencil',  routerLink: ['/training']},
      { label: 'All posts', icon: 'pi pi-fw pi-cog', routerLink: ['/all-post'] },
      { label: 'Profile', icon: 'pi pi-fw pi-cog', routerLink: ['/profile'] }
    ];
  }
  getPrincipal() {
    this.accountService.getPrincipal().subscribe({
      next: (data) => {
        this.principal = data;
      }
    });
  }
}
