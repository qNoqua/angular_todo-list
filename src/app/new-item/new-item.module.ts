import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemComponent } from './new-item.component';
import { RouterModule } from '@angular/router';
import { routes } from './new-item.router';


@NgModule({
  declarations: [
    NewItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewItemModule { }
