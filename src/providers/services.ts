import { Injectable } from '@angular/core';
import {Services} from "../dummy-data/services";
import {Service} from "../models/service";


@Injectable()
export class ServicesProvider {

  services: Array<Service> = Services;

  constructor() {}

  query(params?: any) {
    // if no parameters are specified, return all
    if (!params) {
      return this.services;
    }

    // return only elements with specified parameters
    // params is a dictionary - key: attribute of obj to take into consideration, value: value to compare and filter
    return this.services.filter((building) => {
      for (let key in params) {
        let field = building[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return building;
        } else if (field == params[key]) {
          return building;
        }
      }
      return null;
    });
  }

}