import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('searchButton') searchButton!: ElementRef;
  productInfo!: cardInfo[];
  categoriesTypes!: Categories[];
  userData!: UserData;
  searchActive: boolean = false;
  movilScreen: boolean = false;
  searchForm!: FormGroup;

  constructor( 
              private obsService: ObservablePropertiesService, 
              private fb: FormBuilder,
              private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.searchForm= this.fb.group({
      searchProduct: [ '', [ Validators.minLength(3) ] ],
    });

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
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
      { name: 'ejemplo-4' },
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

  toggleBtn() {
    const element = this.searchButton.nativeElement;
    if (element.classList.contains('show-input')) {
      this.renderer.removeClass(element, 'show-input')
      this.searchActive = false;
      return;
    }
    this.renderer.addClass(element, 'show-input');
    this.searchActive = true;
  }
}
