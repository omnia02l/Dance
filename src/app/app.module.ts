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
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import { TrainingmanagementComponent } from './BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { DancehallComponent } from './BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component';
import {InputNumberModule} from "primeng/inputnumber";
import { TrainingComponent } from './BackOffice/back-all/content-back/trainingmanagement/training/training.component';
import {VoteComponent} from "./front-office/front-all/content-front/Vote/AjoutVote/vote.component";
import {AjoutresultComponent} from "./BackOffice/back-all/content-back/Result/AjoutResult/ajoutresult.component";
import {
  AjoutCommentRComponent
} from "./BackOffice/back-all/content-back/Result/ajout-comment-r/ajout-comment-r.component";
import {ListVoteComponent} from "./BackOffice/back-all/content-back/Vote/list-vote/list-vote.component";
import {
  ListresultFComponent
} from "./front-office/front-all/content-front/Result/listresultF/listresultF.component";
import {
  ListperformanceComponent
} from "./front-office/front-all/content-front/CompetitionM/listperformance/listperformance.component";
import {
  CalendercompComponent
} from "./front-office/front-all/content-front/CompetitionM/calendercomp/calendercomp.component";
import {
  DetailsCompfrontComponent
} from "./front-office/front-all/content-front/CompetitionM/details-compfront/details-compfront.component";
import {
  ListCompfrontComponent
} from "./front-office/front-all/content-front/CompetitionM/list-compfront/list-compfront.component";
import {ListVoteComponentF} from "./front-office/front-all/content-front/Vote/list-vote/list-vote.component";
import {VoteCalendarComponent} from "./front-office/front-all/content-front/Vote/vote-calender/vote-calender.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { VoteStatisticsComponent } from './front-office/front-all/content-front/Vote/vote-statistics/vote-statistics.component';
import {ChartsModule} from "ng2-charts";
import { VoteDialogComponent } from './front-office/front-all/content-front/Vote/AjoutVote/vote-dialog/vote-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {
  LikeDislikeChartComponent
} from "./BackOffice/back-all/content-back/Result/like-dislike-stat/like-dislike-stat.component";
import {ListresultComponent} from "./BackOffice/back-all/content-back/Result/listresult/listresult.component";


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
    ListVoteComponentF,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AccountmanagementComponent,
    ProfileComponent,
    TrainingmanagementComponent,
    ListresultFComponent,
    DancehallComponent,
    TrainingComponent,
    VoteComponent,
    AjoutresultComponent,
    LikeDislikeChartComponent,
    AjoutCommentRComponent,
    ListVoteComponent,
    ListCompfrontComponent,
    DetailsCompfrontComponent,
    CalendercompComponent,
    VoteCalendarComponent,
    ListperformanceComponent,
    VoteStatisticsComponent,
    VoteDialogComponent,
    ListresultComponent,



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
    MatNativeDateModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    ChartsModule ,
    InputTextareaModule,
    MultiSelectModule,
    MatDialogModule,
    FullCalendarModule,
    InputNumberModule,
    MatDatepickerModule,
    MatInputModule],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true, panelClass: 'custom-dialog-container', enterAnimationDuration: '500ms', exitAnimationDuration: '500ms' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
