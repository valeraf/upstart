import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  public items: any = [];
  public pagination: any = {};
  public routeSubscription: Subscription;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams
      .subscribe(params => {
        this.productsService.fetchProducts(params.page);
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
