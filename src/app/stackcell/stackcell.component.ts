import { Component, OnInit } from '@angular/core';
import { Card, DeckService } from '../deck.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-stackcell',
  templateUrl: './stackcell.component.html',
  styleUrls: ['./stackcell.component.scss']
})
export class StackcellComponent implements OnInit {
  rootCard: Card;
  cards: Card[];

  constructor() { 
    this.rootCard = new Card(`/assets/base.png`, 'base', 'base', 'base')
    this.cards = new Array(0);
  }

  ngOnInit(): void {
  }

  acceptCard(card: Card) {
    var linkCard: Card;
    var newstack: Card[] = new Array(0);
    linkCard = this.rootCard;
    if(this.rootCard.value == 'base') { 
      this.rootCard = card;
    } else {
      while(linkCard.next != undefined) {
        linkCard = linkCard.next;
      }
      linkCard.next = card;
    }
    linkCard = this.rootCard;
    newstack.push(linkCard);
    while(linkCard.next != undefined) {
      console.log(linkCard.next);
      newstack.push(linkCard.next);
      linkCard = linkCard.next;
    }
    this.cards = newstack;

    
  }

}
