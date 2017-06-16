import { Injectable } from '@angular/core';
import { Person } from '../intefaces/person';

const PEOPLE : Person[] = [
  {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
  {id: 2, name: 'Alan Walker', height: 150, weight: 80},
  {id: 3, name: 'Nick Vuzic', height: 50, weight: 51}
];

@Injectable()
export class PeopleService {
  constructor() { }

  getAll() : Person[] {
    return PEOPLE;
  };

  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  };
}
