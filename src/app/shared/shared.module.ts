import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { CardComponent } from './components/card/card.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';



@NgModule({
  declarations: [
    TestComponent,
    CardComponent,
    BuyCarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
