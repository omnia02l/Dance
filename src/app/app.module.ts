import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontAllComponent } from './front-office/front-all/front-all.component';
import { FooterFrontComponent } from './front-office/front-all/footer-front/footer-front.component';
import { ContentFrontComponent } from './front-office/front-all/content-front/content-front.component';
import { HeaderFrontComponent } from './front-office/front-all/header-front/header-front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { BackAllComponent } from './BackOffice/back-all/back-all.component';


import { NavbarComponent } from './BackOffice/back-all/navbar/navbar.component';
import { SidebarComponent } from './BackOffice/back-all/sidebar/sidebar.component';
import { FooterBackComponent } from './BackOffice/back-all/footer-back/footer-back.component';
import { ContentBackComponent } from './BackOffice/back-all/content-back/content-back.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UpdateProductComponent } from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import { ProductDetailComponent } from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';

import { AddCategoryComponent } from './BackOffice/back-all/content-back/store/category/add-category/add-category.component';
import { CategoryListComponent } from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';

import { AccountmanagementComponent } from './BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component';
import {AuthInterceptor} from "./core/services/Auth.interceptor";
import { ProfileComponent } from './BackOffice/back-all/content-back/accountmanagement/profile/profile.component';

import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultiSelectModule } from "primeng/multiselect";

import { FullCalendarModule } from "@fullcalendar/angular";
import { NgChartsModule } from 'ng2-charts';
import { InputNumberModule } from "primeng/inputnumber";
import { DancehallComponent } from './BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component';
import { TrainingComponent } from './BackOffice/back-all/content-back/trainingmanagement/training/training.component';
import { TheatrePlanListComponent } from './BackOffice/back-all/content-back/componentsTickets/theatre-plan-list/theatre-plan-list.component';
import { SeatSelectorComponent } from './BackOffice/back-all/content-back/componentsTickets/seat-selector/seat-selector.component';
import { PriceListComponent } from './BackOffice/back-all/content-back/componentsTickets/price-list/price-list.component';
import { TicketListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-list/ticket-list.component';
import { TicketCardListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-card-list/ticket-card-list.component';
import { TicketScannerListComponent } from './BackOffice/back-all/content-back/componentsTickets/ticket-scanner-list/ticket-scanner-list.component';
import { PursacheTransactionListComponent } from './BackOffice/back-all/content-back/componentsTickets/pursache-transaction-list/pursache-transaction-list.component';
import { PlaceListComponent } from './BackOffice/back-all/content-back/componentsTickets/place-list/place-list.component';
import { VenuePlanListComponent } from './BackOffice/back-all/content-back/componentsTickets/venue-plan-list/venue-plan-list.component';
import { ReservationPlaceComponent } from './front-office/front-all/content-front/componentsTickets/reservation-place/reservation-place.component';
import { SeatNumbersComponent } from './front-office/front-all/content-front/componentsTickets/seat-numbers/seat-numbers.component';
import { TicketCardComponent } from './front-office/front-all/content-front/componentsTickets/ticket-card/ticket-card.component';

import { VenuePlanDialogComponent } from './BackOffice/back-all/content-back/componentsTickets/venue-plan-dialog/venue-plan-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DiscountDialogComponent } from './front-office/front-all/content-front/componentsTickets/discount-dialog/discount-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { ShopcartComponent } from './front-office/front-all/content-front/store/shopcart/shopcart.component';
import { ProductService } from './core/services/product.service';
import { ProductListFrontComponent } from './front-office/front-all/content-front/store/product-list-front/product-list-front.component';
import { ProductSalesComponent } from './BackOffice/back-all/content-back/store/product-sales/product-sales.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PaymentFormComponent } from './front-office/front-all/content-front/store/payment-form/payment-form.component';
import { RecommendedProductsComponent } from './front-office/front-all/content-front/store/recommended-products/recommended-products.component';
import { AddproductComponent } from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import { ProductListComponent } from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import { UpdateCategoryComponent } from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { QrScannerComponent } from './front-office/front-all/content-front/componentsTickets/qr-scanner/qr-scanner.component';
import { PurchaseTransactionComponent } from './front-office/front-all/content-front/componentsTickets/purchase-transaction/purchase-transaction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListRegisttrationsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-registtrations/list-registtrations.component';
import { RegistrationDetailComponent } from './BackOffice/back-all/content-back/CompetitionM/registration-detail/registration-detail.component';
import { AddRegistrationComponent } from './front-office/front-all/content-front/CompetitionM/add-registration/add-registration.component';
import { TeamDancersComponent } from './BackOffice/back-all/content-back/CompetitionM/team-dancers/team-dancers.component';
import { CalendercompComponent } from './front-office/front-all/content-front/CompetitionM/calendercomp/calendercomp.component';
import { CalenderbackcompComponent } from './BackOffice/back-all/content-back/CompetitionM/calenderbackcomp/calenderbackcomp.component';
import { AddperformanceComponent } from './BackOffice/back-all/content-back/CompetitionM/addperformance/addperformance.component';
import { TrainingmanagementComponent } from './BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component';
import { AddDancestyleToCategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/add-dancestyle-to-category/add-dancestyle-to-category.component';
import { AddcompetitionComponent } from './BackOffice/back-all/content-back/CompetitionM/addcompetition/addcompetition.component';
import { AdddancecategoryandstyleComponent } from './BackOffice/back-all/content-back/CompetitionM/adddancecategoryandstyle/adddancecategoryandstyle.component';
import { CompetitionDetailsComponent } from './BackOffice/back-all/content-back/CompetitionM/competition-details/competition-details.component';
import { ListCompetitionsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-competitions/list-competitions.component';
import { ListDancecategoriesandstylesComponent } from './BackOffice/back-all/content-back/CompetitionM/list-dancecategoriesandstyles/list-dancecategoriesandstyles.component';

import { ListTeamsCompComponent } from './BackOffice/back-all/content-back/CompetitionM/list-teams-comp/list-teams-comp.component';


import { UpdateDancecategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/update-dancecategory/update-dancecategory.component';
import { UpdatecompComponent } from './BackOffice/back-all/content-back/CompetitionM/updatecomp/updatecomp.component';

import { DetailsCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/details-compfront/details-compfront.component';
import { ListCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/list-compfront/list-compfront.component';
import {ListperformanceComponent} from './front-office/front-all/content-front/CompetitionM/listperformance/listperformance.component';
import { CommonModule } from '@angular/common';
import { AddtownwithvenuesComponent } from './BackOffice/back-all/content-back/CompetitionM/addtownwithvenues/addtownwithvenues.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontAllComponent,
    FooterFrontComponent,
    ContentFrontComponent,
    HeaderFrontComponent,
    BackAllComponent,
    NavbarComponent,
    SidebarComponent,
    FooterBackComponent,
    ContentBackComponent,
    ProductListComponent,
    AddproductComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    CategoryListComponent,
    AddCategoryComponent,
    AccountmanagementComponent,
    ProfileComponent,
    DancehallComponent,
    TrainingComponent,
    ShopcartComponent,
    ProductListFrontComponent,
    ProductSalesComponent,
    ProductSalesComponent,
    PaymentFormComponent,
    RecommendedProductsComponent,
        UpdateCategoryComponent,

    TheatrePlanListComponent,

    SeatSelectorComponent,
    PriceListComponent,
    TicketListComponent,
    TicketCardListComponent,
    TicketScannerListComponent,
    PursacheTransactionListComponent,
    PlaceListComponent,
    VenuePlanListComponent,
    ReservationPlaceComponent,
    SeatNumbersComponent,
    TicketCardComponent,

    VenuePlanDialogComponent,
    DiscountDialogComponent,
    QrScannerComponent,
    PurchaseTransactionComponent,
    

    TrainingmanagementComponent,
    DancehallComponent,
    TrainingComponent,
    ListRegisttrationsComponent,
    RegistrationDetailComponent,

    AddRegistrationComponent,
      AdddancecategoryandstyleComponent,
      ListDancecategoriesandstylesComponent,
      AddDancestyleToCategoryComponent,
      UpdateDancecategoryComponent,
      AddcompetitionComponent,
      ListCompetitionsComponent,
      CompetitionDetailsComponent,
      UpdatecompComponent,
      ListCompfrontComponent,
      DetailsCompfrontComponent,
      ListTeamsCompComponent,
      TeamDancersComponent,
      CalendercompComponent,
      CalenderbackcompComponent,
      AddperformanceComponent,
      ListperformanceComponent,
      AddtownwithvenuesComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DataViewModule,
    DialogModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    MatCardModule,
    MatIconModule,
    InputTextareaModule,
    MultiSelectModule,
    FullCalendarModule,
    UcWidgetModule,
    InputNumberModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgChartsModule,
    CommonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
