import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

//  Registering the HeroService as the provider of the service using the 'root' injector
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //  getHeroes method returns an 'Observable' array of mock heroes from 'mock-heros.ts'
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}