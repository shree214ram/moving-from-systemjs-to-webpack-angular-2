import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './data_services/hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { InsightsComponent } from './insights.component';

import { BreadcrumbsComponent } from './breadcrumb.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './sidebar.directive';
import { AsideToggleDirective } from './aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './nav-dropdown.directive';

import { ResourceModule } from 'ngx-resource';

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule.forRoot(),
    // this one has an issue with systemjs import
    // RestangularModule.forRoot(RestangularConfigFactory),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    InsightsComponent
  ],
  providers: [ HeroService,
    { provide: LocationStrategy,
      useClass: PathLocationStrategy
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
