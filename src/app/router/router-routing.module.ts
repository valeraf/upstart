import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/category',
    pathMatch: 'full'
  },
  {
    path: "category",
    component: ProductsListComponent,
  },
  {
    path: "item/:id",
    component: ProductListItemComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
