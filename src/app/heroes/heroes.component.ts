//  importing the Component symbol from the Angular core library
import { Component, OnInit } from '@angular/core';
//  importing the Hero class
import {Hero} from '../hero';

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
export class HeroesComponent implements OnInit {
  
  constructor() { }

  //  creating a hero property of type 'Hero'
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
