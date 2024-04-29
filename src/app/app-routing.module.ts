import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontAllComponent} from './front-office/front-all/front-all.component';
import {BackAllComponent} from './BackOffice/back-all/back-all.component';
import {ProductListComponent} from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import {AddproductComponent} from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import {UpdateProductComponent} from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import {ProductDetailComponent} from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';
import {
  CategoryListComponent
} from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';
import {
  UpdateCategoryComponent
} from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import {
  AccountmanagementComponent
} from "./BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component";
import {ProfileComponent} from "./BackOffice/back-all/content-back/accountmanagement/profile/profile.component";

import {
  TrainingmanagementComponent
} from "./BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component";
import {DancehallComponent} from "./BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component";
import {TrainingComponent} from "./BackOffice/back-all/content-back/trainingmanagement/training/training.component";
import { VenuePlanListComponent } from './BackOffice/back-all/content-back/componentsTickets/venue-plan-list/venue-plan-list.component';
import { SeatSelectorComponent } from './BackOffice/back-all/content-back/componentsTickets/seat-selector/seat-selector.component';
import { PriceListComponent } from './BackOffice/back-all/content-back/componentsTickets/price-list/price-list.component';
import { TicketListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-list/ticket-list.component';
import { TicketCardListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-card-list/ticket-card-list.component';
import { PursacheTransactionListComponent } from './BackOffice/back-all/content-back/componentsTickets/pursache-transaction-list/pursache-transaction-list.component';
import { TicketScannerListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-scanner-list/ticket-scanner-list.component';
import { PlaceListComponent } from './BackOffice/back-all/content-back/componentsTickets/place-list/place-list.component';
import { ReservationPlaceComponent } from './front-office/front-all/content-front/componentsTickets/reservation-place/reservation-place.component';
import { SeatNumbersComponent } from './front-office/front-all/content-front/componentsTickets/seat-numbers/seat-numbers.component';
import { TicketCardComponent } from './front-office/front-all/content-front/componentsTickets/ticket-card/ticket-card.component';
import { canActivateRoleGuard } from './core/services/RoleGard/role-guard.service';

import { ProductListFrontComponent } from './front-office/front-all/content-front/store/product-list-front/product-list-front.component';
import { ShopcartComponent } from './front-office/front-all/content-front/store/shopcart/shopcart.component';
import { ProductSalesComponent } from './BackOffice/back-all/content-back/store/product-sales/product-sales.component';
import { FileUploaderComponent } from './BackOffice/back-all/content-back/store/file-uploader/file-uploader.component';
import { RecommendedProductsComponent } from './front-office/front-all/content-front/store/recommended-products/recommended-products.component';
import { PaymentFormComponent } from './front-office/front-all/content-front/store/payment-form/payment-form.component';
import { ConfirmationComponent } from './front-office/front-all/content-front/store/confirmation/confirmation.component';

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./BackOffice/back-all/content-back/auth/auth.module').then(m => m .AuthModule)},
  { path: '', component:FrontAllComponent,children: [
    {path:'produits',component: ProductListFrontComponent},
    { path: 'shopcart', component: ShopcartComponent },
    { path: 'file', component: FileUploaderComponent },
{ path: 'recommended', component: RecommendedProductsComponent },  
{ path: 'ReserverPlace', component: ReservationPlaceComponent},
{ path: 'Place', component: SeatNumbersComponent},
{ path: 'ticket-card/:userId', component: TicketCardComponent },
{ path: 'payment', component: PaymentFormComponent },
{ path: 'confirm', component: ConfirmationComponent },

]},  {
    path: "admin", component: BackAllComponent, children: [
      { path: 'products/add', component: AddproductComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/update-product/:productId', component: UpdateProductComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'categorys', component: CategoryListComponent },
  { path: 'category/update/:categoryId', component: UpdateCategoryComponent },
  { path: 'ProductSales', component: ProductSalesComponent },
      {path: 'account-management', component: AccountmanagementComponent},
    
      {path: 'profile', component: ProfileComponent},
      {path: 'training-management', component: TrainingmanagementComponent},
      {path: 'dance-hall-management', component: DancehallComponent},
      {path: 'training', component: TrainingComponent},


      { path: 'VenuePlan', component: VenuePlanListComponent},
      { path: 'theatre-reserve/:id', component: SeatSelectorComponent},
      { path: 'Price', component: PriceListComponent},
      { path: 'Ticket', component: TicketListComponent},
      { path: 'TicketCard', component: TicketCardListComponent},
      { path: 'PurchaseTransaction', component: PursacheTransactionListComponent},
      { path: 'TicketScanner', component: TicketScannerListComponent},
      { path: 'Place', component: PlaceListComponent},
     
    ]
  },

 // {path: 'admin/categorys', component: CategoryListComponent},
 // {path: 'admin/category/update/:categoryId', component: UpdateCategoryComponent},
//{ path: 'refresh', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
