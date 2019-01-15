import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//  Registering the HeroService as the provider of the service using the 'root' injector
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //  parameter declares a private messageService property. 
  //  Angular will inject the singleton MessageService into that property when it creates the HeroService
  constructor(private messageService: MessageService) { 
  }

  //  getHeroes method returns an 'Observable' array of mock heroes from 'mock-heros.ts'
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    //  'of' is a method of the 'Observable' class
    return of(HEROES);
  }
}