import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../deck.service';
import { CardComponent } from '../card/card.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-stackcell',
  templateUrl: './stackcell.component.html',
  styleUrls: ['./stackcell.component.scss']
})
export class StackcellComponent implements OnInit {
  @Input() rootCard: CardComponent = new CardComponent();
  @Input() cards: CardComponent[]  = new Array(0);;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.rootCard.card = new Card('base', 'base', 'base', 'base');
  }

  acceptCard(card: CardComponent) {
    var linkCard: CardComponent;
    var newstack: CardComponent[] = new Array(0);
    linkCard = this.rootCard;
    if(this.rootCard.card.value == 'base') { 
      this.rootCard = card;
    } else {
      while(linkCard.card.next != undefined) {
        linkCard = linkCard.card.next;
        console.log(linkCard.card.code);
      }
      linkCard.card.next = card;
    }
    linkCard = this.rootCard;
    newstack.push(linkCard);
    while(linkCard.card.next != undefined) {
      newstack.push(linkCard.card.next);
      linkCard = linkCard.card.next;
    }
    this.cards = newstack;
    
  }  
  drop(event: CdkDragDrop<CardComponent>) {
    this.acceptCard(event.container.data);
  }

}
