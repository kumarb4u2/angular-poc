import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';



@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
