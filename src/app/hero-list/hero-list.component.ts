import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  // heroes: Observable<Hero[]>;
  heroes: Hero[] = [];
  selectedHero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    // Sync
    // this.heroes = this.heroService.getHeroes();

    // Async call
    this.heroService.getHeroes().subscribe(hs => (this.heroes = hs));

    // Async pipe
    // this.heroes = this.heroService.getHeroes();
  }

  selectIt(hero: Hero) {
    this.selectedHero = hero;
  }
}
