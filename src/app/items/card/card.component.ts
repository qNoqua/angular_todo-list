import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/items.interface';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor (private itemsService: ItemsService) {}
  removeItem(id: number) {
    this.itemsService.removeItem(id)
    console.log('remove')
  }
  @Input() item: IItem = {id: 0, title: '', description: ''}
}
