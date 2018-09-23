import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Pagination } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pagesArray: any[] = [];
  paginationData: Pagination = {} as Pagination;
  paginationSubscription: Subscription;

  constructor(
    public productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.paginationSubscription = this.productsService.pagination$.asObservable().subscribe(res => {
      this.paginationData = res || {} as Pagination;
      if (this.paginationData.numberOfPages) {
        this.pagesArray = new Array(this.paginationData.numberOfPages);
      }
    })
  }

  ngOnDestroy() {
    this.paginationSubscription.unsubscribe();
  }

  onPageClicked(page) {
    this.router.navigate(['/category'], { queryParams: { page: String(page) } })
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
