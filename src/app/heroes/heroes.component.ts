//  importing the Component symbol from the Angular core library
import { Component, OnInit } from '@angular/core';
//  importing the Hero class
import { Hero } from '../hero';
//  importing the HeroService which handles hero data
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

//  annotating the component class with @Component
@Component({
  //  the component's CSS element selector
  //  The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.
  selector: 'app-heroes',
  //  the location of the component's template file
  templateUrl: './heroes.component.html',
  //  the location of the component's private CSS styles
  styleUrls: ['./heroes.component.css']
})
//  Always export the component class so you can import it elsewhere
//  This component is being automatically imported by Angular to the app.module.ts
export class HeroesComponent implements OnInit {

  //  The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site
  constructor(private heroService: HeroService) { }

  //  declaring a 'heroes' property which is an array of type 'Hero'
  heroes: Hero[];

  //  declaring a selectedHero property of type 'Hero'
  selectedHero: Hero;

  //  onSelect() method assigns the clicked hero from the template to the component's selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // function retrieves the heroes from the HeroService
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  //  ngOnInit() is a lifecycle hook that is used for two main reasons:
  //  To perform complex initializations shortly after construction.
  //  To set up the component after Angular sets the input properties.
  ngOnInit() {
    this.getHeroes();
  }
}