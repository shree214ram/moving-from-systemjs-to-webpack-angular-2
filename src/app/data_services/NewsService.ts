/**
 * Created by stan on 28/04/2017.
 */

import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceCRUD} from 'ngx-resource';
// import {RequestMethod} from '@angular/http';

export interface IQueryInput {
  page?: number;
  perPage?: number;
  dateFrom?: string;
  dateTo?: string;
  isRead?: string;
}

export interface INewsShort {
  id: number;
  date: string;
  title: string;
  text: string;
}

export interface INews extends INewsShort {
  image?: string;
  fullText: string;
}

@Injectable()
@ResourceParams({
  url: 'https://domain.net/api/users'
})
export class NewsService extends ResourceCRUD<IQueryInput, INewsShort, INews> {}

