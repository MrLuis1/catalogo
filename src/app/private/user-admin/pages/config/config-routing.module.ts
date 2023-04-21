import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { MethodPaymentComponent } from './pages/method-payment/method-payment.component';
import { PersonalizeComponent } from './pages/personalize/personalize.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'payments', component: MethodPaymentComponent },
      { path: 'personalize', component: PersonalizeComponent },
      { path: '**', redirectTo: 'account', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
