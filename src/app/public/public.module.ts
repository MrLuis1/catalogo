import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { CatalogueViewComponent } from './pages/catalogue-view/catalogue-view.component';



@NgModule({
  declarations: [
    HomeComponent,
    CatalogueViewComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
