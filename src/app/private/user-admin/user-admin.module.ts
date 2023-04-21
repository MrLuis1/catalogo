import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditCatalogueComponent } from './pages/edit-catalogue/edit-catalogue.component';
import { InventoryComponent } from './pages/inventory/inventory.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EditCatalogueComponent,
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class UserAdminModule { }
