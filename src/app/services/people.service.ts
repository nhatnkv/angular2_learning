import { Injectable } from '@angular/core';
import { Person } from '../intefaces/person';

@Injectable()
export class PeopleService {

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Alan Walker', height: 150, weight: 80},
      {name: 'Nick Vuzic', height: 50, weight: 51}
    ]
  };
  constructor() { }

}
