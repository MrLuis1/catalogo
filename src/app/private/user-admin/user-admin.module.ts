import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ReservasComponent } from './pages/reservas/reservas.component';



@NgModule({
  declarations: [
    GestionComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAdminModule { }
