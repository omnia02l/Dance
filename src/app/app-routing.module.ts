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
import {HomeComponent} from "./BackOffice/back-all/content-back/auth/home/home.component";

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./BackOffice/back-all/content-back/auth/auth.module').then(m => m .AuthModule)},
  {path: '', component: FrontAllComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'home', component: HomeComponent},
  {
    path: "admin", component: BackAllComponent, children: [
      {path: 'products/add-product', component: AddproductComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/update-product/:productId', component: UpdateProductComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'account-management', component: AccountmanagementComponent},

      {path: 'training-management', component: TrainingmanagementComponent},
      {path: 'dance-hall-management', component: DancehallComponent},

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
