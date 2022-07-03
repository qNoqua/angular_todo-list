import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IItem } from 'src/app/interfaces/items.interface';


@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  private readonly items = new BehaviorSubject<IItem[]>([{id: Date.now(), title: 'Title', description: 'Item descrioption'}]);
  readonly items$ = this.items.asObservable()
  constructor() { 
  }
  addItem(item: IItem): void {
    const AllItems = this.items.getValue()
    this.items.next([...AllItems, item])
  };
  removeItem(id: number): void {
    const AllItems = this.items.getValue()
    this.items.next(AllItems.filter(item => item.id !== id))
  }
}
