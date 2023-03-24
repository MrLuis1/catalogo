import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    GestionComponent,
    ReservasComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAdminModule { }
