import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackAllComponent } from './BackOffice/back-all/back-all.component';
import {
  AccountmanagementComponent
} from "./BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component";
import { ProfileComponent } from "./BackOffice/back-all/content-back/accountmanagement/profile/profile.component";
import { AddproductComponent } from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import {
  CategoryListComponent
} from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';
import {
  UpdateCategoryComponent
} from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import { ProductDetailComponent } from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';
import { ProductListComponent } from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import { UpdateProductComponent } from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import { FrontAllComponent } from './front-office/front-all/front-all.component';

import { AddDancestyleToCategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/add-dancestyle-to-category/add-dancestyle-to-category.component';
import { AddcompetitionComponent } from './BackOffice/back-all/content-back/CompetitionM/addcompetition/addcompetition.component';
import { AdddancecategoryandstyleComponent } from './BackOffice/back-all/content-back/CompetitionM/adddancecategoryandstyle/adddancecategoryandstyle.component';
import { CalenderbackcompComponent } from './BackOffice/back-all/content-back/CompetitionM/calenderbackcomp/calenderbackcomp.component';
import { CompetitionDetailsComponent } from './BackOffice/back-all/content-back/CompetitionM/competition-details/competition-details.component';
import { ListCompetitionsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-competitions/list-competitions.component';
import { ListDancecategoriesandstylesComponent } from './BackOffice/back-all/content-back/CompetitionM/list-dancecategoriesandstyles/list-dancecategoriesandstyles.component';
import { ListRegisttrationsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-registtrations/list-registtrations.component';
import { ListTeamsCompComponent } from './BackOffice/back-all/content-back/CompetitionM/list-teams-comp/list-teams-comp.component';
import { RegistrationDetailComponent } from './BackOffice/back-all/content-back/CompetitionM/registration-detail/registration-detail.component';
import { TeamDancersComponent } from './BackOffice/back-all/content-back/CompetitionM/team-dancers/team-dancers.component';
import { UpdateDancecategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/update-dancecategory/update-dancecategory.component';
import { UpdatecompComponent } from './BackOffice/back-all/content-back/CompetitionM/updatecomp/updatecomp.component';

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


import { ProductListFrontComponent } from './front-office/front-all/content-front/store/product-list-front/product-list-front.component';
import { ShopcartComponent } from './front-office/front-all/content-front/store/shopcart/shopcart.component';
import { ProductSalesComponent } from './BackOffice/back-all/content-back/store/product-sales/product-sales.component';
import { FileUploaderComponent } from './BackOffice/back-all/content-back/store/file-uploader/file-uploader.component';
import { RecommendedProductsComponent } from './front-office/front-all/content-front/store/recommended-products/recommended-products.component';
import { QrScannerComponent } from './front-office/front-all/content-front/componentsTickets/qr-scanner/qr-scanner.component';
import { PurchaseTransaction } from './core/models/purchase-transaction.model';
import { PurchaseTransactionComponent } from './front-office/front-all/content-front/componentsTickets/purchase-transaction/purchase-transaction.component';
import { AddRegistrationComponent } from './front-office/front-all/content-front/CompetitionM/add-registration/add-registration.component';
import { ListCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/list-compfront/list-compfront.component';
import { DetailsCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/details-compfront/details-compfront.component';
import { CalendercompComponent } from './front-office/front-all/content-front/CompetitionM/calendercomp/calendercomp.component';
import { ListperformanceComponent } from './front-office/front-all/content-front/CompetitionM/listperformance/listperformance.component';
import { AddperformanceComponent } from './BackOffice/back-all/content-back/CompetitionM/addperformance/addperformance.component';
import { AddtownwithvenuesComponent } from './BackOffice/back-all/content-back/CompetitionM/addtownwithvenues/addtownwithvenues.component';
import { StatistiqueDanceStylePerYearsComponent } from './BackOffice/back-all/content-back/componentsTickets/statistique-dance-style-per-years/statistique-dance-style-per-years.component';

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./BackOffice/back-all/content-back/auth/auth.module').then(m => m .AuthModule)},
  { path: '', component:FrontAllComponent,children: [
    {path:'produits',component: ProductListFrontComponent},
    { path: 'shopcart', component: ShopcartComponent },
    { path: 'file', component: FileUploaderComponent },
      { path: 'recommended', component: RecommendedProductsComponent },  


      { path: 'add-registration/:id', component: AddRegistrationComponent },
      { path: 'list-compfront', component: ListCompfrontComponent },
      { path: 'details-compfront/:id', component: DetailsCompfrontComponent },
      { path: 'calendercomp', component: CalendercompComponent },
      { path: 'listperformances', component: ListperformanceComponent },

      { path: 'ReserverPlace', component: ReservationPlaceComponent},
      { path: 'Place', component: SeatNumbersComponent},
      { path: 'ticket-card/:userId', component: TicketCardComponent },
      { path: 'purchase-transaction', component:PurchaseTransactionComponent  },
      { path: 'QrScanner', component: QrScannerComponent },
      ]},


{
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

      
      { path: 'list-registrations', component: ListRegisttrationsComponent },
      { path: 'registration-detail/:registrationId', component: RegistrationDetailComponent },
      { path: 'add-dancecategoryandstyle', component: AdddancecategoryandstyleComponent },
      { path: 'list-dancecategoryandstyle', component: ListDancecategoriesandstylesComponent },
      { path: 'add-dancestyle-to-category/:id', component: AddDancestyleToCategoryComponent },
      { path: 'update-dancecategory/:id', component: UpdateDancecategoryComponent },
      { path: 'add-competition', component: AddcompetitionComponent },
      { path: 'list-comp', component: ListCompetitionsComponent },
      { path: 'comp-details/:id', component: CompetitionDetailsComponent },
      { path: 'update-comp/:id', component: UpdatecompComponent },
      { path: 'list-teams-comp', component: ListTeamsCompComponent },
      { path: 'list-teams-dancers', component: TeamDancersComponent },
      { path: 'calendercompback', component: CalenderbackcompComponent },
      { path: 'add-performance', component: AddperformanceComponent },
      { path: 'add-town-and-venues', component: AddtownwithvenuesComponent },


      { path: 'VenuePlan', component: VenuePlanListComponent},
      { path: 'theatre-reserve/:id', component: SeatSelectorComponent},
      { path: 'Price', component: PriceListComponent},
      { path: 'Ticket', component: TicketListComponent},
      { path: 'TicketCard', component: TicketCardListComponent},
      { path: 'PurchaseTransaction', component: PursacheTransactionListComponent},
      { path: 'TicketScanner', component: TicketScannerListComponent},
      { path: 'Place', component: PlaceListComponent},

      { path: 'statdancestyleticket', component: StatistiqueDanceStylePerYearsComponent},
     
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
