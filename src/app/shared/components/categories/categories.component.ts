import { Component } from '@angular/core';
import { Categories } from 'src/app/interfaces/categories.interface';
import { ObservablePropertiesService } from 'src/app/services/observable-properties.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories!: Categories[];

  constructor( private obsService: ObservablePropertiesService ) {
    this.obsService.$categoriesObs.subscribe((res: Categories[]) => this.categories = res)
  }
}
