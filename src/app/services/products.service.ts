import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ResultsObject, Item, Pagination } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private configUrl: string = 'https://www.croma.com/home-appliances/fans/c/51/results'
  public items$: BehaviorSubject<Item[]> = new BehaviorSubject(null);
  public pagination$: BehaviorSubject<Pagination> = new BehaviorSubject(null);
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private currentPage = null;

  constructor(private http: HttpClient) { }

  fetchProducts(page = 0) {
    if (this.currentPage === page) {
      return;
    }
    this.currentPage = page;
    const updatedPage = page - 1;
    this.loading$.next(true);
    return this.http.get(this.configUrl, {
      params: {
        "page": String(updatedPage),
      }
    }).subscribe((res: ResultsObject) => {
      this.items$.next(res.results)
      this.pagination$.next(res.pagination)
      this.loading$.next(false);
    });
  }

}
