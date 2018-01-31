import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes = [
    new Hero(11, 'john', 'speed'),
    new Hero(12, 'sally', 'flight'),
    new Hero(13, 'fred', 'strength'),
    new Hero(14, 'chloe', 'drool')
  ];
  selectedHero;

  constructor() {}

  ngOnInit() {}

  selectIt(hero: Hero) {
    this.selectedHero = hero;
  }
}


