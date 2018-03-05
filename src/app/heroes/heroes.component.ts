import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}
// The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
// When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the
// singleton instance of HeroService.

  ngOnInit() {
    this.getHeroes();
// call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after
// constructing a HeroesComponent instance.
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
// function to retrieve the heroes from the service as Observables<Hero>.
// waits for the Observable to emit the array of heroes— which could happen now or several minutes from now.
// Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
// This asynchronous approach will work when the HeroService requests heroes from the server.
  }
}
