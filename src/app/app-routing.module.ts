import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

//  An array of routes of type 'Routes'
const routes: Routes = [
  //  path: a string that matches the URL in the browser address bar. i.e. '/heroes'
  //  component: the component that the router should create when navigating to this route.
  { path: 'heroes', component: HeroesComponent },
  //  route matches a path to the DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  //  This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //  parameterized route that matches the path pattern to the hero detail view.
  //  The colon (:) in the path indicates that :id is a placeholder for a specific hero id.  
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //  Initialize the router and start it listening for browser location changes.
  imports: [ RouterModule.forRoot(routes) ],
  //  Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [ RouterModule ]
})
export class AppRoutingModule {}