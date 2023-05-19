import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';
import { MaterialModule } from '../material/material.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    CardComponent,
    BuyCarComponent,
    CategoriesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    BuyCarComponent,
    CategoriesComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
