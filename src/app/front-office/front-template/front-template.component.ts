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

  constructor(private accountService: AccountService) {
    this.getPrincipal();
    
    this.items = [
      { 
        label: 'Home', 
        icon: 'pi pi-fw pi-home', 
        routerLink: ['/home'],
        items: [
          { label: 'Sub Item 1', icon: 'pi pi-fw pi-plus', routerLink: ['/home/subitem1'] },
          { label: 'Sub Item 2', icon: 'pi pi-fw pi-plus', routerLink: ['/home/subitem2'] }
        ]
      },
      { 
        label: 'Profile', 
        icon: 'pi pi-fw pi-cog', 
        routerLink: ['/profile'],
        items: [
          { label: 'Edit Profile', icon: 'pi pi-fw pi-user-edit', routerLink: ['/profile/edit'] },
          { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/profile/settings'] }
        ]
      },
      { 
        label: 'Camera', 
        icon: 'pi pi-fw pi-camera', 
        routerLink: ['/QrScanner'],
        items: [
          { label: 'Gallery', icon: 'pi pi-fw pi-image', routerLink: ['/QrScanner/gallery'] },
          { label: 'Capture', icon: 'pi pi-fw pi-video', routerLink: ['/QrScanner/capture'] }
        ]
      },
      { 
        label: 'Store', 
        icon: 'pi pi-shopping-cart', 
        //routerLink: ['/produits'],
        items: [
          { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: ['/produits'] },

          { label: 'Cart Item', icon: 'pi pi-shopping-cart', routerLink: ['/shopcart'] },
          { label: 'Payment', icon: 'pi pi-credit-card', routerLink: ['/payment'] },
          { label: 'My Orders', icon: 'pi pi-shopping-bag', routerLink: ['myorders'] }

        ]
      }
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