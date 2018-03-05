import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
// Modify the constructor with a parameter that declares a private messageService property.
// Angular will inject the singleton MessageService into that property when it creates the HeroService.
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
// Returning an Observable gives this method an asynchronous signature
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
// The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
// Removing data access from components means you can change your mind about the implementation anytime, without touching any components.
// They don't know how the service works.
