import { EventEmitter, Injectable } from '@angular/core';
import { cardInfo } from '../interfaces/card.interface';
import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class ObservablePropertiesService {
  $cardInfo = new EventEmitter<cardInfo[]>();
  $categoriesObs = new EventEmitter<Categories[]>();
  $emailTaken = new EventEmitter<boolean>();

  constructor() { }
}
