import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'admin', loadChildren: () => import('./user-admin/user-admin.module').then(m => m.UserAdminModule) },
      { path: '**', redirectTo: 'admin', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
