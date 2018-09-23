import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { QuickviewService } from '../services/quickview.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0%)',
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-100%)',
      })),
      transition('visible => hidden', animate('200ms')),
      transition('hidden => visible', animate('200ms')),
    ])
  ],
})
export class QuickviewComponent implements OnInit, OnDestroy {

  public show = 'hidden';
  public quickview = null;
  public quickviewSubscription: Subscription;

  constructor(
    public quickviewService: QuickviewService,
  ) { }

  ngOnInit() {
    this.quickviewSubscription = this.quickviewService.quickviewItem$
      .asObservable()
      .subscribe(res => {
        this.quickview = res;
        this.show = res ? "visible" : "hidden";
      })
  }

  ngOnDestroy() {
    this.quickviewSubscription.unsubscribe();
  }
  
  onClose() {
    this.quickviewService.closeQuickView();
  }

}
