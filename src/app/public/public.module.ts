import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasUserComponent } from './pages/reservas-user/reservas-user.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ReservasUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
