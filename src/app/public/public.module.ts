import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { CatalogueViewComponent } from './pages/catalogue-view/catalogue-view.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { BuysComponent } from './pages/buys/buys.component';
import { CuponesComponent } from './components/cupones/cupones.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    CatalogueViewComponent,
    BuysComponent,
    CuponesComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PublicModule { }
