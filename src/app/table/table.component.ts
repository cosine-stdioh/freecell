import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DeckService } from '../deck.service';
import { FreecellComponent } from '../freecell/freecell.component';
import { GoalcellComponent } from '../goalcell/goalcell.component';
import { StackcellComponent } from '../stackcell/stackcell.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  deckstring: String | undefined;
  stackcells: StackcellComponent[];
  freecells: FreecellComponent[];
  goalcells: GoalcellComponent[];

  constructor(public deck: DeckService) {
    this.deckstring = `TEST`;
    this.stackcells = new Array(8);
    for(var i = 0; i < 8; i++){
      this.stackcells[i] = new StackcellComponent();
    }
    this.freecells = new Array(4);
    this.goalcells = new Array(4);
   }

  ngOnInit(): void {
  }

  getDeck(): void {
    this.deckstring = `getting deck`;
    this.stackcells = new Array(8);
    for(var i = 0; i < 8; i++){
      this.stackcells[i] = new StackcellComponent();
    }
    this.freecells = new Array(4);
    this.goalcells = new Array(4);
    this.deck.getDeck();
  }

  showDeck(): void {    
    this.deckstring = this.deck.getID();
    this.deck.deal();

    if(this.deck.deck.success){
      this.deck.deck.success = false;
      for(var i = 52; i > 0; i--){
        var cc = new CardComponent();
        cc.card = this.deck.drawCard();

        console.log(cc.card.code + " " + ((52-i) % 8));

       this.stackcells[(52-i) % 8].acceptCard(cc);
      }
      for(var i = 0; i < 8; i++){
        console.log(this.stackcells[i].cards)
      }
    }
    
    
  }
    


}
