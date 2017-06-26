
export class SecurityAsset {
  constructor(
    public uuid: number,
    public name: string,
    public alternativeNames: string
  ) {}
}

export class Relation {
  constructor(
    public security: SecurityAsset,
    public confidence: number
  ) {}
}

export class Chart {
  constructor(
    public notImplementedYet: boolean,
  ) {
    this.notImplementedYet = true;
  }
}

export class News {

  constructor(
    public id: number,
    public uuid: string,
    public headline: string,
    public summary: string,
    public content: string,
    public url: string,
    public clusterUuid: number,
    public time: Date,
    // import {PercentPipe} from "@angular/common";
    // https://angular.io/docs/ts/latest/api/common/index/PercentPipe-pipe.html
    public reaction: number,
    public echo: number,
    public related: Relation
) {}
}

export class NewsCluster {
  id: number;
  uuid: number;
  // TODO: could be renamed asset?
  security: string;
  date: Date;
  dailyChart: Chart;
  news: News[];
}

