import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterRoutingModule } from './router/router-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { QuickviewComponent } from './quickview/quickview.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductListItemComponent,
    PageNotFoundComponent,
    PaginationComponent,
    QuickviewComponent,
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
