import { Component} from '@angular/core';
import { Card } from '../deck.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  card: Card;
  constructor(card: Card) {
    this.card = card;
  }


}
