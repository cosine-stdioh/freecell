import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { StackcellComponent } from './stackcell/stackcell.component';
import { FreecellComponent } from './freecell/freecell.component';
import { GoalcellComponent } from './goalcell/goalcell.component';
import { CardComponent } from './card/card.component';
import { DeckService } from './deck.service';

import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StackcellComponent,
    FreecellComponent,
    GoalcellComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
