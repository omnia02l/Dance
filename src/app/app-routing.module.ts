import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontAllComponent} from './front-office/front-all/front-all.component';
import {BackAllComponent} from './BackOffice/back-all/back-all.component';
import {ProductListComponent} from './BackOffice/back-all/content-back/store/product-list/product-list.component';
import {AddproductComponent} from './BackOffice/back-all/content-back/store/addproduct/addproduct.component';
import {UpdateProductComponent} from './BackOffice/back-all/content-back/store/update-product/update-product.component';
import {ProductDetailComponent} from './BackOffice/back-all/content-back/store/product-detail/product-detail.component';
import {CategoryListComponent} from './BackOffice/back-all/content-back/store/category/category-list/category-list.component';
import {UpdateCategoryComponent} from './BackOffice/back-all/content-back/store/category/update-category/update-category.component';
import {AccountmanagementComponent} from "./BackOffice/back-all/content-back/accountmanagement/accountmanagement/accountmanagement.component";
import {ProfileComponent} from "./BackOffice/back-all/content-back/accountmanagement/profile/profile.component";
import {TrainingmanagementComponent} from "./BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component";
import {DancehallComponent} from "./BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component";
import {TrainingComponent} from "./BackOffice/back-all/content-back/trainingmanagement/training/training.component";
import {ListVoteComponent} from "./BackOffice/back-all/content-back/Vote/list-vote/list-vote.component";
import {VoteComponent} from "./front-office/front-all/content-front/Vote/AjoutVote/vote.component";
import {ListresultFComponent} from "./front-office/front-all/content-front/Result/listresultF/listresultF.component";
import {
  ListperformanceComponent
} from "./front-office/front-all/content-front/CompetitionM/listperformance/listperformance.component";
import {
  CalendercompComponent
} from "./front-office/front-all/content-front/CompetitionM/calendercomp/calendercomp.component";
import {
  DetailsCompfrontComponent
} from "./front-office/front-all/content-front/CompetitionM/details-compfront/details-compfront.component";
import {ListVoteComponentF} from "./front-office/front-all/content-front/Vote/list-vote/list-vote.component";
import {
  VoteCalendarComponent
} from "./front-office/front-all/content-front/Vote/vote-calender/vote-calender.component";
import {
  VoteStatisticsComponent
} from "./front-office/front-all/content-front/Vote/vote-statistics/vote-statistics.component";
import {
  LikeDislikeChartComponent
} from "./BackOffice/back-all/content-back/Result/like-dislike-stat/like-dislike-stat.component";
import {ListresultComponent} from "./BackOffice/back-all/content-back/Result/listresult/listresult.component";



const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./BackOffice/back-all/content-back/auth/auth.module').then(m => m .AuthModule)},
  {path: '', component: FrontAllComponent ,children:[
      {path: 'Vote/Ajoutvote/:id', component: VoteComponent},
      {path: 'Result', component: ListresultFComponent},
      { path: 'details-compfront/:id', component: DetailsCompfrontComponent },
      { path: 'calendercomp', component: CalendercompComponent },
      { path: 'listperformances', component: ListperformanceComponent },
      { path: 'Vote', component: ListVoteComponentF },
      { path: 'vote-calendar/:performanceId', component: VoteCalendarComponent },



      {path: 'VoteStatistic', component: VoteStatisticsComponent}




    ]},

  {
    path: "admin", component: BackAllComponent, children: [
      {path: 'products/add-product', component: AddproductComponent},
      {path: 'likedislike/:id', component: LikeDislikeChartComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/update-product/:productId', component: UpdateProductComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'account-management', component: AccountmanagementComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'training-management', component: TrainingmanagementComponent },
      {path: 'dance-hall-management', component: DancehallComponent},
      {path: 'Result', component: ListresultComponent},
      {path: 'ResultComment/:id', component: ListresultComponent},
      {path: 'VoteStatistic', component: VoteStatisticsComponent},

      {path: 'Vote', component: ListVoteComponent},
      {path: 'training', component: TrainingComponent},

    ]
  },
  {path: 'admin/categorys', component: CategoryListComponent},
  {path: 'admin/category/update/:categoryId', component: UpdateCategoryComponent},
//{ path: 'refresh', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
