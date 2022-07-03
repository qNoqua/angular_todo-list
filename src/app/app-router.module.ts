import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'new-item',
        loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
        // component: NewItemComponent,
    },
    {
        path: 'items',
        loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
        // component: ItemsComponent,
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {

}