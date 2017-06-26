"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./data_services/hero.service");
var NewsService_1 = require("./data_services/NewsService");
var ng2_rest_1 = require("ng2-rest");
var rest = ng2_rest_1.Resource.create('https://demo9781896.mockable.io', 'users');
var CLUSTERS = [
    { id: 11, uuid: 1, security: 'VRX', date: new Date(), dailyChart: null, news: [
            { id: 1, uuid: 'sdf1', headline: 'Could this be the Pharmaceutical Enron?', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 40.5, echo: 43, related: null
            },
            { id: 2, uuid: 'sdf2', headline: 'Valeant Pharmaceuticals Responds To Erroneous Report', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 34.2, echo: 28, related: null
            },
            { id: 3, uuid: 'sdf3', headline: 'Bill Ackman buys 2m additional $VRX shares today', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: null, echo: 34, related: null
            },
        ]
    },
    { id: 12, uuid: 2, security: 'BIIB', date: new Date(), dailyChart: null, news: [
            { id: 4, uuid: 'sdf4', headline: 'New Data Shows Strong, Sustained Effect of TECFIDE', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 2.31, echo: 35, related: null
            },
            { id: 5, uuid: 'sdf5', headline: 'Mangrove s August Goes Where Kyle Bsas Hasn t in Past', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: -0.9, echo: 4, related: null
            },
            { id: 6, uuid: 'sdf6', headline: 'Sustainability tests get a positive result. Over 3 in 6 tests', summary: '',
                content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 1.22, echo: 12, related: null
            },
        ]
    },
];
var NEWS = [
    { id: 1, uuid: 'sdf1', headline: 'Could this be the Pharmaceutical Enron?', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 40.5, echo: 43, related: null
    },
    { id: 2, uuid: 'sdf2', headline: 'Valeant Pharmaceuticals Responds To Erroneous Report', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 34.2, echo: 28, related: null
    },
    { id: 3, uuid: 'sdf3', headline: 'Bill Ackman buys 2m additional $VRX shares today', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: null, echo: 34, related: null
    },
    { id: 4, uuid: 'sdf4', headline: 'New Data Shows Strong, Sustained Effect of TECFIDE', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 2.31, echo: 35, related: null
    },
    { id: 5, uuid: 'sdf5', headline: 'Mangrove s August Goes Where Kyle Bsas Hasn t in Past', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: -0.9, echo: 4, related: null
    },
    { id: 6, uuid: 'sdf6', headline: 'Sustainability tests get a positive result. Over 3 in 6 tests', summary: '',
        content: '', url: '', clusterUuid: 1, time: new Date(), reaction: 1.22, echo: 12, related: null
    },
];
var InsightsComponent = (function () {
    function InsightsComponent(heroService, router, newsRes, zone) {
        this.heroService = heroService;
        this.router = router;
        this.newsRes = newsRes;
        this.zone = zone;
        this.firstName = '';
        this.clickMessage = 'click message';
        // constructor( ) { }
        this.newsClusters = CLUSTERS;
        this.news = NEWS;
        this.newList = [];
        this.clickMessage = "Angular! v" + core_1.VERSION.full;
        ng2_rest_1.Resource.initNgZone(zone);
    }
    InsightsComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    InsightsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    InsightsComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    InsightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHeroes();
        // Execute GET request https://domain.net/api/users/12
        // and assing the data to oneNews variable
        var oneNews = this.newsRes.get({ id: 12 });
        rest.model().query().subscribe(function (data) {
            console.log('data', data);
            _this.users = data;
        });
    };
    InsightsComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    InsightsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return InsightsComponent;
}());
InsightsComponent = __decorate([
    core_1.Component({
        selector: 'my-insights',
        templateUrl: './insights.component.html',
        styleUrls: ['assets/css/output.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router,
        NewsService_1.NewsService,
        core_1.NgZone])
], InsightsComponent);
exports.InsightsComponent = InsightsComponent;
//# sourceMappingURL=insights.component.js.map