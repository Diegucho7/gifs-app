import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',

})

export class CardListComponent {
@Input()
public gifs: Gif[] = [];
}
