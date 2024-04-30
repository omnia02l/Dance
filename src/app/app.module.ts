import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontAllComponent } from './front-office/front-all/front-all.component';
import { FooterFrontComponent } from './front-office/front-all/footer-front/footer-front.component';
import { ContentFrontComponent } from './front-office/front-all/content-front/content-front.component';
import { HeaderFrontComponent } from './front-office/front-all/header-front/header-front.component';
import { FormsModule } from '@angular/forms';
import { BackAllComponent } from './BackOffice/back-all/back-all.component';
import { NavbarComponent } from './BackOffice/back-all/navbar/navbar.component';
import { SidebarComponent } from './BackOffice/back-all/sidebar/sidebar.component';
import { FooterBackComponent } from './BackOffice/back-all/footer-back/footer-back.component';
import { ContentBackComponent } from './BackOffice/back-all/content-back/content-back.component';
import { ProductListComponent } from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import { UpdateProductComponent } from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import { ProductDetailComponent } from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';
import { CategoryListComponent } from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';
import { AddCategoryComponent } from './BackOffice/back-all/content-back/store/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AccountmanagementComponent } from './BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {DataViewModule} from "primeng/dataview";
import {AuthInterceptor} from "./core/services/Auth.interceptor";
import { ProfileComponent } from './BackOffice/back-all/content-back/accountmanagement/profile/profile.component';
import { EventComponent } from './BackOffice/back-all/content-back/accountmanagement/event/event.component';
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import { MyeventComponent } from './BackOffice/back-all/content-back/accountmanagement/myevent/myevent.component';
import { TrainingmanagementComponent } from './BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { DancehallComponent } from './BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component';
import {InputNumberModule} from "primeng/inputnumber";
import { TrainingComponent } from './BackOffice/back-all/content-back/trainingmanagement/training/training.component';
import { PostComponent } from './BackOffice/back-all/content-back/trainingmanagement/post/post.component';
import { AllpostsComponent } from './BackOffice/back-all/content-back/trainingmanagement/allposts/allposts.component';
import {TabMenuModule} from "primeng/tabmenu";
import {ChartModule} from "primeng/chart";
import {RatingModule} from "primeng/rating";
import { CoachComponent } from './BackOffice/back-all/content-back/trainingmanagement/coach/coach.component';
import {FileUploadModule} from "primeng/fileupload";
import { PbaComponent } from './BackOffice/back-all/content-back/trainingmanagement/pba/pba.component';

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
    EventComponent,
    MyeventComponent,
    TrainingmanagementComponent,
    DancehallComponent,
    TrainingComponent,
    PostComponent,
    AllpostsComponent,
    CoachComponent,
    PbaComponent,
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
        TabMenuModule,
        ChartModule,
        RatingModule,
        FileUploadModule
    ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
