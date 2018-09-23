import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item, QuickViewProps } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuickviewService {

  public quickviewItem$: BehaviorSubject<QuickViewProps> = new BehaviorSubject(null);

  constructor() { }

  showQuickView(product: Item) {
    this.quickviewItem$.next({
      show: true,
      item: product,
    })
  }

  closeQuickView() {
    this.quickviewItem$.next(null);
  }
}
