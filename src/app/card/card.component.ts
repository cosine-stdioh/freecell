import { Component, Input} from '@angular/core';
import { Card } from '../deck.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: Card = new Card('error', 'error', 'error', 'error');

  constructor() {
  }


}
