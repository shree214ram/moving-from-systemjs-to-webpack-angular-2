"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityAsset = (function () {
    function SecurityAsset(uuid, name, alternativeNames) {
        this.uuid = uuid;
        this.name = name;
        this.alternativeNames = alternativeNames;
    }
    return SecurityAsset;
}());
exports.SecurityAsset = SecurityAsset;
var Relation = (function () {
    function Relation(security, confidence) {
        this.security = security;
        this.confidence = confidence;
    }
    return Relation;
}());
exports.Relation = Relation;
var Chart = (function () {
    function Chart(notImplementedYet) {
        this.notImplementedYet = notImplementedYet;
        this.notImplementedYet = true;
    }
    return Chart;
}());
exports.Chart = Chart;
var News = (function () {
    function News(id, uuid, headline, summary, content, url, clusterUuid, time, 
        // import {PercentPipe} from "@angular/common";
        // https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html
        reaction, echo, related) {
        this.id = id;
        this.uuid = uuid;
        this.headline = headline;
        this.summary = summary;
        this.content = content;
        this.url = url;
        this.clusterUuid = clusterUuid;
        this.time = time;
        this.reaction = reaction;
        this.echo = echo;
        this.related = related;
    }
    return News;
}());
exports.News = News;
var NewsCluster = (function () {
    function NewsCluster() {
    }
    return NewsCluster;
}());
exports.NewsCluster = NewsCluster;
//# sourceMappingURL=news.js.map