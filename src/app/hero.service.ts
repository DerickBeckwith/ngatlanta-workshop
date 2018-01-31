import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  constructor() {}

  getHeroes() {
    return [
      new Hero(11, 'john', 'speed'),
      new Hero(12, 'sally', 'flight'),
      new Hero(13, 'fred', 'strength'),
      new Hero(14, 'chloe', 'drool')
    ];
  }
}
