import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { AccountmanagementComponent } from './BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component';
import { ProfileComponent } from './BackOffice/back-all/content-back/accountmanagement/profile/profile.component';
import { ContentBackComponent } from './BackOffice/back-all/content-back/content-back.component';
import { AddproductComponent } from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import { AddCategoryComponent } from './BackOffice/back-all/content-back/store/category/add-category/add-category.component';
import { CategoryListComponent } from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';
import { UpdateCategoryComponent } from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import { ProductDetailComponent } from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';
import { ProductListComponent } from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import { UpdateProductComponent } from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import { FooterBackComponent } from './BackOffice/back-all/footer-back/footer-back.component';
import { NavbarComponent } from './BackOffice/back-all/navbar/navbar.component';
import { SidebarComponent } from './BackOffice/back-all/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from "./core/services/Auth.interceptor";
import { ContentFrontComponent } from './front-office/front-all/content-front/content-front.component';
import { FooterFrontComponent } from './front-office/front-all/footer-front/footer-front.component';
import { FrontAllComponent } from './front-office/front-all/front-all.component';
import { HeaderFrontComponent } from './front-office/front-all/header-front/header-front.component';

import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultiSelectModule } from "primeng/multiselect";

import { FullCalendarModule } from "@fullcalendar/angular";
import { NgChartsModule } from 'ng2-charts';
import { InputNumberModule } from "primeng/inputnumber";
import { DancehallComponent } from './BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component';
import { TrainingComponent } from './BackOffice/back-all/content-back/trainingmanagement/training/training.component';
import { TrainingmanagementComponent } from './BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component';

import { AddDancestyleToCategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/add-dancestyle-to-category/add-dancestyle-to-category.component';
import { AddcompetitionComponent } from './BackOffice/back-all/content-back/CompetitionM/addcompetition/addcompetition.component';
import { AdddancecategoryandstyleComponent } from './BackOffice/back-all/content-back/CompetitionM/adddancecategoryandstyle/adddancecategoryandstyle.component';
import { CompetitionDetailsComponent } from './BackOffice/back-all/content-back/CompetitionM/competition-details/competition-details.component';
import { ListCompetitionsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-competitions/list-competitions.component';
import { ListDancecategoriesandstylesComponent } from './BackOffice/back-all/content-back/CompetitionM/list-dancecategoriesandstyles/list-dancecategoriesandstyles.component';
import { ListRegisttrationsComponent } from './BackOffice/back-all/content-back/CompetitionM/list-registtrations/list-registtrations.component';
import { ListTeamsCompComponent } from './BackOffice/back-all/content-back/CompetitionM/list-teams-comp/list-teams-comp.component';
import { RegistrationDetailComponent } from './BackOffice/back-all/content-back/CompetitionM/registration-detail/registration-detail.component';
import { TeamDancersComponent } from './BackOffice/back-all/content-back/CompetitionM/team-dancers/team-dancers.component';
import { UpdateDancecategoryComponent } from './BackOffice/back-all/content-back/CompetitionM/update-dancecategory/update-dancecategory.component';
import { UpdatecompComponent } from './BackOffice/back-all/content-back/CompetitionM/updatecomp/updatecomp.component';
import { AddRegistrationComponent } from './front-office/front-all/content-front/CompetitionM/add-registration/add-registration.component';
import { DetailsCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/details-compfront/details-compfront.component';
import { ListCompfrontComponent } from './front-office/front-all/content-front/CompetitionM/list-compfront/list-compfront.component';


import { CalendercompComponent } from './front-office/front-all/content-front/CompetitionM/calendercomp/calendercomp.component';

import { AddperformanceComponent } from './BackOffice/back-all/content-back/CompetitionM/addperformance/addperformance.component';
import { CalenderbackcompComponent } from './BackOffice/back-all/content-back/CompetitionM/calenderbackcomp/calenderbackcomp.component';
import {ListperformanceComponent} from './front-office/front-all/content-front/CompetitionM/listperformance/listperformance.component';
import { CommonModule } from '@angular/common';

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
    UpdateCategoryComponent,
    AccountmanagementComponent,
    ProfileComponent,

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
      ListperformanceComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    TableModule,
    InputTextModule,
    DataViewModule,
    DialogModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    MultiSelectModule,
    FullCalendarModule,
    InputNumberModule,
    ReactiveFormsModule,
    NgChartsModule,
    CommonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
