import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasUserComponent } from './pages/reservas-user/reservas-user.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    ReservasUserComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserClientModule { }
