import { Component, OnInit, NgModule, VERSION, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './data_model/hero';
import { HeroService } from './data_services/hero.service';

import { NewsService, INewsShort, INews } from './data_services/NewsService';

import { News, NewsCluster, Relation, Chart, SecurityAsset } from './data_model/news';

import {Resource} from 'ng2-rest';

const rest = Resource.create('https://demo9781896.mockable.io', 'users');

const CLUSTERS: NewsCluster[] = [
 { id: 11, uuid: 1, security: 'VRX', date: new Date(), dailyChart: null, news: [
 { id: 1,  uuid: 'sdf1',   headline: 'Could this be the Pharmaceutical Enron?',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 40.5, echo: 43, related: null
 },
 { id: 2,  uuid: 'sdf2',   headline: 'Valeant Pharmaceuticals Responds To Erroneous Report',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 34.2, echo: 28, related: null
 },
 { id: 3,  uuid: 'sdf3',   headline: 'Bill Ackman buys 2m additional $VRX shares today',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: null, echo: 34, related: null
 },
 ]
 },
 { id: 12, uuid: 2, security: 'BIIB', date: new Date(), dailyChart: null, news: [
 { id: 4,  uuid: 'sdf4',   headline: 'New Data Shows Strong, Sustained Effect of TECFIDE',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 2.31, echo: 35, related: null
 },
 { id: 5,  uuid: 'sdf5',   headline: 'Mangrove s August Goes Where Kyle Bsas Hasn t in Past',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: -0.9, echo: 4, related: null
 },
 { id: 6,  uuid: 'sdf6',   headline: 'Sustainability tests get a positive result. Over 3 in 6 tests',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 1.22, echo: 12, related: null
 },
 ]
 },
 ];

const NEWS: News[] = [
 { id: 1,  uuid: 'sdf1',   headline: 'Could this be the Pharmaceutical Enron?',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 40.5, echo: 43, related: null
 },
 { id: 2,  uuid: 'sdf2',   headline: 'Valeant Pharmaceuticals Responds To Erroneous Report',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 34.2, echo: 28, related: null
 },
 { id: 3,  uuid: 'sdf3',   headline: 'Bill Ackman buys 2m additional $VRX shares today',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: null, echo: 34, related: null
 },
 { id: 4,  uuid: 'sdf4',   headline: 'New Data Shows Strong, Sustained Effect of TECFIDE',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 2.31, echo: 35, related: null
 },
 { id: 5,  uuid: 'sdf5',   headline: 'Mangrove s August Goes Where Kyle Bsas Hasn t in Past',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: -0.9, echo: 4, related: null
 },
 { id: 6,  uuid: 'sdf6',   headline: 'Sustainability tests get a positive result. Over 3 in 6 tests',  summary: '',
 content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 1.22, echo: 12, related: null
 },
 ];

@Component({
  selector: 'my-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['assets/css/output.css']
})
export class InsightsComponent implements OnInit {
  firstName = '';
  clickMessage = 'click message';

  // constructor( ) { }
  newsClusters = CLUSTERS;
  news = NEWS;
  // selectedCluster = this.newsClusters[0];
  // selectedNews = this.news[0];
  heroes: Hero[];
  selectedHero: Hero;

  newList: INewsShort[] = [];

  users: any;

  constructor(
      private heroService: HeroService,
      private router: Router,
      private newsRes: NewsService,
      private zone: NgZone) {
    this.clickMessage = `Angular! v${VERSION.full}`;
    Resource.initNgZone(zone) ;
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();

    // Execute GET request https://domain.net/api/users/12
    // and assing the data to oneNews variable
    let oneNews = this.newsRes.get({id: 12});

    rest.model().query().subscribe((data) => {
      console.log('data', data);
      this.users = data;
    });

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
