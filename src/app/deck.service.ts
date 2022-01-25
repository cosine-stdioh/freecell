import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CardComponent } from './card/card.component';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deckofcardsurl = `https://www.deckofcardsapi.com/api/deck/`;
  getnewdeck = this.deckofcardsurl + `new/draw/?count=52`;
  deck: Deck;
  ideck: iDeck;
  deckObserve: Observable<iDeck> | undefined;
  constructor(private http: HttpClient) { 
    this.ideck = new Deck(false, [new Card('error', 'error', 'error', 'error')], 'error', 1);
    this.deck = new Deck(false, [], '0', 0);
    }

  getDeck() {
    
    //return this.http.get<String>(this.getnewdeck);
    this.http.get<iDeck>(this.getnewdeck).subscribe((data: iDeck) => this.ideck = {
      success: data.success,
      deck_id: data.deck_id,
      remaining: data.remaining,
      cards: data.cards,
    });

  }

  deal() {
    console.log(this.ideck.deck_id);
    if(this.ideck.success){
      this.deck = new Deck(this.ideck.success, this.ideck.cards, this.ideck.deck_id, this.ideck.remaining);
    }
  }

  getID(): String{
    return this.ideck?.deck_id;
  }

  drawCard(){
    return this.deck.popCard();
  }

  

}

class Deck implements iDeck{
  success: Boolean;
  deck_id: String;
  remaining: number;
  cards: Card[];
  pointer: number;

   constructor(success: Boolean, cards: Card[], deck_id: String, remaining: number){
    this.success = success;
    this.deck_id = deck_id;
    this.remaining = remaining;
    this.cards = cards;
    this.pointer = 51;
  }
  /*
    constructor(ideck: iDeck){
      this.success = ideck.success;
      this.remaining = ideck.remaining;
      this.deck_id = ideck.deck_id;
      this.cards = ideck.cards;
      this.pointer = 51;
    }
    */
  pushCard(card: Card) {
    this.cards[++this.pointer] = card;
  }

  popCard() {
    if(this.pointer >= 0) {
      return this.cards[this.pointer--];
    } else {
      return new Card(`error`, `Error`, `error`, `error`);
    }
    
  }
}
export class Card {
  image: String;
  value: String;
  suit: String;
  code: String;
  next: CardComponent | undefined;
  constructor(image: String, value: String, suit: String, code: String){
    this.image = image;
    this.value = value;
    this.suit = suit;
    this.code = code;
  }

}

export interface iDeck {
  success: Boolean;
  deck_id: String;
  remaining: number;
  cards: Card[];
}

