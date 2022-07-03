import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IItem } from '../interfaces/items.interface';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnDestroy {
  private subscription = new Subscription();
  items: IItem[] = [];
  constructor(private itemsService: ItemsService) {
    this.subscription.add(
      itemsService.items$.subscribe((val: IItem[]) => (this.items = val))
    );
  }
  addItem() {
    const item = {
      id: 1,
      title: '12121',
      description: 'zxvsdcs',
    };
    this.itemsService.addItem(item);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
