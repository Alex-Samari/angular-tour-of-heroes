//  importing the Component symbol from the Angular core library
import { Component, OnInit } from '@angular/core';
//  importing the Hero class
import {Hero} from '../hero';
//  importing the HEROES object which represents an array of 'Hero's. Note: 'Hero' is a class. See 'hero.ts'
import {HEROES} from '../mock-heroes';

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
  
  constructor() { }

  //  declaring a 'heroes' component and initializing its value to the HEROES object
  heroes = HEROES;

  //  declaring a hero property of type 'Hero'
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  //  ngOnInit() is a lifecycle hook that is used for two main reasons:
  //  To perform complex initializations shortly after construction.
  //  To set up the component after Angular sets the input properties.
  ngOnInit() { 
  }
}