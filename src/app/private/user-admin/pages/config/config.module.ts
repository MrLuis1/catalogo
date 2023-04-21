import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { PersonalizeComponent } from './pages/personalize/personalize.component';
import { MethodPaymentComponent } from './pages/method-payment/method-payment.component';
import { AccountComponent } from './pages/account/account.component';


@NgModule({
  declarations: [
    PersonalizeComponent,
    MethodPaymentComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
