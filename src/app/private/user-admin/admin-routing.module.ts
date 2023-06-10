import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditCatalogueComponent } from './components/edit-catalogue/edit-catalogue.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'edit', component: EditCatalogueComponent },
      { path: 'config', loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigModule) },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
