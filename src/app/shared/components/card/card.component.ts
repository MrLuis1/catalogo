import { Component, Input, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/interfaces/card.interface';
import { ObservablePropertiesService } from 'src/app/services/observable-properties.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards!: cardInfo[];
  
  constructor( private obsService: ObservablePropertiesService ) { 
    this.obsService.$cardInfo.subscribe((res: cardInfo[]) => this.cards = res)
  }

  ngOnInit(): void {
    
  }

  getSelectedProduct( product: cardInfo ) {
    console.log(product)
  }

}
