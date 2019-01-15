import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

//  An array of routes of type 'Routes'
const routes: Routes = [
  //  path: a string that matches the URL in the browser address bar. i.e. '/heroes'
  //  component: the component that the router should create when navigating to this route.
  { path: 'heroes', component: HeroesComponent },
  //  route matches a path to the DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  //  This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  //  Initialize the router and start it listening for browser location changes.
  imports: [ RouterModule.forRoot(routes) ],
  //  Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [ RouterModule ]
})
export class AppRoutingModule {}