import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueViewComponent } from './pages/catalogue-view/catalogue-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'view/:id', component: CatalogueViewComponent},
      { path: '**', redirectTo: 'public/home', pathMatch: 'full' }
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
export class PublicRoutingModule { }
