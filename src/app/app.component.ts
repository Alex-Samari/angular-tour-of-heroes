import { Component } from '@angular/core';

@Component({
  //  the component's CSS element selector
  //  The CSS element selector, 'app-root', matches the name of the HTML element that identifies this component within a parent component's template.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
