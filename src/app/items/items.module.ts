import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { RouterModule } from '@angular/router';
import { routes } from './items.router';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ItemsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemsModule { }
