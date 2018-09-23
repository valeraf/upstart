import { Component, OnInit, Input } from '@angular/core';
import { QuickviewService } from '../services/quickview.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    public quickviewService: QuickviewService,
  ) { }

  ngOnInit() {
  }

  onQuickView() {
    this.quickviewService.showQuickView(this.item);
  }

}
