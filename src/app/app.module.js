"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("./data_services/hero.service");
var hero_search_component_1 = require("./hero-search.component");
var insights_component_1 = require("./insights.component");
var breadcrumb_component_1 = require("./breadcrumb.component");
var sidebar_directive_1 = require("./sidebar.directive");
var aside_directive_1 = require("./aside.directive");
var nav_dropdown_directive_1 = require("./nav-dropdown.directive");
var ngx_resource_1 = require("ngx-resource");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ngx_resource_1.ResourceModule.forRoot(),
            // this one has an issue with systemjs import
            // RestangularModule.forRoot(RestangularConfigFactory),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            breadcrumb_component_1.BreadcrumbsComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent,
            insights_component_1.InsightsComponent
        ],
        providers: [hero_service_1.HeroService,
            { provide: common_1.LocationStrategy,
                useClass: common_1.PathLocationStrategy
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map