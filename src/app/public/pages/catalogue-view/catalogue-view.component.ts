import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/interfaces/card.interface';
import { Categories } from 'src/app/interfaces/categories.interface';
import { UserData } from 'src/app/interfaces/userData.interface';
import { ObservablePropertiesService } from 'src/app/services/observable-properties.service';

@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.css']
})
export class CatalogueViewComponent implements OnInit{
  productInfo!: cardInfo[];
  categoriesTypes!: Categories[];
  userData!: UserData;

  constructor( private obsService: ObservablePropertiesService ) { }

  ngOnInit(): void {
    this.productInfo = [
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
        priceDiscount: 10,
        discountPercent: 2
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      },
      {
        headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
        bodyImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        price: 12,
        currency: 'dolares',
      }
    ]

    this.categoriesTypes = [
      { name: 'ejemplo-1' },
      { name: 'ejemplo-2' },
      { name: 'ejemplo-3' },
      { name: 'ejemplo-4' }
    ]

    this.userData = {
        logoImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        empresa: 'Luis Empresa',
        name: 'Luis',
        direction: 'Caracas',
        phoneCall: 12345678,
        whatsapp: 12345678
    }

    this.obsService.$cardInfo.emit( this.productInfo );
    this.obsService.$categoriesObs.emit( this.categoriesTypes );
  }
}
