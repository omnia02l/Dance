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
import {EventComponent} from "./BackOffice/back-all/content-back/accountmanagement/event/event.component";
import {MyeventComponent} from "./BackOffice/back-all/content-back/accountmanagement/myevent/myevent.component";
import {
  TrainingmanagementComponent
} from "./BackOffice/back-all/content-back/trainingmanagement/trainingmanagement/trainingmanagement.component";
import {DancehallComponent} from "./BackOffice/back-all/content-back/trainingmanagement/dancehall/dancehall.component";
import {TrainingComponent} from "./BackOffice/back-all/content-back/trainingmanagement/training/training.component";
import {PostComponent} from "./BackOffice/back-all/content-back/trainingmanagement/post/post.component";
import {AllpostsComponent} from "./BackOffice/back-all/content-back/trainingmanagement/allposts/allposts.component";
import {HomeComponent} from "./BackOffice/back-all/content-back/auth/home/home.component";
import {CoachComponent} from "./BackOffice/back-all/content-back/trainingmanagement/coach/coach.component";
import {PbaComponent} from "./BackOffice/back-all/content-back/trainingmanagement/pba/pba.component";

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./BackOffice/back-all/content-back/auth/auth.module').then(m => m .AuthModule)},
  {path: '', component: FrontAllComponent},
  {path: 'my-events', component: MyeventComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'post', component: PostComponent},
  {path: 'all-post', component: AllpostsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: "admin", component: BackAllComponent, children: [
      {path: 'products/add-product', component: AddproductComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/update-product/:productId', component: UpdateProductComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'post', component: PbaComponent},
      {path: 'account-management', component: AccountmanagementComponent},
      {path: 'event-management', component: EventComponent},
      {path: 'training-management', component: TrainingmanagementComponent},
      {path: 'dance-hall-management', component: DancehallComponent},
      {path: 'coach-management', component: CoachComponent},    ]
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
