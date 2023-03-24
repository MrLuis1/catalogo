import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { GestionComponent } from './pages/gestion/gestion.component';



@NgModule({
  declarations: [
    AdminViewComponent,
    ReservasComponent,
    GestionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
